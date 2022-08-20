<p align="center">
    <img src="https://forthebadge.com/images/badges/powered-by-electricity.svg" />
    <img src="https://forthebadge.com/images/badges/powered-by-black-magic.svg" />
    <img src="ttps://forthebadge.com/images/badges/it-works-why.svg"/>
</p>

<p align="center">
	<img src="https://media.discordapp.net/attachments/781636061000368209/1010141641836855376/0_E7ioyfbvAEI4v8ta.jpeg?width=960&height=540" height="200" style="float: left; margin: 0px 10px 15px 1px;"/> <a style="font-size: 20px"> <a style="font-size: 30px"><br>
</p>

<p align="center">
    <a style="font-size:15px;font-family:verdana"><b>GitHub Repository Statistics/Info:</b></a><br>
    <img src="https://img.shields.io/github/forks/Da4ndo/Better-DiscordJS-V14-Bot-Template?label=Forks&color=lime&logo=githubactions&logoColor=lime">
    <img src="https://img.shields.io/github/stars/Da4ndo/Better-DiscordJS-V14-Bot-Template?label=Stars&color=yellow&logo=reverbnation&logoColor=yellow">
    <img src="https://img.shields.io/github/license/Da4ndo/Better-DiscordJS-V14-Bot-Template?label=License&color=808080&logo=gitbook&logoColor=808080">
    <img src="https://img.shields.io/github/issues/Da4ndo/Better-DiscordJS-V14-Bot-Template?label=Issues&color=red&logo=ifixit&logoColor=red">
    <br>
    <a style="font-size:15px;font-family:verdana"><b>Language:</b></a><br>
    <img src="https://img.shields.io/badge/JavaScript-100000?label=Made%20with:&style=flat&logo=javascript&color=yellow">
    <br>
    <a style="font-size:15px;font-family:verdana"><b>Fork/Download For:</b></a><br>
    <a href="https://replit.com/github/Da4ndo/Better-DiscordJS-V14-Bot-Template">
        <img src="https://img.shields.io/badge/Repl.it-100000?label=Fork%20on:&style=flat&logo=replit&color=808080&logoColor=white">
    </a>
    <a href="https://github.com/Da4ndo/Better-DiscordJS-V14-Bot-Template/archive/refs/heads/main.zip">
        <img src="https://img.shields.io/badge/Visual Studio Code-100000?label=Download%20for:&style=flat&logo=visual studio code&color=blue&logoColor=007ACC">
    </a>
    <a href="https://github.com/Da4ndo/Better-DiscordJS-V14-Bot-Template/fork">
        <img src="https://img.shields.io/badge/GitHub-100000?label=Fork%20on:&style=flat&logo=github&color=808080">
    </a>
</p>

# Better DiscordJS V14 Bot Template

The Discord bot project made with the npm package discord.js version 14 and it handles prefix commands, slash commands, events and components, and there is a logger and a language manager too. You can create many commands as you want to improve your Bot. **Project made with ❤ by Da4ndo.**

You can click on the star (⭐️) button above this repository if you liked this project! Thank you all. 🙏

Discord.js Documentation is linked [here](https://discord.js.org/#/docs/discord.js/main/general/welcome).

> The project is specialized for one config usage on all server.
>
> There are a few basic PrefixCommands/SlashCommands/Events/Components added.

# How to setup:

### 1. Install Required Packages

Run the following command:
```bash
npm install
```
**OR**
```bash
npm install discord.js @discordjs/rest ms dotenv moment mongoose
```

### 2. Modifying configs

Set token and client id in **.env**, and modify settings to your preference in **config.json**

# How to start?

Run the following command:
```bash
npm run start
```
**OR**
```bash
node bot.js
```

---------------

### Setup bot as a service (***linux only***):

1. Modify bot.service name to <your_bot_name>.service and fill the missing data in it.

2. Now you need to put it in the system services folder:

```bash
mv <your_bot_name>.service /etc/systemd/system/<your_bot_name>.service
```

3. How to start:

```bash
sudo systemctl start <your_bot_name>
```


> You can view it's logs using the following command: 
```bash
journalctl -u <your_bot_name>
```

# How to develop

For more information checkout **DOCS.md**.