import React, { Fragment } from "react";
import Card from "../UI/Card";
import styles from './HighLightedQuote.module.css';

function HighLightedQuote(props){

    return (
        <Fragment>
            <h1 className={styles.title}>Quote Detail</h1>
            <Card className={styles.black_card}>
                <h2>{props.text}</h2>
                <p>-{props.author}</p>
            </Card>
        </Fragment>
    )


}
export default HighLightedQuote;