import '../NavBar/navbar.css'
import ButtonLogin from '../ButtonLogin/ButtonLogin'
import Anchor from '../Anchor/Anchor'
import { Link as LinkReact } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='navbar d-flex align-items-center row justify-content-between'>
            <div className='d-flex col-lg-4 col-xxl-5 col-12 justify-content-lg-start justify-content-center align-items-center'>
                <LinkReact to={'/'} className='navbar-brand d-flex align-items-center justify-content-center justify-content-xl-between flex-wrap flex-md-nowrap'>
                    <figure className='d-flex m-0'>
                        <img src='/logoTinerary-difumination.png' className='img-fluid' alt='Logo' id='logoTinerary'/>
                    </figure>
                    <h1 className='d-flex ms-2 ms-xxl-4'>MyTinerary</h1>
                </LinkReact>
            </div>
            
            <div className='d-flex menu align-items-center col-lg-6 col-12 justify-content-lg-end justify-content-center flex-wrap flex-md-nowrap'>
                <Anchor href={'/'} title={'Home'} />
                <Anchor href={'/cities'} title={'Cities'} />
                <ButtonLogin href={'/'} title={'Login'} />
                {/* <figure className='d-flex m-0' id='userPhoto'>
                    <img src='./user.png' alt='userPhoto' className='bg-white img-fluid img-thumbnail m-0' />
                </figure> */}
            </div>
        </nav>
    )
}

export default NavBar