import mongoose, { Schema } from "mongoose";

export interface ITask {
    name: string,
    creator: string,
    description: string,
    datetime?: Date,
}

const taskSchema: Schema<ITask> = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    creator: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    datetime: {
        required: false,
        type: Date
    },
})

export const Task = mongoose.model<ITask>('User', taskSchema);


export const addTask = (
    tasks: Array<ITask>,
    name: string,
    creator: string,
    description: string,
    datetime?: Date):Array<ITask> => {    

    let newTask:ITask = {
        name,
        creator,
        description,
        datetime,
    }
        
    tasks.push(newTask)

    return tasks
}

export const removeTask = (
    tasks: Array<ITask>,
    id: string):Array<ITask> => {
    const taskIndex = tasks.findIndex(task => task.creator == id)
    if (taskIndex !== -1) return tasks.splice(taskIndex, 1)
    throw new Error("task id do not exist")
}