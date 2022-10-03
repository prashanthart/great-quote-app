import React, { useEffect } from "react";
import {useParams,Route, Link} from 'react-router-dom';
import Comments from '../components/Comments/Comments';
import useHttp from "../components/hooks/use-http";
import { getAQuote } from "../components/lib/api";
import HighLightedQuote from "../components/Quotes/HighLightedQuote";
import Loading from "../components/UI/Loading";

// const DUMMY_DATA = [
//     {id:'id1', author:'prashanth',text:'Learning react is fun!'},
//     {id:'id2', author:'nani',text:'Learning react is easy!'},
//     {id:'id3', author:'max',text:'Life will give u!'},
// ]

function QuoteDetail(){

    const params = useParams();
    const {sendRequest,data:quote,status,error}  = useHttp(getAQuote);
    useEffect(()=>{

        sendRequest(params.quoteId);
    },[params.quoteId,sendRequest])
    if(status==='Pending'){
        return <Loading/>    
    }
    if(error){
        return <h2 className="center">something went wrong</h2>
    }

    if(!quote){
        
        return <h1 className="center">No quote found</h1>;
    }

    return (
        <section>
            <div className="forPadding">

            <HighLightedQuote text={quote.text} author = {quote.author}/>
            </div>
            <Route path={`/quotes/${params.quoteId}`} exact>

                <Link className="btn--flat" to = {`/quotes/${params.quoteId}/comments`}> load comment</Link>
            </Route>
            <Route path ={`/quotes/${params.quoteId}/comments`} >
                <Comments quoteId={params.quoteId}/>
            </Route>
        </section>
    )

}
export default QuoteDetail;