import axios from "axios";
import { useEffect, useState } from "react";

const Postslist = () => {

    const [posts, setPosts] = useState([]);

    const url = import.meta.env.VITE_ENDPOINT_URL

    useEffect( () => {
        axios.get (url)
        .then ( (res) => setPosts(res.data))
        .catch( (err) => console.error (err))
    } )


    return (
        <>
        <h1>Posts List</h1>

        <div className="container">
            <div className="row">
                {
                    posts.map ( (elem) => {

                        const { id, title, content, image, tags } = elem;


                        return(
                            <div className="col-3" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {elem.title}

                                        </h4>
                                        <p className="card-text"> {elem.tags}</p>
                                        



                                    </div>
                                </div>
                            </div>
                            


                        )

                    } )

                }
            </div>
        </div>

        </>
        
    )
}

export default Postslist 