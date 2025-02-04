import { addTask, sortTasks, getUpcomingTasks, scheduleReminders } from "./TaskManager.js";

addTask("Complete assignment", 5, "High");
addTask("Learn Node.js", 15, "Medium");
addTask("Complete Project", 30, "Low");

sortTasks();

console.log("Upcoming Tasks in 10 minutes:", getUpcomingTasks(10));

scheduleReminders();
