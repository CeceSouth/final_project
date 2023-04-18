import { Link } from "react-router-dom";
import "./index.css"
function NotFound (){
    return(<>
        <h1>Opps, the page doesn't esit</h1>
        <Link className="BackButton" to="/gallery">Visit Gallery</Link>
        </>
    )

}
export default NotFound