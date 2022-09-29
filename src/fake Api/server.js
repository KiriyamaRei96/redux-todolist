import { createServer, Model } from "miragejs";

export const setupServer = () => {
  createServer({
    models: {
      todos: Model,
    },
    routes() {
      this.get("/api/todoList", (schema) => {
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
