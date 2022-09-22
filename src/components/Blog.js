import React,{useEffect} from 'react'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'
import AddComment from './AddComment'
import Speech from 'react-speech';

export default function Blog() {
  const context = useContext(blogContext)
  const Note = context.Note
  const addComment = context.addComment
  const GetCommentByBlogId = context.GetCommentByBlogId
  const GetUserById = context.GetUserById
  const Comment = context.Comment
  const User = context.User
  const Name = context.Name
  // GetUserById(Note._id)
  // console.log(Name);

  const style = {


    height: "50%",
    width: "100%",
    color: "white",

  }
  const style2 = {
    color: "rgb(0,0,0)"
  }
  const style23 = {
    play: {
      button: {
        width: '28',
        height: '28',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'yellow',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: 6
      },
    }
  };
  return (
<>
<div className='BlogMainBox'>
  <img src={`${Note.image}`}/>
  <div className='context'>
  <h1>{Note.title}</h1> 
  <p className='tag'><span style={{background:"rgba(0,0,0,0.545)",padding:"4px",color:"white"}}>{Name.name}</span></p>
  <p>{Note.description}</p>
  <br/>
  <p className='tag'><span style={{background:"rgba(0,0,0,0.545)",padding:"4px",color:"white"}}>{Note.tag}</span></p>
  <br/>
  <button className='button-487'><Speech 
  textAsButton={true}    

    displayText="Speak" 
  text={Note.description}/></button>

  {/* <h3>{Note.date.slice(0,10)}</h3> */}
  </div>
</div>
  <AddComment User = {User} addComment={addComment} Comment = {Comment} id={Note._id} uss={Note.userId} g  = {GetCommentByBlogId}/>
</>
  )
}
