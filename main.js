/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => TasksExtended
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// extend.ts
var extendTask = (listItem, task, api) => {
  if (api.layoutOptions.showDoTodayButton) {
    addDoTodayButton(listItem, task, api);
  }
};
var extendParser = (line, layoutOptions) => {
  if (line === "show do today button") {
    layoutOptions.showDoTodayButton = true;
    return true;
  }
  return false;
};
function addDoTodayButton(listItem, task, api) {
  const today = window.moment();
  const isToday = task.scheduledDate && task.scheduledDate.format("YYYY-MM-DD") === today.format("YYYY-MM-DD");
  const doTodayBtn = listItem.createEl("a", {
    text: isToday ? "not today" : "do today",
    cls: "tasks-do-today"
  });
  doTodayBtn.onClickEvent((event) => {
    const updatedTask = new api.Task({
      ...task,
      scheduledDate: isToday ? null : today
    });
    api.replaceTaskWithTasks({
      originalTask: task,
      newTasks: [updatedTask]
    });
  });
}

// main.ts
var TasksExtended = class extends import_obsidian.Plugin {
  async onload() {
    this.extendTask = extendTask;
    this.extendParser = extendParser;
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyIsICJleHRlbmQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBsdWdpbiB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7IGV4dGVuZFRhc2ssIGV4dGVuZFBhcnNlciB9IGZyb20gJy4vZXh0ZW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3NFeHRlbmRlZCBleHRlbmRzIFBsdWdpbiB7XG5cdHByaXZhdGUgZXh0ZW5kVGFzazogKGxpc3RJdGVtOiBhbnksIHRhc2s6IGFueSwgYXBpOiBhbnkpID0+IHZvaWQ7XG5cdHByaXZhdGUgZXh0ZW5kUGFyc2VyOiAobGluZTogc3RyaW5nLCBsYXlvdXRPcHRpb25zOiBhbnkpID0+IHZvaWQ7XG5cblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdHRoaXMuZXh0ZW5kVGFzayA9IGV4dGVuZFRhc2s7XG5cdFx0dGhpcy5leHRlbmRQYXJzZXIgPSBleHRlbmRQYXJzZXI7XG5cdH1cblxuXHRvbnVubG9hZCgpIHtcblxuXHR9XG59IiwgImV4cG9ydCBjb25zdCBleHRlbmRUYXNrID0gKGxpc3RJdGVtOiBIVE1MTElFbGVtZW50LCB0YXNrOiBhbnksIGFwaTogYW55KSA9PiB7XG4gIGlmIChhcGkubGF5b3V0T3B0aW9ucy5zaG93RG9Ub2RheUJ1dHRvbikge1xuICAgIGFkZERvVG9kYXlCdXR0b24obGlzdEl0ZW0sIHRhc2ssIGFwaSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGV4dGVuZFBhcnNlciA9IChsaW5lOiBzdHJpbmcsIGxheW91dE9wdGlvbnM6IGFueSkgPT4ge1xuICBpZiAobGluZSA9PT0gJ3Nob3cgZG8gdG9kYXkgYnV0dG9uJykge1xuICAgIGxheW91dE9wdGlvbnMuc2hvd0RvVG9kYXlCdXR0b24gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFkZERvVG9kYXlCdXR0b24obGlzdEl0ZW06IEhUTUxMSUVsZW1lbnQsIHRhc2s6IGFueSwgYXBpOiBhbnkpIHtcbiAgY29uc3QgdG9kYXkgPSB3aW5kb3cubW9tZW50KCk7XG4gIGNvbnN0IGlzVG9kYXkgPSB0YXNrLnNjaGVkdWxlZERhdGUgJiYgdGFzay5zY2hlZHVsZWREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpID09PSB0b2RheS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgY29uc3QgZG9Ub2RheUJ0biA9IGxpc3RJdGVtLmNyZWF0ZUVsKCdhJywge1xuICAgICAgdGV4dDogaXNUb2RheSA/ICdub3QgdG9kYXknIDogJ2RvIHRvZGF5JyxcbiAgICAgIGNsczogJ3Rhc2tzLWRvLXRvZGF5JyxcbiAgfSk7XG5cbiAgZG9Ub2RheUJ0bi5vbkNsaWNrRXZlbnQoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkVGFzayA9IG5ldyBhcGkuVGFzayh7XG4gICAgICAgICAgLi4udGFzayxcbiAgICAgICAgICBzY2hlZHVsZWREYXRlOiBpc1RvZGF5ID8gbnVsbCA6IHRvZGF5LFxuICAgICAgfSk7XG5cbiAgICAgIGFwaS5yZXBsYWNlVGFza1dpdGhUYXNrcyh7XG4gICAgICAgICAgb3JpZ2luYWxUYXNrOiB0YXNrLFxuICAgICAgICAgIG5ld1Rhc2tzOiBbdXBkYXRlZFRhc2tdLFxuICAgICAgfSk7XG4gIH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUF1Qjs7O0FDQWhCLElBQU0sYUFBYSxDQUFDLFVBQXlCLE1BQVcsUUFBYTtBQUMxRSxNQUFJLElBQUksY0FBYyxtQkFBbUI7QUFDdkMscUJBQWlCLFVBQVUsTUFBTSxHQUFHO0FBQUEsRUFDdEM7QUFDRjtBQUVPLElBQU0sZUFBZSxDQUFDLE1BQWMsa0JBQXVCO0FBQ2hFLE1BQUksU0FBUyx3QkFBd0I7QUFDbkMsa0JBQWMsb0JBQW9CO0FBQ2xDLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTztBQUNUO0FBRUEsMEJBQTBCLFVBQXlCLE1BQVcsS0FBVTtBQUN0RSxRQUFNLFFBQVEsT0FBTyxPQUFPO0FBQzVCLFFBQU0sVUFBVSxLQUFLLGlCQUFpQixLQUFLLGNBQWMsT0FBTyxZQUFZLE1BQU0sTUFBTSxPQUFPLFlBQVk7QUFDM0csUUFBTSxhQUFhLFNBQVMsU0FBUyxLQUFLO0FBQUEsSUFDdEMsTUFBTSxVQUFVLGNBQWM7QUFBQSxJQUM5QixLQUFLO0FBQUEsRUFDVCxDQUFDO0FBRUQsYUFBVyxhQUFhLENBQUMsVUFBc0I7QUFDM0MsVUFBTSxjQUFjLElBQUksSUFBSSxLQUFLO0FBQUEsTUFDN0IsR0FBRztBQUFBLE1BQ0gsZUFBZSxVQUFVLE9BQU87QUFBQSxJQUNwQyxDQUFDO0FBRUQsUUFBSSxxQkFBcUI7QUFBQSxNQUNyQixjQUFjO0FBQUEsTUFDZCxVQUFVLENBQUMsV0FBVztBQUFBLElBQzFCLENBQUM7QUFBQSxFQUNMLENBQUM7QUFDSDs7O0FEL0JBLElBQXFCLGdCQUFyQixjQUEyQyx1QkFBTztBQUFBLEVBSWpELE1BQU0sU0FBUztBQUNkLFNBQUssYUFBYTtBQUNsQixTQUFLLGVBQWU7QUFBQSxFQUNyQjtBQUFBLEVBRUEsV0FBVztBQUFBLEVBRVg7QUFDRDsiLAogICJuYW1lcyI6IFtdCn0K
