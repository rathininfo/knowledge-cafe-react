import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


// eslint-disable-next-line react/prop-types
const Blogs = ({handleMarkAsRead, handleBookMarks}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
            fetch('blogs.json')
            .then(res => res.json())
            .then(data =>setBlogs(data ))
            
    },[])


    return (
        <div className="md:w-2/3">
            {blogs.map((blog) =><Blog key={blog.id} blog = {blog} handleMarkAsRead={handleMarkAsRead} handleBookMarks = {handleBookMarks}></Blog>)}
        </div>
    );
};

export default Blogs;