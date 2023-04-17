
import { Link } from "react-router-dom";
import"./index.css"
function Home() {
    return(<>
            <h1>Welcome to Cece's gallery.</h1>
                <h2>There are art works mainly about religion of medieval Europe. </h2>
                <h2>You can check specific information of the work from different aspects.</h2>
                <Link className="StartButton" to="/gallery">Let's go</Link>

            </>)

}

export default Home