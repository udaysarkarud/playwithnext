import { PrismaClient } from "@prisma/client";
export async function GET() {
  const prisma = new PrismaClient();
  const userDetails = await prisma.user.findMany({
    where: {
      id: 15,
    },
  });
  return new Response(JSON.stringify(userDetails));
}
