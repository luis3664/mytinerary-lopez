import './hero.css'
import CallToAction from '../CallToAction/CallToAction'

const Hero = () => {
    const heroTitle = 'Mytinerary'
    const heroText = 'Find your perfect trip, designed by insiders who know and love their cities. Click on the stamp of this postcard to find the best options.'

    return (
        <section className=' p-3 row' id='heroCard'>
            <article className='card-body m-0 p-5 row d-flex justify-content-between align-items-center' id='heroBodyCard'>
                <div className='col-lg-3 d-flex justify-content-center'>
                    <figure>
                        <img src="/trip.png" alt="trip"id='imgHero' />
                    </figure>
                </div>

                <div className='d-flex flex-column col-lg-7 mx-auto'>
                    <h2 className='card-title mt-3 d-flex justify-content-center align-items-center'>
                        {heroTitle}
                    </h2>
                    <p className='card-text mt-4'>{heroText}</p>

                    <CallToAction />
                </div>
                <div className='envelope'></div>
            </article>
        </section>
    )
}

export default Hero