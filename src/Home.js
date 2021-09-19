import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
     const [blogs, setBlogs] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
            .then( res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            });
        },1000);
    }, []);

    return (  
        <div className = "home">
            {isLoading && <div>Loading...Please wait.</div>}
            {blogs && <Bloglist blogs = {blogs}  title = "My Blogs" />} 
        </div>
     );
}
 
export default Home;