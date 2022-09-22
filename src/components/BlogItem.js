import React from 'react'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
function BlogItem (props) {
    // sestData(props)
    let Navigate = useNavigate()
    const {title,tag,desc,note,image} = props


      const context = useContext(blogContext)
      const GetNoteById = context.GetNoteById
    //   const GetUserById = context.GetUserById
      const DeleteYourBlog = context.DeleteYourBlog
      const Note = context.Note
    
    const style={
        
        background: `url(${image})`,
        margin: "3 % 5 %",
        backgroundSize:"cover",

        padding: "3 % 5 %"
    
} 

const GetNote = ()=>{
    console.log(Note);
    GetNoteById(note._id)
    // GetUserById(note._id)
    if (Note!==[]) {
        Navigate("/Blog")
    }
}
    const del = ()=>{
        DeleteYourBlog(note._id)
    }
    return (
        <>
        
    <div className='BlogBox BlogBox1'>
        <div className='imager'>
      <img src={`${image}`}/>
      </div>
      <div className='context'>
      <h1>{title}</h1>
      <p>{desc.slice(0,150)}            <span style={{color:"red", cursor:"pointer"}} onClick={()=>{
                GetNote() 
                console.log(Note);
                }}>{desc.length>150 ? "Read More":"Thank You For Reading"}</span></p>
      <span>{tag}</span>
      <h3>{note.date.slice(0,10)}</h3>
      <button className='button-487' onClick={del}>
        <span>Delete</span></button>
      </div>
    </div>
        <br/>
    </>
)
}

export default BlogItem
