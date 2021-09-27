import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams ();
    const { data:blog , error, isLoading } = useFetch('http://localhost:800/blogs/' + id);
    return ( 
        <div className = "blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author}</p>
                    <div className = 'blog-body'>{ blog.body}</div>
                </article>
            )}
        </div>

        
     );
}
 
export default BlogDetails;