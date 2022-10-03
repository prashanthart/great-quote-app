import React, { Fragment } from "react";
import styles from './CommentItem.module.css';
function CommentItem(props){
    return <Fragment>

        <div className={styles.text}>{props.comment}</div>
        <div className={styles.hr}/>
    
    </Fragment>
}
export default CommentItem;