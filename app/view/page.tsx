import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export const revalidate = 3600; // revalidate every hour

async function getPosts() {
  const prisma = new PrismaClient();
  const posts = await prisma.user.findMany();
  return posts;
}

export default async function Page() {
  const data = await getPosts();

  return (
    <>
      {data.map((e) => {
        return (
          <div className="border-2" key={e.id}>
            <h3>{e.name}</h3>
            <p>{e.email}</p>
            <button className="bg-orange-400 p-2 m-4 rounded text-white">
              Delete User
            </button>
          </div>
        );
      })}
    </>
  );
}
