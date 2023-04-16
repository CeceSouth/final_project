import "./index.css"

function Painting(props) {

    return(
            <>
                <img className="painting"
                    src={props.primaryImage}
                    // alt={props.title}
                />  
                <button className="button"> View Details</button>
            </>


    )
}

export default Painting