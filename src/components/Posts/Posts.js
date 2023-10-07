import React, {useState, useEffect} from 'react'
import {posts} from 'aleph-js'
import Post from './Post'

function Posts(props) {
    const [loadedPosts, setLoadedPosts] = useState([])

    const loadPosts = async () => {
        const loadedPosts = await posts.get_posts('chat',{'refs': ['hall']})
        setLoadedPosts(loadedPosts.posts)
    }

    useEffect(()=> {
        loadPosts()
    },[])
  return (
    <div className='posts'>
        {loadedPosts?loadedPosts.map((post, i) => 
            <Post key = {post.item_hash} post = {post} />)
            : <></>
        }
        <div className='post card'>
            <div className='card-body'>
            </div>
        </div>
    </div>
  )
}

export default Posts;