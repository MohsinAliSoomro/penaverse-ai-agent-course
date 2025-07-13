import Link from "next/link";
import Posts from "./component/posts";
// this is server component
async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  return result;
}
export default async function Page() {
  const result = await fetchTodos();
  return (
    <ul className="px-10">
        {/* this is first server example */}
      {result.map((item: any) => (
        <Link
          className="mx-2 underline font-bold"
          key={item.id}
          href={`/blog/${item.id}`}
        >
          {item.title}
        </Link>
      ))}
      {/* this is client example */}
      {/* <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={result} />
      </Suspense> */}

      {/* this example is for form state */}
      {/* <Form action={"/search"}>
              <input name="query" />
              <SearchButton />
      </Form> */}
    </ul>
  );
}
