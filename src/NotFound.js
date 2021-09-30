import { Link } from "react-router-dom";

const NotFound  = () => {
    return ( 
        <div className= 'not-found'>
            <h2>404</h2>
            <p>Seems you are lost. Let's head back <Link to = '/'>home</Link></p>
        </div>
     );
}
 
export default NotFound;