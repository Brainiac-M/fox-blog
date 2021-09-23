import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
     const [blogs, setBlogs] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

    useEffect( () => {
        setTimeout( () => {
            fetch('http://localhost:800/blogs')
            .then( res => {
                if (!res.ok){
                    throw Error('Could not fetch data for resource'); 
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch( err => {
                setError(err.message);
                setIsLoading(false);
            })
        },1000);
    }, []);

    return (  
        <div className = "home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...Please wait.</div>}
            {blogs && <Bloglist blogs = {blogs}  title = "My Blogs" />} 
        </div>
     );
}
 
export default Home;