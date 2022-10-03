import React, { useCallback, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import styles from './Comments.module.css';
import NewComment from "./NewComment";
import { getAllComments } from "../lib/api";
import useHttp from "../hooks/use-http";
import CommentList from "./CommentList";
import Loading from "../UI/Loading";


function Comments(props) {
  const [toggle, setToggle] = useState(false);
  const [showHide,setShowHide] = useState(false);
  const quoteId = props.quoteId;

  const {sendRequest,status,data:loadedComment,error} = useHttp(getAllComments);
  
  useEffect(()=>{
    sendRequest(quoteId);
  },[quoteId,sendRequest])
  
  const addCommentHandler = useCallback(()=>{
      sendRequest(quoteId);
    },[quoteId,sendRequest])

  const inputToggleHandler = () => {
    setToggle((prestate) => !prestate);
  };
  const showHideToggle = ()=>{
    setShowHide(prestate=>!prestate);

  }

  let comments;
  if(status==='Pending'){
    comments = <Loading/>
  }
  if(status==='completed' && (!loadedComment || loadedComment.length===0)){
    comments = <p>no comments</p>
  }
  if(status==='completed' && (loadedComment && loadedComment.length>0)){
    comments = <div>
      {<button onClick={showHideToggle} className={styles.showHide}>{showHide?'show comments':'hide comments'}</button>}
      {!showHide && <CommentList comment={loadedComment}/>}
    </div>
  }
  if(error){
    comments = <p>error</p>
  }

  

  return (
   
    <section className={styles.comments_wrap}>
      <h2>User Comments</h2>
      {!toggle && <button onClick={inputToggleHandler}>Add a comment</button>}
      {toggle && <NewComment addComment={addCommentHandler} quoteId={quoteId} />}
      {comments}
    </section>
  );
}
export default Comments;
