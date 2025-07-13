'use server'
export async function createTodo(prevState:any,formData:FormData) {
     console.log({prevState})
    const title = formData.get("title")
    const content = formData.get("content")
    console.log({title,content})
    return {message:"There was a error"}
} 