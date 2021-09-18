import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
     const [blogs, setBlogs] = useState([
                { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
                { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
                { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
            ]);
    
    const [age , setAge] = useState(17);

    const handleDelete = (id) =>  {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('use effect ran');
        console.log(age);
    }, [age])

    return (  
        <div className = "home">
        <Bloglist blogs = {blogs}  title = "My Blogs" handleDelete = {handleDelete}/>
        <Bloglist blogs = {blogs.filter((blog) => blog.author === "mario")}  title = "Mario's blog" />
        <button onClick = { () => setAge(20) }>Change age</button>
        <p>{`My age is ${age}`}</p>
        </div>
     );
}
 
export default Home;