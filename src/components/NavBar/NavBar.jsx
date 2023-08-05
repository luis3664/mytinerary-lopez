import '../NavBar/navbar.css'
import ButtonLogin from '../ButtonLogin/ButtonLogin'
import Anchor from '../Anchor/Anchor'


const NavBar = () => {
    return (
        <nav className='navbar d-flex align-items-center row justify-content-between'>
            <div className='d-flex col-lg-4 col-xxl-5 col-12 justify-content-lg-start justify-content-center align-items-center'>
                <a className='navbar-brand d-flex align-items-center justify-content-center justify-content-xl-between flex-wrap flex-md-nowrap' href='/'>
                    <figure className='d-flex m-0'>
                        <img src='/logoTinerary-difumination.png' className='img-fluid' alt='Logo' id='logoTinerary'/>
                    </figure>
                    <h1 className='d-flex ms-2 ms-xxl-4'>My Tinerary</h1>
                </a>
            </div>
            <div className='d-flex menu align-items-center col-lg-4 col-12 justify-content-lg-end justify-content-center flex-wrap flex-md-nowrap'>
                <Anchor href={'/'} title={'Home'} />
                <Anchor href={'/'} title={'Cities'} />
                <ButtonLogin href={'/'} title={'Login'} />
            </div>
        </nav>
    )
}

export default NavBar