"use client";
import { Todo } from "@prisma/client";
import { startTransition, useOptimistic } from "react";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import "./TodoItem.css";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
  isServerAction: boolean;
}

export const TodoItem = ({ todo, toggleTodo, isServerAction }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );
  const updatedTodo = isServerAction ? todoOptimistic : todo;

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <div className={updatedTodo.complete ? "todoDone" : "todoPending"}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() =>
            isServerAction
              ? onToggleTodo()
              : toggleTodo(updatedTodo.id, !updatedTodo.complete)
          }
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todo.complete ? "bg-blue-100" : "bg-red-100"
          }`}
        >
          {updatedTodo.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">
          {updatedTodo.description}
        </div>
      </div>
    </div>
  );
};
