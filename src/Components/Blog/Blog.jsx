import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Blog = ({blog, handleMarkAsRead, handleBookMarks }) => {
    const {title,cover_Image, author, author_image, posted_date, reading_time, hash_tags} = blog;
    return (
        <div className='mb-10 border-b-2'>
            <div className='w-full h-[500px]'>
                <img className='rounded-xl w-full h-full object-cover' src={cover_Image} alt="Image Here"/>
            </div>
            {/* author name reading time section */}
            <div className='flex justify-between mt-6'>
                <div className='flex gap-3 items-center'>
                    <img src={author_image} alt="" />
                    <div>
                    <p className='font-bold text-xl'>{author}</p>
                    <p className='text-sm text-gray-500'>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-gray-500'>
                    <p>{reading_time}</p>
                    <figure className="cursor-pointer" onClick={()=>handleBookMarks(blog)}><FaRegBookmark/></figure>
                </div>
            </div>

            <div>
                <p className='font-bold text-2xl my-2'>{title}</p>
                <span className='text-gray-500'>{hash_tags}</span>
            </div>

            <div>
                <button onClick={()=>handleMarkAsRead(reading_time)} className='underline font-bold text-base text-purple-600 mt-2 mb-5'>Mark As Read</button>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired, // Changed 'Blog' to 'blog'
    handleMarkAsRead: PropTypes.func
};

export default Blog;