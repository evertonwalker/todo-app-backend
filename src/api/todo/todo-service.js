const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
// Validar os dados necessário para criação
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
