import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = (props) => {
    const { img, profile, authName, publish, minRead, name } = props.blog;
    const handleAddToBookmark = props.handleAddToBookmark;

    return (
        <section className='blog'>
            <div className='cover-img'>
                <img className='' src={img} alt="" />
            </div>
            <div className='profile'>
                <div className='profile-property'>
                    <img src={profile} alt="" />
                    <div>
                        <h4>{authName}</h4>
                        <p>{publish}</p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{minRead} min read</p>
                    <button type="button" onClick={() => handleAddToBookmark(props.blog)}>
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
            </div>
            <h1>{name}</h1>
            <a href="#">Mark as read</a>
        </section>
    );
};

export default Blog;