import React, { useEffect } from "react";
import QuoteForm from "../components/Quotes/QuoteForm";
import { useHistory } from "react-router-dom";
// removable
import { addQuote } from "../components/lib/api";
import useHttp from "../components/hooks/use-http";

function AddQuote() {
  const history = useHistory();
  const { sendRequest, status} = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed" ) {
      history.push("/quotes");
    }
  }, [status,history]);

  const AddQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status==='Pending'} onAddQuote={AddQuoteHandler} />;
}
export default AddQuote;
