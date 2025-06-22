const moment = require("moment");
const Todo = require("../models/Todo");

const homeController = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        res.locals.moment = moment;
        res.render("index", { title: "List todo", todos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addTodoFormController = (req, res, next) => {
    try {
        res.render("newtodo", { title: "New Todo" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTodoFormController = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.query.id);
        res.render("update-todo", { title: "Update Todo", todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateTodoController = async (req, res) => {
    try {
        const { title, desc } = req.body;
        await Todo.findByIdAndUpdate(req.params.id, { title, desc });
        res.redirect("/");
    } catch (err) {
        res.status(500).send("Update failed");
    }
};

const deleteTodoPageController = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.query.id);
        if (!todo) return res.status(404).send("Todo not found");

        res.render("delete", { title: "Delete Todo", todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addTodoController = async (req, res, next) => {
    try {

        const {id} =req.query;
        const { title, desc } = req.body;
        const newTodo = new Todo({ title, desc });
        await newTodo.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Option 2: Actually deleting the todo based on query params
const confirmDeleteController = async (req, res) => {
    const { id, confirm } = req.query;

    if (confirm === "yes") {
        try {
            await Todo.findByIdAndDelete(id);
            return res.redirect("/");
        } catch (error) {
            return res.status(500).send("Delete failed: " + error.message);
        }
    }

    res.redirect("/");
};






module.exports = {
    homeController,
    addTodoFormController,
    updateTodoFormController,
    updateTodoController,               // ✅ valid JS
    deleteTodoPageController,
    confirmDeleteController,
    addTodoController
};
