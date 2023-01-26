import React,{useState} from 'react'
import {Form} from  'react-bootstrap'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { createPost } from '../../redux/action';
const CreatePostModel = ({isopen,setIsOpen}) => {
    const dispatch = useDispatch()
    const [img,setImg] = useState([])
    const navigate = useNavigate()
    const [inpots, setInputs] = useState({
        place: "",  caption: "",
    })
    const handelChange = async (e) => {
        setInputs({ ...inpots, [e.target.name]: e.target.value })
    }
  const handelImage = async(e) =>{
        setImg(e.target.files[0])
    }
    const userData = async () => {
        const formData = new FormData()
        formData.append ("place",inpots.place)
        formData.append ("caption",inpots.caption)
        formData.append ("photo",img)
      await  dispatch(createPost(formData))
      navigate("/profile")
    }

  return (
    <Modal show={isopen} onHide={() => setIsOpen(false)}
     className="mt-5 pt-5">
<Modal.Header closeButton>
  <Modal.Title>Add a Post</Modal.Title>
</Modal.Header>
<form onSubmit={userData}>
<Modal.Body>
                <Form.Control
                    className='border-end-0 border-start-0 border-top-0  ml-5 mt-4 p-3'
                    type="file"
                    placeholder='Photo'
                    name='photo'
                    onChange={(e) => handelImage(e)} 
                    required
                    />
                <Form.Control
                    className='border-end-0 border-start-0 border-top-0 form-control ml-5 mt-4 p-3'
                    type="text"
                    placeholder='place'
                    name='place'
                    value={inpots.place}
                    onChange={handelChange} 
                    required
                    />
                <Form.Control
                    className='border-end-0 border-start-0 border-top-0 form-control ml-5 mt-4 p-3'
                    type="text"
                    placeholder='caption'
                    name='caption'
                    value={inpots.caption}
                    onChange={handelChange}
                    required
                     />
               
               </Modal.Body>
<Modal.Footer>
                <Form.Control className="bg-primary form-control hover-zoom p-3 rounded-2 text-center text-white" type='submit' value="Save Post" />
</Modal.Footer>     
            </form>



</Modal>
  )
}

export default CreatePostModel
