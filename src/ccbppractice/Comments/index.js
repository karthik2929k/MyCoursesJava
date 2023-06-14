import {useState} from 'react'
import {v4 as uuidv4} from "uuid"
import CommentItem from '../CommentItem';
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  // const [formData,onStatachange]=useState({
  //   name:"",
  //   comment:""
  // })
  const[name,setName]=useState("");
  const[comment,setComment]=useState("");
 // const [commented,addComment]=useState({name:'',comment:""})
  const [commentslist,addcommentslist]=useState([])

 const onUserupdatename=(e)=>{
      setName(e.target.value);
 }

 const onUserupdate=(e)=>{
  setComment(e.target.value);
}
  const userSubmit=(event)=>{
      event.preventDefault();
   //   addComment({name,comment})
      const commentitems={
        id:uuidv4(),
        name,
        comment
      }
      console.log(commentitems);
      setName('')
      setComment('')
      addcommentslist(prevState=>[...prevState,commentitems])
      console.log("Form submited !! ")
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={userSubmit}>
        <NameInput type="text" placeholder="Your name" value={name} onChange={onUserupdatename}/>
        <CommentTextInput placeholder="Your comment" rows="6" value={comment} onChange={onUserupdate} />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

     {/* <CommentItem commentDetails={commented} ></CommentItem> */}
      <CommentsList>
        {commentslist.map((eachcomment)=>(<CommentItem key={eachcomment.id} commentDetails={eachcomment}/>))}
      </CommentsList>
    </CommentsContainer>
  )
  }

export default Comments