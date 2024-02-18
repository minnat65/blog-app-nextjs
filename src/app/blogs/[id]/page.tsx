import BlogDetails from "../../../components/details/page";
import { getBlogById } from "../../../../lib/blogs";

export default function ViewBlog({ params }: { params: { id: string }}) {
  const blog = getBlogById(params.id)
  
  return (
    <>
      <BlogDetails blog={blog} />
    </>
  )
}