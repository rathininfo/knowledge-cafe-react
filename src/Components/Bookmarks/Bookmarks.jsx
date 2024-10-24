/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

// eslint-disable-next-line react/prop-types
const Bookmarks = ({readTime, bookMarks}) => {
    return (
        <div className="md:w-1/3 p-10">

            <div className='bg-gray-200 p-4 rounded-xl text-center'>
                <p className='text-purple-500 font-bold'>Spent time on read : {readTime} min</p>
            </div>

            <div className='mt-12 mb-4 font-bold text-xl'>
                <h2>BookMarks Blogs: {bookMarks.length}</h2>
            </div>

            <div className=''>
                {bookMarks.map((bookMark)=> <Bookmark key={bookMark.id} bookMark = {bookMark}></Bookmark>)}
            </div>
            
        </div>
    );
};

Bookmarks.prototype = {
    readTime: PropTypes.number
}


export default Bookmarks;