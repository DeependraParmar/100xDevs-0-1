const express = require("express");
const port = 3000;
const { addTodo } = require("./types.js");
const { updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));


app.get("/", (req, res, next) => {
    res.send("Hello, Welcome to the ultimate todo app");
});

app.get("/todos", async (req, res, next) => {
    const todos = await todo.find({});

    res.status(200).json({
        success: true,
        todos,
    })
});

app.post("/todo", async (req, res, next) => {
    const createPayload = req.body;
    const parsePayload = addTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        return res.status(411).json({
            message: "Wrong Input Sent",
            parsePayload,
        });
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        isCompleted: false,
    });

    res.status(200).json({
        success: true,
        message: "Todo Created Successfully",
    })
});

app.put("/completed", async (req, res, next) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        return res.status(411).json({
            message: "Wrong Input Sent",
            parsePayload,
        });
    }

    await todo.update({
        _id: req.body.id
    },
    {
        isCompleted: true,
    });

    res.status(200).json({
        success: true,
        message: "Todo Updated Successfully",
    })
});


app.listen(port, () => {
    console.log(`Server live at http://localhost:${port}`);
})