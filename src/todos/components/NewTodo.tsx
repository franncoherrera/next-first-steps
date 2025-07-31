"use client";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteCreatedTodo } from "../helpers/todos";
import { useRouter } from "next/navigation";
import { addTodo, deleteServerCompleted } from "../actions/todo-actions";

interface Props {
  isServerAction: boolean;
}

export const NewTodo = ({ isServerAction }: Props) => {
  const router = useRouter();
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    if (isServerAction) {
      await addTodo(description);
    } else {
      createTodo(description);
      router.refresh();
    }
    setDescription("");
  };

  const deleteCompleted = async () => {
    if (isServerAction) {
      deleteServerCompleted();
    } else {
      await deleteCreatedTodo();
      router.refresh();
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Borrar completados
      </button>
    </form>
  );
};
