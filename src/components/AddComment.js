import React, { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'



function  AddComment(props) {
  const { addComment, id, g,Comment,h,User } = props
  const context = useContext(blogContext)
  // const GetUserById = context.GetUserById
  const Name = context.Name
  // const = context.

  const [data, setData] = useState({ "desc": "" })


  const Onchange = (e) => {
    
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);

  }
  const a = () => {
    // console.log(addComment);
    addComment(id, data.desc)

  }

  const cc = () => {
    g(id)
    // h(id)
    // GetUserById(Comment.userId)
    // console.log(Comment);
    // GetUserById(id)
    // console.log(Name);
  }
  return (
    <div className='commentArea'>
      <h1>Add Your Comment</h1>
      <div className='inparea'>
        <input className='inp3' onChange={Onchange} name="desc" />
        <button className='button-487' onClick={a}><span>Comment</span></button>

      </div>
      <br/>
      <button className='button-487' onClick={cc}><span>View Them</span></button>
      <h1 className='heading'>&nbsp;All Comment</h1>
    <div className='Gridale ddd'>
      {Comment.map((note) => {
        // h(note.userId)



        return <CommentItem iD={note._id} key={note._id} comment={note} />;
      })}
      </div>
    </div>
  )
}

export default AddComment
