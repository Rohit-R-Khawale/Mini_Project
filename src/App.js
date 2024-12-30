import React from 'react';
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/Signin.jsx"
import Stream from "./Pages/stream.jsx";

// Creating Routing system for this page
import { Routes, Route } from 'react-router-dom'
function App() {
return (
    // Make an App router here
<main>
    {/* <SignIn/> */}
    <Home />
    {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stream" element={<Stream/>}/>
    </Routes> */}

</main>
);}

export default App;