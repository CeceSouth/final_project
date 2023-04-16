import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from "../Gallery"
import NotFound from "../NotFound";
function App() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
            
        </>
    )
}

export default App