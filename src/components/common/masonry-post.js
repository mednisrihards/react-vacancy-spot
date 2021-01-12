import React from 'react'
import TagsRow from './tags-row'

export default function MasonryPost({ post, tagsOnTop }) {
    const imageBackground = { backgroundImage: `url("${ require(`../../assets/images/${ post.image }`).default}")` }
    const style = {...imageBackground, ...post.style}

    return (
        <a href={ post.link } className="masonry-post overlay" style={ style }>
            <div className="post-text">
                <TagsRow tags={post.categories}/>
                <div>
                    <h2 className='post-title'>{post.title}</h2>
                    <span className='post-date'>{post.date}</span>
                </div>
            </div>
        </a>
    )
}