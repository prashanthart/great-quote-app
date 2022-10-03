import React, { useEffect, useRef } from "react";
import styles from "./NewComment.module.css";
import useHttp from "../hooks/use-http";
import { addAComment } from "../lib/api";
// import { useParams } from "react-router-dom";
function NewComment(props) {
  const inputRef = useRef();
  const {sendRequest,status,error} = useHttp(addAComment);
  const {quoteId,addComment} = props;

  useEffect(()=>{
    if(status==='completed' && !error){
        addComment();
    }
  },[status,addComment,error])
  

  const commentSubmitHandler = (event) =>{
    event.preventDefault();
    const enteredComment = inputRef.current.value;  
    inputRef.current.value='';
    if(enteredComment.trim().length===0){
        return ;
    }
    sendRequest({comment : {text:enteredComment},quoteId:quoteId});
    props.addComment();
  }


  return (
    <form className={styles.form} onSubmit={commentSubmitHandler}>
      <div>
        <label htmlFor="comment">your comment</label>
        <textarea id="comment" rows="5" ref={inputRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button >Add a comment</button>
      </div>
    </form>
  );
}
export default NewComment;
