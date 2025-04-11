import {BrowserRouter, Routes, Route} from "react-router-dom";


//public pages
import Home from "../public/home.jsx";
import FlavourFlip from "../public/flavourFlip.jsx";
import TonePro from "../public/tonePro.jsx";
import ShutterSpace from "../public/shutterSpace.jsx";
import Visualify from "../public/visualify.jsx";

function AppRouter() {
    return (


<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flavour-flip" element={<FlavourFlip />} />
                <Route path="/tone-pro" element={<TonePro />} />
                <Route path="/shutter-space" element={<ShutterSpace />} />
                <Route path="/visualify" element={<Visualify />} />

            </Routes>
        </BrowserRouter>
    );


    }

    export default AppRouter;