import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author , setAuthor] = useState('mahmood');
    const [ isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true)

        fetch('http://localhost:800/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);

            //to go back one tab in history, add
            // history.go(-1)
            history.push('/');
        })
    }

    return ( 
        <div className = "create">
            <h2>Add a Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    required
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value= "mahmood">Mahmood</option>
                    <option value= "awwal">Awwal</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding new blog...</button>}

            </form>
        </div>
     );
}
 
export default Create ;