import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3 px-3'>
            <Link to="/" className='navbar-brand'><h1>Orchard Cards</h1></Link>

            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto' >
                <li className='nav-item active'>
                        <Link to="/all-cards" className='nav-link'><h5>Cards</h5></Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to="/card" className='nav-link'><h5>Card</h5></Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to={"/card/" + "CARDNAME-TESTID-00000000"} className='nav-link'><h5>Card Page Demo</h5></Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Nav;

// <Link to="/"><h3>home</h3></Link>
//             <Link to="/all-cards"><h3>Cards</h3></Link>
//             <Link to="/card"><h3>Card</h3></Link>
//             <Link to={"/card/" + "CARDNAME-TESTID-00000000"}><h3>Card Page Demo</h3></Link>