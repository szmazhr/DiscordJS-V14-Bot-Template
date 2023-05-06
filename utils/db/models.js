const mongoose = require('mongoose');

const ServerModel = mongoose.Schema({
  id: String,
  language: String,
  prefix: String,
  commands_data: [],
  enabled_events: [String],
  enabled_managers: [String],
  groups: {},
});

const ManagerModel = mongoose.Schema({
  name: String,
  data: Map,
});

module.exports = {
  Server: mongoose.model('Servers', ServerModel),
  Manager: mongoose.model('Managers', ManagerModel),
};
