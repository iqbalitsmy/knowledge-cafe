import React from 'react';
import './BookmarkBlogs.css'

const BookmarkBlogs = ({bm}) => {
    const { name } = bm;
    return (
        <div className='bookmark-blogs'>
            <p>{name}</p>
        </div>
    );
};

export default BookmarkBlogs;