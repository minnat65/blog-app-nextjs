'use client'
import { useRouter } from 'next/router';
import { onBlogSubmit } from '../../../../lib/actions';
import Input from '../../../components/custom/input';
import TextArea from '../../../components/custom/text-area';

export default function NewBlog() {

  return (
    <div className='p-6 bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2'>
      <form className="max-w-xl mx-auto h-screen" action={onBlogSubmit}>
        <div className="mb-5">
          <Input label="Author" name="author" />
        </div>
        <div className="mb-5">
          <Input label='Title' name='title' />
        </div>
        <div className="mb-5">
          <TextArea label='Content' name='content' />
        </div>
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}