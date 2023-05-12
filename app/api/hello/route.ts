export async function GET(req: Request) {
  const name = {
    name: "Uday Sarkar",
  };
  return new Response(JSON.stringify(name));
}
