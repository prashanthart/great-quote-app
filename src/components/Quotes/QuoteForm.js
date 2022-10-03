import styles from "./QuoteForm.module.css";
import Card from "../UI/Card";
import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Loading from "../UI/Loading";

function QuoteForm(props) {
  const authInputRef = useRef();
  const textInputRef = useRef();
  const [entering, setEntering] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      textInputRef.current.value.trim() === "" &&
      authInputRef.current.value.trim() === ""
    ) {
      return;
    }
    props.onAddQuote({
      text: textInputRef.current.value,
      author: authInputRef.current.value,
    });
    textInputRef.current.value = "";
    authInputRef.current.value = "";
  };
  const formFocusHandler = () => {
    setEntering(true);
  };
  const finishEntering = () => {
    setEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={entering}
        message={(location) =>
          "Are you want to exit? you entered data will be lost.."
        }
      />
  <div className="forPadding">
      <Card className={styles.wrapper}>
      {props.Loading && <Loading/>}
       {!props.Loading && ( 
     
       <form
          onFocus={formFocusHandler}
          onSubmit={submitHandler}
          className={styles["form-control"]}>
          
          <div className={styles.author_input_control}>
            <label htmlFor="author">Author</label>
            <input id="author" ref={authInputRef} autoComplete="off" />
          </div>
          <div className={styles.text_input_control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              ref={textInputRef}
              autoComplete="off"
            ></textarea>
          </div>
          <button onClick={finishEntering}>Add Quote</button>
        </form>
       
        )}
      </Card> 
      </div>
    </Fragment>
  );
}
export default QuoteForm;
