import {HashRouter , Routes, Route} from "react-router-dom";
import Home from "../Home";
import Gallery from "../Gallery"
import PaintingDetails from "../PaintingDetails";
import NotFound from "../NotFound";

function App() {
    return(
        <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/gallery/:id" element={<PaintingDetails />} />
                    
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </HashRouter>
            
        </>
    )
}

export default App