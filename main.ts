import { Plugin } from 'obsidian';
import { extendTask, extendParser } from './extend';

export default class TasksExtended extends Plugin {
	private extendTask: (listItem: any, task: any, api: any) => void;
	private extendParser: (line: string, layoutOptions: any) => void;

	async onload() {
		this.extendTask = extendTask;
		this.extendParser = extendParser;
	}

	onunload() {

	}
}