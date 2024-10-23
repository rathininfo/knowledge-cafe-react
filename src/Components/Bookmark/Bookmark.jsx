import React from 'react';

// eslint-disable-next-line react/prop-types
const Bookmark = ({bookMark}) => {
    return (
        <div>
            <p>{bookMark.title}</p>
        </div>
    );
};

export default Bookmark;