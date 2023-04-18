import Heart from "react-heart"
import { Link } from "react-router-dom";
import "./index.css"

function Painting(props) {
    

    return(
            <>
                {props.painting.primaryImage &&
                    <div>
                            <img className="painting"
                            src={props.painting.primaryImage}

                            />  

                            <div >
                                <Heart className="heartButton" isActive={props.like} onClick={() => 
                                    props.setLike((prevState) => ({...prevState, [props.painting.objectID]: !props.like}))}/>

                                <Link state={props.painting} className="linkButton" to={props.paintingID}>Details</Link>
                            </div>
                        

                    {/* </div> */}
                    </div>

                } 
                


            </>


    )
}

export default Painting