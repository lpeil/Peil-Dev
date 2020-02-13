import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

import Home     from './pages/Home';
import Contact  from './pages/Contact';
import Projects from './pages/Projects';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
}

export default MyRoutes;
