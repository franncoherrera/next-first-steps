"use client";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";
import { updateTodo } from "../helpers/todos";
import { TodoItem } from "./TodoItem";

interface Props {
  todos?: Todo[];
  isServerAction: boolean;
}
export const TodosGrid = ({ todos = [], isServerAction }: Props) => {
  const router = useRouter();

  const toggleTodoRest = async (id: string, complete: boolean) => {
    const updatedTodo = await updateTodo(id, complete);
    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={isServerAction ? toggleTodo : toggleTodoRest}
          isServerAction={isServerAction}
        />
      ))}
    </div>
  );
};
