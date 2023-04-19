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

                             <div className="paintingButton">
                            <Heart className="heartButton" isActive={props.like} onClick={() => 
                                    props.setLike((prevState) => 
                                        ({...prevState, [props.painting.objectID]: !props.like}))}
                            />

                                <Link className="linkButton" 
                                    state={props.painting} to={"/gallery/" + props.painting.objectID}>Details
                                </Link>
                            </div> 
                                
                    </div>


                } 

            </>


    )
}

export default Painting