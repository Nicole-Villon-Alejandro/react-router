import { BrowserRouter, Routes, Route } from "react-router-dom"

import Postslist from "./pages/Postslist";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/ About Us" Component={AboutUs} />
          <Route path="/posts list" Component={Postslist} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
      
      
    </>
  )
}

export default App
