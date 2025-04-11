import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={{padding: '20px'}}>
            <nav>
                <Link to="/" style={{padding: '20px'}}>Home</Link>
                <Link to="/visualify" style={{padding: '20px'}}>Visualify</Link>
                <Link to="/shutter-space" style={{padding: '20px'}}>Shutter Space</Link>
                <Link to="/tone-pro" style={{padding: '20px'}}>Tone Pro</Link>
                <Link to="/flavour-flip" style={{padding: '20px'}}>Flavour Flip</Link>
            </nav>
</header>
)
    ;
}

export default Header;