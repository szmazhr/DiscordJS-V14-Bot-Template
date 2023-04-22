require("dotenv").config();
const moment = require("moment");
const Logger = require("./utils/logger");
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
  ],
});

const config = require("./config.json");
const dbManager = require("./utils/db/manager");

client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
client.buttons = new Collection();
client.select_menus = new Collection();
client.prefix = config["default"].server.prefix;
client.config = config;
client.models = require("./utils/db/models");
client.logger = new Logger(`./log/${moment().format("YYYY-MM-DD")}.log`);
client.get = dbManager.get

client.logger
  .init()
  .then(async () => {
    if (config.database) await dbManager.connect(client);

    client.logger.info("[MAIN] Called handlers initialization");
    ["command", "slashCommand", "events", "component"].forEach((handler) => {
      require(`./handlers/${handler}`)(client);
    });

    client.logger.info("[MAIN] Called login");
    client.login(process.env.TOKEN);
  })
  .catch((err) => {
    console.log(`[MAIN] Error initializing bot: ${err.stack}`);
    client.logger.error(`[MAIN] Error initializing bot: ${err.message}`);
    process.exit(1);
  });

module.exports = client;
