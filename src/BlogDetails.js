import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import { BaseUrl } from "./utilities";

const BlogDetails = () => {
    const { id } = useParams ();
    const { data:blog , error, isLoading } = useFetch(`${BaseUrl}/blogs/` + id);
    const history = useHistory();

    const handleClick = () => {
        fetch(`${BaseUrl}/blogs/` + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className = "blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author}</p>
                    <div className = 'blog-body'>{ blog.body}</div>
                    <button onClick = { handleClick}>Delete Post</button>
                </article>
            )}
        </div>

        
     );
}
 
export default BlogDetails;