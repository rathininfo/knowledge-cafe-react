import PropTypes from 'prop-types'; 

const Blog = ({ blog }) => {
    const {title,cover_Image, author, author_image, posted_date, reading_time, hash_tags} = blog;
    return (
        <div className='border-red-400 border-2 mt-2'>
            <div>
                <img src={cover_Image} alt="Image Here" />
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired // Changed 'Blog' to 'blog'
};

export default Blog;