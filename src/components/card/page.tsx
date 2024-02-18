import { IBlogs } from "@/interfaces"
import Link from "next/link"

export default function BlogCard({ blog }: { blog: IBlogs}) {
  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">{blog?.title}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{blog.content}</p>
        <div className="flex justify-between">
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Written by: {blog.author}</p>
          <Link 
            href={`/blogs/${blog.id}`} 
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  )
}