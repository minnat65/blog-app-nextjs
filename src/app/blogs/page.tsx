import { data } from '../../../data';
import Blogs from "@/components/blogs"
import { getBlogs } from '../../../lib/blogs.js';

export default async function BlogsList() {
  const blogsData = await getBlogs();

  return (
    <div className='justify-self-center space-y-4 max-w-xl w-full'>
      <Blogs data={blogsData}/>
    </div>
  )
}