import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Aside from '../Aside/Aside';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [data, setData] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    const notify = (msg) => toast(msg);

    const handleAddToBookmark = (blog) => {
        let newBlog = [];
        const exist = bookmark.find(blg => blg.id === blog.id);

        if (!exist) {
            newBlog = [...bookmark, blog];
            notify("Blogs add in bookmark");
        } else {
            const remaining = bookmark.filter(bg => bg.id !== blog.id);
            newBlog = [...remaining];
            notify("Blogs remove from bookmark");
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
                <ToastContainer />

            </div>
            <Aside bookmark={bookmark}></Aside>
        </main>
    );
};

export default Blogs;