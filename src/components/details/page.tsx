import { IBlogs } from "@/interfaces";

export default async function BlogDetails({ blog }: { blog: IBlogs}) {
  return (
    <div className="h-screen">
      <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {blog?.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {blog?.content}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-auto">
          Author: <span className="font-bold">{blog?.author}</span>
        </p>
      </div>
    </div>
  )
}