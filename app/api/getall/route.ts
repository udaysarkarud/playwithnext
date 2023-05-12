import { PrismaClient } from "@prisma/client";
export async function GET(req: Request) {
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany();
  return new Response(JSON.stringify(allUsers));
}
