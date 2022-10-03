import { Link } from "react-router-dom";

function NoQuote(){
    return <div className="center">

        <h2 className="center">No Quote Found</h2>
        <Link className="btn--flat" to="/add-quote">Add Quote</Link>
    </div>
}
export default NoQuote;