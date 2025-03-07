import { BrowserRouter, Routes, Route } from "react-router-dom"

import Postslist from "./pages/Postslist";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about us" Component={AboutUs} />
          <Route path="/posts list" Component={Postslist} />
          <Route path="/:id" Component={SinglePost} />

        </Route>
      </Routes>
    </BrowserRouter>
      
      
      
      
    </>
  )
};

export default App
