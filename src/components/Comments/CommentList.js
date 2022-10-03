import React, { Fragment } from "react";
import CommentItem from "./CommentItem";
import styles from './CommentList.module.css';

function CommentList(props){
    const data = props.comment;
    const content = <ul className={styles.ul}>{data.map(item => <CommentItem key={item.commentId} comment={item.text}/>)}</ul>;
    return <Fragment>
        {content}
    </Fragment>



}
export default CommentList;