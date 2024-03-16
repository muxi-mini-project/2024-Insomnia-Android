
import React, { createContext, useContext, useState } from 'react';
import {dailyTasks} from "./DailyTask";

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState(dailyTasks.map(task => ({ ...task, completed: false })));

    const markTaskAsCompleted = taskId => {
        const newTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: true } : task
        );
        setTasks(newTasks);
    };

    return (
        <TasksContext.Provider value={{ tasks, markTaskAsCompleted }}>
            {children}
        </TasksContext.Provider>
    );
};
