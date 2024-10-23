import PropTypes from 'prop-types';

const Bookmarks = ({readTime}) => {
    return (
        <div className="md:w-1/3 border-2 border-red-500">

            <div>
                <p>Spent time on read : {readTime} min</p>
            </div>
            <h2 className="">Bookmarked Blogs : </h2>
        </div>
    );
};

Bookmarks.prototype = {
    readTime: PropTypes.number
}


export default Bookmarks;