import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return(
        <>
         <header></header>
         <Outlet/>



        </>
    )
}

export default DefaultLayout