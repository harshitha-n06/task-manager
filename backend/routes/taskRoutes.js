const express = require("express");

const Task = require("../models/Task");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();



/* CREATE TASK */

router.post("/", authMiddleware, async (req, res) => {

    try{

        const { title, description } = req.body;

        const newTask = new Task({

            user:req.user,

            title,

            description
        });

        await newTask.save();

        res.status(201).json(newTask);

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });
    }

});



/* GET TASKS */

router.get("/", authMiddleware, async (req, res) => {

    try{

        const tasks = await Task.find({
            user:req.user
        });

        res.status(200).json(tasks);

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });
    }

});



/* UPDATE TASK */

router.put("/:id", authMiddleware, async (req, res) => {

    try{

        const task = await Task.findById(req.params.id);

        if(!task){

            return res.status(404).json({
                message:"Task not found"
            });
        }

        task.completed = !task.completed;

        await task.save();

        res.status(200).json(task);

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });
    }

});



/* DELETE TASK */

router.delete("/:id", authMiddleware, async (req, res) => {

    try{

        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Task deleted"
        });

    }
    catch(err){

        res.status(500).json({
            message:"Server Error"
        });
    }

});

module.exports = router;