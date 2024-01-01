const zod = require("zod");

const addTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const updateTodo = zod.object({
    id: zod.string,
});

module.exports = {
    addTodo: addTodo, 
    updateTodo: updateTodo
};