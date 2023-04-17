import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Home";
import Gallery from "../Gallery"
import PaintingDetails from "../PaintingDetails";
import NotFound from "../NotFound";

function App() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/gallery/:id" element={<PaintingDetails />} />
                    
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
            
        </>
    )
}

export default App