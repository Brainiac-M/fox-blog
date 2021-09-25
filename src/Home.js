import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
     const { data: blogs , isLoading, error } = useFetch("http://localhost:800/blogs")


    return (  
        <div className = "home">
            <h1>App Component</h1>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...Please wait.</div>}
            {blogs && <Bloglist blogs = {blogs}  title = "My Blogs" />} 
        </div>
     );
}
 
export default Home;