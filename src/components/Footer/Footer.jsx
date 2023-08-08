import './footer.css'
import Anchor from '../Anchor/Anchor'
import IconSocial from '../IconSocial/IconSocial'

const Footer = () => {
    return (
        <>
            <div className='row d-flex flex-wrap mt-2 mb-3 align-items-start container' id='footerColumns'>
                <div className='col d-flex flex-column justify-content-evenly aling-items-center'>
                    <span>Attendance</span>
                    <Anchor href={'./'} title={'Contact'} />
                    
                    <Anchor href={'./'} title={'Legal Information'} />
                    
                    <Anchor href={'./'} title={'Privacy Policy'} />
                    
                    <Anchor href={'./'} title={'Support'} />
                </div>

                <div className='col-12 col-sm d-flex flex-column justify-content-evenly aling-items-center'>
                    <span>More</span>
                    <Anchor href={'./'} title={'Home'} />

                    <Anchor href={'./'} title={'Cities'} />

                    <Anchor href={'./'} title={'Login'} />
                </div>
                
                <div className='col d-flex flex-wrap justify-content-evenly aling-items-center my-auto'>
                    <IconSocial href={'https://www.instagram.com/'} classBootstrap={'bi bi-instagram my-5'} />

                    <IconSocial href={'https://facebook.com/'} classBootstrap={'bi bi-facebook'} />

                    <IconSocial href={'https://web.whatsapp.com/'} classBootstrap={'bi bi-whatsapp'} />

                    <IconSocial href={'https://www.tiktok.com/'} classBootstrap={'bi bi-tiktok'} />
                </div>
            </div>

            <p className='text-center' id='textFooter'>©2023 Mindhub AP MERN 08 - Luis Lopez</p>
        </>
    )
}

export default Footer