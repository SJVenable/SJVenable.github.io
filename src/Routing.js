import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function Routing() {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/ContactMe' element={<ContactMe />} />

        </Routes>
    )
}

export default Routing;
