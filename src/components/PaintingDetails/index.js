import { useLocation } from "react-router-dom";
import "./index.css"

function PaintingDetails(props) {
    
    const location = useLocation()
    return(
        <>
             <img className="detailsPainting"
                            src={location.state.primaryImage}

                            />  

            <h1>{location.state.title}</h1>
            <h2>Artist Name: {Boolean(location.state.ArtistDisplayName) === false ? "Not Available" : location.state.ArtistDisplayName}  </h2>
            <h2>Artist introduction: {Boolean(location.state.ArtistDisplayBio) === false ? "Not Available" : location.state.ArtistDisplayBio}</h2>
            <h2>Culture: {Boolean(location.state.culture) === false ? "Not Available" : location.state.culture}</h2>
            <h2>Year: {Boolean(location.state.objectEndDate) === false ? "Not Available" :location.state.objectEndDate}</h2>
            <h2>Dimensions: {Boolean(location.state.dimensions) === false ? "Not Available" : location.state.dimensions}</h2>
            <h2>Credit: {Boolean(location.state.creditLine) === false ? "Not Avaulable" : location.state.creditLine}</h2>
            
        </>
        
    )
}

export default PaintingDetails