import { useLocation } from "react-router-dom";
import "./index.css"

function PaintingDetails(props) {
    
    const location = useLocation()
    console.log(location)
    console.log(location.state)
    return(
        <>
             <img className="detailsPainting"
                            src={location.state.primaryImage}

                            />  

            <h1>{location.state.title}</h1>
            <h2>Culture: {location.state.culture}</h2>
            <h2>Year: {location.state.objectEndDate}</h2>
            <h2>Dimensions: {location.state.dimensions}</h2>
            <h2>Credit: {location.state.creditLine}</h2>
            
        </>
        
    )
}

export default PaintingDetails