import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const SinglePost = () => {

    const {id} = useParams();

    const initialObjectPost = {
        id:'',
        title:'',
        content:'',
        image: '',
        tags: [],
    };

    const [post, setPost] = useState ( initialObjectPost);
  

    const url = import.meta.env.VITE_ENDPOINT_URL;
    
    useEffect(() => {
        axios
         .get(url + '/' + id)
         .then((res) => setPost(res.data))
         .catch((err) => console.error(err));

    }, [id] );

    return <h1>Post Singolo: {post.title}</h1>;


};

export default SinglePost