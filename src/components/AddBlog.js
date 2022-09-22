import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate,Link } from 'react-router-dom';
import IMG from "./ASt.png"
function AddBlog() {
    const [data, setData] = useState({ "title": "", "description": "", "tag": "","image":"" })
    const [title,SetTitle]=useState("title")
    let Navigate = useNavigate()

    const Onchange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);

    }
    const url = "http://localhost:5000"
    const addNote = async (title, description, tag,image) => {
        try {
            if (title === "") {
                alert("Error:Please check that Title is valid!")

            }
            else if (description.length < 5) {
                alert("Error:Please check that Description should have more than  5 characters!")

            } else if (tag === "") {
                alert("Error:Please check that Tag is valid!")

            }
            else if (image === "") {
                alert("Error:Please check that image is valid!")

            }
            else {

                // setNotes(notess.concat(note))
                alert("Success:Note is Added")
                Navigate("/Account")
            }

            const response = await fetch(`${url}/api/notes/addnote`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.authtoken
                },
                body: JSON.stringify({ title, description, tag,image }) // body data type must match "Content-Type" header
            });
            localStorage.setItem("A", response)
            const note = [
                {
                    "user": "62ff7ebadb7626305e193382",
                    "title": title,
                    "description": description,
                    "tag": tag,
                    "_id": "6301e242fdb9079d86462caa",
                    "date": "2022-08-21T07:44:02.652Z",
                    "image":image,
                    "__v": 0
                }
            ]

            
        } catch (error) {
            // alert("Error:Please check that Title is valid and description contains 5 characters")
            console.log(error);

        }

    }
    const addNote1 = () => {
        addNote(data.title, data.description, data.tag,data.image)
    }
    return (
        <>
        {localStorage.authtoken?
        <div className='Centre'>
        <div className='Square'>
            <div className='imgg'>
            <img src={IMG}/>
            </div>
            {title === "title"&&
            <div className='content'>
            <label>Title</label>
            <input name='title' onChange={Onchange} className='inp2' type={'text'}/>
            <button className='button-48'onClick={()=>{SetTitle("Desc")}}><span>Next</span></button>
            </div>
            }
            {title === "Desc"&&
            <div className='content'>
            <label>Description</label>
            <textarea name='description' onChange={Onchange} className='inp2' type={'text'}/>
            <button className='button-48'onClick={()=>{SetTitle("type")}}><span>Next</span></button>
            <button className='button-48'onClick={()=>{SetTitle("title")}}><span>Prev</span></button>
            </div>
            }
                        {title === "type"&&
            <div className='content'>
            <label>Type</label>
            <input name='tag' onChange={Onchange} className='inp2' type={'text'}/>
            <button className='button-48'onClick={()=>{SetTitle("image")}}><span>Next</span></button>
            <button className='button-48'onClick={()=>{SetTitle("Desc")}}><span>Prev</span></button>
            </div>
            }
                        {title === "image"&&
            <div className='content'>
            <label>Image Url</label>
            <input type={"url"} className="inp2" onChange={Onchange} name="image" />
            <button className='button-48'onClick={addNote1}><span>Submit</span></button>
            <button className='button-48'onClick={()=>{SetTitle("type")}}><span>Prev</span></button>
            </div>
            }
        </div>
        </div>
        :
        <>
        <div className="mainbox">
          <i className="far fa-question-circle fa-spin"></i>
          <div className="msg">Sorry, Please Login Or Sign Up
            <br />
            <Link className='button-48' to={"/login"}><span>Login</span></Link>
            <br />
            <Link className='button-48' to={"/signup"}><span>signup</span></Link></div>
        </div>

      </>
    }
        </>
    )
}

export default AddBlog
