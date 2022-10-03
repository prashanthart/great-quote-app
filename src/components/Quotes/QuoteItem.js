import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import styles from './QuoteItem.module.css';
function QuoteItem(props){

    return (
    // <div className={styles.cover}>

   
    <Card className={styles.wrapper}>
        <div>
            <h3>
                {props.text}
            </h3>
            <small><i>-{props.author}</i></small>
        </div>
        <Link className={styles.btn} to = {`/quotes/${props.id}`}>View FullScreen</Link>

    </Card> 
    // </div>
    )
}
export default QuoteItem;