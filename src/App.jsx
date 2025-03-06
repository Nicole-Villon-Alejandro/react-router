import { BrowserRouter, Routes, Route } from "react-router-dom"

import Postslist from "./pages/Postslist";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import SinglePost from "./pages/SinglePost";

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about us" Component={AboutUs} />
          <Route path="/posts list" Component={Postslist} />
          <Route path="/posts list/ :id" Component={SinglePost} />

        </Route>
      </Routes>
    </BrowserRouter>
      
      
      
      
    </>
  )
}

export default App
