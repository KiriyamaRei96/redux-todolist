import { createServer, Model } from "miragejs";

export const setupServer = () => {
  createServer({
    models: {
      todos: Model,
    },
    routes() {
      this.get("/api/todoList", (schema) => {
        schema.todos.create({
          id: 'c61ddd82-cd1d-44e5-bd37-0e82f9635a73',
          job: 'text',
          Priority: 'Medium',
          completed: false
        })
  
        return schema.todos.all();
      });
      this.post("/api/todoList", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        schema.todos.create(attrs);
        return attrs;
      });
      this.patch("/api/todoList/:id", (schema, request) => {
        let id = request.params.id;

        let attrs = JSON.parse(request.requestBody);
        return schema.todos.find(id).update(attrs);
      });
      this.del("/api/todoList/:id", (schema, request) => {
        let id = request.params.id;

        schema.todos.find(id).destroy();
      });
    },
  });

  //   server.get("/api/todoList", { todolist });
  //   server.post("/api/todoList", (schema, request) => {});
};
