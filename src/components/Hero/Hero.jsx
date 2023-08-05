import './hero.css'
import CallToAction from '../CallToAction/CallToAction'

const Hero = () => {
    const heroTitle = 'Find your perfect trip, designed by insiders who know and love their cities.'
    const heroText = 'Experience the best trip organization with the help of experts who will guide you with their knowledge of the best cities you want to visit. Click on the stamp of this postcard to find the best options.'

    return (
        <section className='card p-3 row' id='heroCard'>
            <article className='card-body m-0 p-5 row d-flex justify-content-between align-items-center' id='heroBodyCard'>
                <div className='col-lg-3 d-flex justify-content-center'>
                    <figure>
                        <img src="/trip.png" alt="trip"id='imgHero' />
                    </figure>
                </div>

                <div className='d-flex flex-column col-lg-7 mx-auto'>
                    <h2 className='card-title mt-3'>{heroTitle}</h2>
                    <p className='card-text mt-4'>{heroText}</p>

                    <CallToAction />
                </div>
            </article>
        </section>
    )
}

export default Hero