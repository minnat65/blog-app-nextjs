import BlogCard from "./card/page";
import { IBlogs } from "@/interfaces";

const Blogs = ({ data }: { data: Array<IBlogs> }) => {
  return (
    <div className="overflow-auto">
      {data.map((d: any) => {
        return (
          <BlogCard blog={d} key={d.id} />
        )
      })}
      {data.length === 0 && (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
          <p>No Blogs Available.</p>
        </div>
      )}
    </div>
  )
};

export default Blogs;