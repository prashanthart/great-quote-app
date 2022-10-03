import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";


const soringFunction = (quote,isAscending)=>{

  return quote.sort((q1,q2)=>{
    if(isAscending){
      return q1.id>q2.id ? 1:-1;
    }
    else{
      return q1.id<q2.id ? 1:-1;
    }
  })


}

function QuoteList(props) {
  const location = useLocation();
  const history = useHistory();
  const queryParam = new URLSearchParams(location.search);
  const isAscending = queryParam.get('sort')==='asc';
  const sortedQuotes = soringFunction(props.data,isAscending);
  
  const sortingHandler = () =>{
    history.push('/quotes?sort='+(isAscending ? 'dec':'asc'));
  }




  const data = sortedQuotes;
  const content = (
    <ul className={styles.ul}>
      {data.map((item) => (
        <QuoteItem
          key={item.id}
          id={item.id}
          author={item.author}
          text={item.text}
        />
      ))}
    </ul>
  );

  


  return (
    <Fragment>
      <div className={styles.div__ul}> 
        <div className={styles.sorting}>
          <button onClick={sortingHandler}>Sort {isAscending?'Decending':'Ascending'}</button>
        </div>
        {content}
      </div>
    </Fragment>
  );
}
export default QuoteList;
