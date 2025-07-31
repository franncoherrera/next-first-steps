import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma 0", complete: true },
      { description: "Piedra del alma 1" },
      { description: "Piedra del alma 2" },
      { description: "Piedra del alma 3" },
      { description: "Piedra del alma 4" },
      { description: "Piedra del alma 5" },
    ],
  });
  return NextResponse.json({ message: "Response ok" });
}
