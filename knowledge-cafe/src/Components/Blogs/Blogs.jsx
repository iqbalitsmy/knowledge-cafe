import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Aside from '../Aside/Aside';

const Blogs = () => {
    const [data, setData] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    const handleAddToBookmark = (blog) => {
        let newBlog = [];
        const exist = bookmark.find(blg => blg.id === blog.id);

        if(!exist) {
            newBlog = [...bookmark, blog];
        } else {
            const remaining = bookmark.filter(bg => bg.id !== blog.id);
            newBlog = [...remaining];
            console.log("rmaining", remaining)
        }
        setBookmark(newBlog);
    }

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <main className='blog-container'>
            <div>
                {
                    data.map(blog => <Blog
                        key={blog.id}
                        handleAddToBookmark={handleAddToBookmark}
                        blog={blog}
                        >
                    </Blog>)
                }
            </div>
                <Aside bookmark={bookmark}></Aside>
        </main>
    );
};

export default Blogs;