'use server'

import { redirect } from "next/navigation";
import { addBlog } from "./blogs";

export async function onBlogSubmit (formData) {
  const blog = {
    author: formData.get('author'),
    title: formData.get('title'),
    content: formData.get('content')
  }

  await addBlog(blog);

  redirect('/');
}