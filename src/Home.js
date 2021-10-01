import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
import { BaseUrl } from "./utilities";

const Home = () => {
     const { data: blogs , isLoading, error } = useFetch(`${BaseUrl}/blogs`)


    return (  
        <div className = "home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...Please wait.</div>}
            {blogs && <Bloglist blogs = {blogs}  title = "New Blogposts" />} 
        </div>
     );
}
 
export default Home;