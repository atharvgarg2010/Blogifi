import React from 'react'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'
import { useEffect } from 'react'
// import Note from '../../backend/models/Note'


function CommentItem(props) {
  const { comment } = props
  const context = useContext(blogContext)
  // const Name = context.Name

  return (
    <div className='comment'>
      <span>{comment.desc}</span>
      <br />
      {/* <span>{Name.name}</span> */}
    </div>
  )
}

export default CommentItem
