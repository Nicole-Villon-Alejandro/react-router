import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return(
        <>
         <header/>
         <Outlet/>



        </>
    )
}

export default DefaultLayout