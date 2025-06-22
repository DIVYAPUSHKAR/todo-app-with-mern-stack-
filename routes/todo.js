const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

// Home route
router.get("/", todoController.homeController);

// Add todo form
router.get("/add-todo", todoController.addTodoFormController);

// Update todo form
router.get("/update-todo", todoController.updateTodoFormController);

// Delete todo page
router.get("/delete-todo", todoController.deleteTodoPageController);

// Add todo (POST)
router.post("/add-todo", todoController.addTodoController);

// ✅ Fix this line
router.post("/update-todo/:id", todoController.updateTodoController);
router.get("/confirm-delete", todoController.confirmDeleteController);

module.exports = router;
