import { notFound } from "next/navigation";
import { cache } from "react";

const getTodo = cache(async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return await response.json();
});
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result: any = await getTodo(slug);
  console.log({result})
  if(!Object.keys(result).length){
    notFound()
  }
  return (
    <div className="mx-10">
      <p>Id : {slug}</p>
      <p>Title : {result.title}</p>
      <p>completed : {result.completed ? "Yes" : "No"}</p>
    </div>
  );
}
