export let tasks = [];

export function addTask(title, dueTime, priority) {
    try {
        if (!title || typeof dueTime !== "number" || !priority) {
            throw new Error("Please provide a valid title, due time (in minutes), and priority.");
        }

        let task = {
            title: title,
            dueTime: Date.now() + dueTime * 60000,
            priority: priority
        };

        tasks.push(task);
        console.log("Task added: " + title);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

export function sortTasks() {
    tasks.sort(function (a, b) {
        return a.priority.localeCompare(b.priority);
    });
}

export function getUpcomingTasks(minutes) {
    let now = Date.now();
    let upcomingTasks = [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].dueTime - now <= minutes * 60000) {
            upcomingTasks.push(tasks[i]);
        }
    }

    return upcomingTasks;
}

export function scheduleReminders() {
    tasks.forEach(task => {
        const delay = task.dueTime - Date.now();
        if (delay > 0) {
            setTimeout(() => {
                console.log("Reminder: " + task.title + " is due now!");
            }, delay);
        }
    });
}
