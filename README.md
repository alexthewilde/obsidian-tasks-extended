This is a simple plugin that extends the [Obsidian Tasks Plugin](https://github.com/obsidian-tasks-group/obsidian-tasks)
with some useful functionalities.

## Installation

1. Download this plugin and place it under `[path to your vault]/.obsidian/plugins/`
2. `cd [path to your vault]/.obsidian/plugins/obsidian-tasks-extended`
3. Run `npm i` to install its dependencies
4. Enable the "Tasks Extended" plugin in Obsidian Settings
5. Restart Obsidian

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

This will produce something like this

![image](https://user-images.githubusercontent.com/67973/197735201-19cf9efb-fd9d-4f19-a2e3-c465766f7ee0.png)
