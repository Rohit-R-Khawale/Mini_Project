import React, { useState } from "react";
import Home from "./Pages/Home.jsx";
import Signin from "./Pages/Signin.jsx";


// importing context
import { SigninContext } from "./Context/SigninContext.js";
function App() {

  // this ensures that the usrer is currently logged in the session
  const [isLoggedIn, setIsLoggedIn] = useState(false);
// This is to ensure that the signin page comes first rather than the home page 

// NOTE: Further work in securing the sigin is necessary and has not been done yet
  if (isLoggedIn) {
    return (
        <>
            <Home />
        </>
);
  } else {
    return (
        // We've used the context provider to take info from the signin page and work on it this page.
      <SigninContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Signin />
      </SigninContext.Provider>
    );
  }
}

export default App;
