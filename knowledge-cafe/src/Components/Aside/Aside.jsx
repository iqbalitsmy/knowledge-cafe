import React, { useEffect, useState } from 'react';
import './Aside.css'
import BookmarkBlogs from '../BookmarkBlogs/BookmarkBlogs';

const Aside = ({ bookmark }) => {
    const [blogsTime, setBlogsTime] = useState(0);

    useEffect(() => {
        let totalTime = 0;
        bookmark.map(bm => {
            totalTime += bm.minRead
        });
        setBlogsTime(totalTime);
    }, [bookmark])

    return (
        <aside className='bookmark-container'>
            <div className='bookmark-min'>
                <p>Spent time on read :{blogsTime}</p>
            </div>
            <div className='bookmark-blogs-container'>
                <h3>Bookmarked Blogs : </h3>
                {
                    bookmark.map((bm) => <BookmarkBlogs bm={bm} ></BookmarkBlogs>)
                }

            </div>

        </aside>
    );
};

export default Aside;