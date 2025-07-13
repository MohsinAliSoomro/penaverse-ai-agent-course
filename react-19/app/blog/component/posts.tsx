import Link from "next/link"
import { use } from "react"

// this is client component
export default function Posts({posts}:any){
    const result:any = use(posts)
    return <div>
        client component
        {result?.map((item: any) => (
        <Link
            
          className="mx-2 underline font-bold"
          key={item.id}
          href={`/blog/${item.id}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
}