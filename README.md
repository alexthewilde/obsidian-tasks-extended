This is a simple plugin that extends the [Obsidian Tasks Plugin](https://github.com/obsidian-tasks-group/obsidian-tasks)
with some useful functionalities.

## Installation

1. Download this plugin and place it under `[your vault]/.obsidian/plugins/`
2. Run `npm i` to install its dependencies
3. Enable the plugin in Obsidian Settings
4. Restart Obsidian

## Do Today Button

Adds a "DO TODAY" button next to a task and sets its `scheduled date` to today.
If `scheduled date` is already set to today, then the button will display
"NOT TODAY" and reset the date.

### How to use

Simply create a tasks view containing `show do today button`. Example:

````markdown
```tasks
show do today button
```
````
