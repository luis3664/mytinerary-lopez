import './Error404.css'
import CallToAction from '../../components/CallToAction/CallToAction';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Error404 = () => {

    let [time, setTime] = useState(30);
    let navigate = useNavigate();

    const heroTitle = 'Error 404';
    const heroText = 'An error has occurred in finding the information, verifying URL or returning to the home page through the navigation bars or you will be redirected automatically in ';

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(time -1);

            if (time == 0) {
                navigate('/');
            }
        }, 1000);

        return () => {clearInterval(intervalId)}
    },[time]);

    return (
        <section className='card p-3 row' id='heroCard'>
            <article className='card-body m-0 p-5 row d-flex justify-content-between align-items-center' id='heroBodyCard'>
                <div className='col-lg-4 d-flex justify-content-center'>
                    <figure>
                        <img src='/404.png' alt='Lost Compass' id='img404' />
                    </figure>
                </div>

                <div className='d-flex flex-column col-lg-6 mx-auto'>
                    <h2 className='card-title mt-3 d-flex justify-content-center align-items-center'>
                        {heroTitle}
                    </h2>
                    <p className='card-text mt-4'>{heroText + time + '.'}</p>

                    <CallToAction />
                </div>
            </article>
        </section>
    )
}

export default Error404