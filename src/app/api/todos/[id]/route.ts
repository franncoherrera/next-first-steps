import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | undefined> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    return undefined;
  }
  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const { id } = await params;
  const todo = await getTodo(id);
  if (!todo)
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 }
    );
  return NextResponse.json(todo);
}

const putSchema = object({
  complete: boolean().optional(),
  description: string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const { id } = await params;
  const todo = await getTodo(id);
  if (!todo)
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 }
    );
  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description },
    });
    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
