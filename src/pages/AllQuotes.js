import React, { useEffect } from "react";
import QuoteList from "../components/Quotes/QuoteList";
import { getQuotes } from "../components/lib/api";
import useHttp from "../components/hooks/use-http";
import Loading from "../components/UI/Loading";

import NoQuote from "../components/Quotes/NoQuote";
// import { Link } from "react-router-dom";

import Footer from "../components/Layout/Footer";

// const DUMMY_DATA = [
//     {id:'id1', author:'prashanth',text:'Learning react is fun!'},
//     {id:'id2', author:'nani',text:'Learning react is easy!'},
//     {id:'id3', author:'max',text:'Life will give u!'},
// ]
function AllQuotes() {
  const {
    sendRequest,
    status,
    error,
    data: loadedData,
  } = useHttp(getQuotes, true);
  // console.log(loadedData);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "Pending") {
    return <Loading />;
  }
  if (error) {
    return <h2 className="center">something went wrong</h2>;
  }
  if (!loadedData || loadedData.length === 0) {
    return <NoQuote />;
  }

  return (
    <section>
      <QuoteList data={loadedData} />
      <Footer/>
    </section>
  );
}
export default AllQuotes;
