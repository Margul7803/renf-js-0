import express, { Express, Request, Response } from "express";
import { Task } from "./model";
import mongoose from "mongoose";
import cors from "cors";

const mongoString = "mongodb://admin:password123@localhost:27017";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app: Express = express();
const port = 3000;

app.use(express.json())
app.use(cors());

app.get("/tasks", async (req: Request, res: Response) => {
    const tasks = await Task.find()
    res.status(200).json(tasks);
});

app.post("/tasks", async (req: Request, res: Response) => {
    const name:string = req.body.name
    const description:string = req.body.description
    const creator:string = req.body.creator
    const datetime:Date = req.body.datetime

    const data = new Task({
        name,
        creator,
        description,
        datetime,
    })

    try {
        const dataToSave = await data.save()
        res.status(201).json({message: dataToSave});
    }catch(e:any){
        res.status(400).json({message: e.message});
    }
});

app.delete("/tasks", async (req: Request, res: Response) => {
    const _id:string = req.body.id

    try {
        await Task.deleteOne({_id})
        res.status(200).json({message: 'task deleted'});
    }catch(e:any){
        res.status(400).json({message: e.message});
    }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});