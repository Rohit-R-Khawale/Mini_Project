import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Signin from "./Pages/Signin.jsx";
import SignUp from "./Pages/signUp.jsx";
import Archived from "./Pages/Archieved_Classes.jsx";
import Settings from "./Pages/Settings.jsx";
import Card_Section from "./Components/Card_Section.jsx";
import Card_Content from "./Components/Card_Content";
import Todo from "./Components/todo/Todo.jsx";

// importing context
import { SigninContext } from "./Context/SigninContext.js";
function App() {
  // this ensures that the usrer is currently logged in the session
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // This is to ensure that the signin page comes first rather than the home page
  let Page;
  if (isLoggedIn) {
    Page = <Home />;
  } else {
    Page = <Signin />;
  }
  // NOTE: Further work in securing the sigin is necessary and has not been done yet
  return (
    <>
      {/* PROBLEM: The routes in the Home page does not work */}
      <SigninContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={Page}>
            <Route path="/" element={<Card_Section />} />,
            <Route path="/cardcontent" element={<Card_Content />} />
            <Route path="/cardcontent/classwork" element={<Card_Content />} />,
            <Route path="/cardcontent/people" element={<Card_Content />} />,
            <Route path="/archived" element={<Archived />} />,
            <Route path="/settings" element={<Settings />} />,
            <Route path="/todo" element={<Todo />}/>
            <Route path="/todo/assigned" element={<Todo />} />,
            <Route path="/todo/missing" element={<Todo />} />,
            <Route path="/todo/done" element={<Todo />} />,

            ,
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </SigninContext.Provider>
      {/* <Home /> */}
    </>
  );
}

export default App;
