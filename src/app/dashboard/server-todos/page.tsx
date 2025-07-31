export const dynamic = "force-dynamic";
export const revalidate = 0;
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "Server Todos",
  description: "SEO Title",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  const isServerAction: boolean = true;
  return (
    <>
      <div className="text-2xl mb-2">Server Actions</div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo isServerAction={isServerAction} />
      </div>
      <TodosGrid todos={todos} isServerAction={isServerAction} />
    </>
  );
}
