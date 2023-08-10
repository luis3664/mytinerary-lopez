import './footer.css'
import Anchor from '../Anchor/Anchor'
import IconSocial from '../IconSocial/IconSocial'

const Footer = () => {

    const attendance = [
        {
            href: './',
            title: 'Contact'
        },{
            href: './',
            title: 'Legal Information'
        },{
            href: './',
            title: 'Privacy Policy'
        },{
            href: './',
            title: 'Support'
        }
    ];
    const menu = [
        {
            href: './',
            title: 'Home'
        },{
            href: './cities',
            title: 'Cities'
        },{
            href: './login',
            title: 'Login'
        }
    ];
    const icons = [
        {
            href: 'https://www.instagram.com/',
            classBootstrap: 'bi bi-instagram my-5'
        },{
            href: 'https://facebook.com/',
            classBootstrap: 'bi bi-facebook'
        },{
            href: 'https://web.whatsapp.com/',
            classBootstrap: 'bi bi-whatsapp'
        },{
            href: 'https://www.tiktok.com/',
            classBootstrap: 'bi bi-tiktok'
        }
    ];

    return (
        <>
            <div className='row d-flex flex-wrap mt-2 mb-3 align-items-start container' id='footerColumns'>
                <div className='col d-flex flex-column justify-content-evenly aling-items-center'>
                    <span>Attendance</span>
                    {attendance.map((link, index) => <Anchor key={index} href={link.href} title={link.title} />)}
                </div>

                <div className='col-12 col-sm d-flex flex-column justify-content-evenly aling-items-center'>
                    <span>More</span>
                    {menu.map((link, index) => <Anchor key={index} href={link.href} title={link.title} />)}
                </div>
                
                <div className='col d-flex flex-wrap justify-content-evenly aling-items-center my-auto'>
                    {icons.map((icon, index) => <IconSocial key={index} href={icon.href} classBootstrap={icon.classBootstrap} />)}
                </div>
            </div>

            <p className='text-center' id='textFooter'>©2023 Mindhub AP MERN 08 - Luis Lopez</p>
        </>
    )
}

export default Footer