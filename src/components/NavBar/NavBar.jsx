import '../NavBar/navbar.css'

const NavBar = () => {
    return (
        <nav className='navbar d-flex align-items-center'>
            <div className='container-flex'>
                <a className='navbar-brand d-flex align-items-center' href='/'>
                    <figure className='d-flex m-0'>
                        <img src='/logoTinerary-difumination.png' className='w-100' alt='Logo' id='logoTinerary'/>
                    </figure>
                    <h1>My Tinerary</h1>
                </a>
            </div>
            <div className='container-flex menu'>
                <a href='/'>Home</a>
                <a href='/'>Cities</a>
                <a href='/' className='buttonLogin'>Login</a>
            </div>
        </nav>
    )
}

export default NavBar