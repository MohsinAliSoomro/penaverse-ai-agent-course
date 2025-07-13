// first example
// import { createTodo } from "../actions/blog";

// export default async function Page() {
//   return (
//     <form action={createTodo}>
//       <input className="border placeholder:text-amber-500" placeholder="title" type="text" name="title" />
//       <input className="border placeholder:text-amber-500" placeholder="content" type="text" name="content" />
//       <button type="submit">Create</button>
//     </form>
//   );
// }
// second example 
'use client'

import { useActionState } from "react";
import { createTodo } from "../actions/blog";

export default  function Page() {
    const [state,formAction,pending] = useActionState(createTodo,{
        message:""
    })
  return (
    <form action={formAction}>
      <input className="border placeholder:text-amber-500" placeholder="title" type="text" name="title" />
      <input className="border placeholder:text-amber-500" placeholder="content" type="text" name="content" />
      {state.message ? <p aria-live="polite">{state.message}</p> : null}
      <button type="submit">Create</button>
    </form>
  );
}