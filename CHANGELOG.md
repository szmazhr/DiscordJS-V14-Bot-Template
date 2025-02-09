# Changelog

All notable changes to this project will be documented in this file.

## [Released]

## [1.2.1] - 2023-05-6

### Fixed
- Added ESLint and Prettier for improved code quality and formatting.
- Renamed `server` to `Server` and `manager` to `Manager` in the export object of the Mongoose models. And also where it was used.
- Changed some variables to CamelCase
- Fixed a typo in the `slashCommands/help.js` file, where an undefined variable `arg` was replaced with `argcommand` in the 
- Modified `events/interactionCreate.js` file to replace `cooldown` with `commands:cooldown` and updated `ms` function parameters to use `slash-${commandData.name}` and `interaction.user.id`. This change ensures that cooldown works correctly for slash commands.
- Removed `@discordjs/rest` as it is already included by `discord.js`.

## [1.2.0] - 2023-05-6

### Changed
- Updated handlers to load all valid command files in their directory and all its subdirectories, regardless of how deep the subdirectories go
- Fixed forgetten false reference for configs

### Added
- More basic slash commands (userinfo, serverinfo, avatar)

## [1.1.1] - 2023-04-22

### Changed
- Fixed and improved connection to Mongo database
- Added Dockerfile, .dockerignore
- Improved docker-compose.yml

## [1.1.0] - 2023-04-06

### Changed
- Updated all file (handlers, events, utils...) quality and efficiency.
- Updated versions of dependencies.
- Fixed command not enabled issue.