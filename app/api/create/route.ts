import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const body = await req.json();

  await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  const name = {
    name: "Uday Sarkar",
  };
  return new Response("Ok");
}
