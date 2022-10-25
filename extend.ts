export const extendTask = (listItem: HTMLLIElement, task: any, api: any) => {
  if (api.layoutOptions.showDoTodayButton) {
    addDoTodayButton(listItem, task, api);
  }
}

export const extendParser = (line: string, layoutOptions: any) => {
  if (line === 'show do today button') {
    layoutOptions.showDoTodayButton = true;
    return true;
  }
  
  return false;
}

function addDoTodayButton(listItem: HTMLLIElement, task: any, api: any) {
  const today = window.moment();
  const isToday = task.scheduledDate && task.scheduledDate.format('YYYY-MM-DD') === today.format('YYYY-MM-DD');
  const doTodayBtn = listItem.createEl('a', {
      text: isToday ? 'not today' : 'do today',
      cls: 'tasks-do-today',
  });

  doTodayBtn.onClickEvent((event: MouseEvent) => {
      const updatedTask = new api.Task({
          ...task,
          scheduledDate: isToday ? null : today,
      });

      api.replaceTaskWithTasks({
          originalTask: task,
          newTasks: [updatedTask],
      });
  });
}
