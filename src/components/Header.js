import { Link } from "react-router-dom";


const Header = () => {
    return <div>
        <Link to ='/'>Home</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/project'>Project</Link>
</div>
}

export default Header;