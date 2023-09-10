import './login.css'
import { useEffect, useState } from 'react'
import Section from '../../layouts/section/Section'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [screen, setScreen] = useState(true);
    const { token } = useSelector(store => store.users);
    const navigate = useNavigate();

    const screenChange = () => {
        if (screen) {
            setScreen(false)
        } else {
            setScreen(true)
        }
    }

    useEffect(() => {
        if (token != '') {
            navigate('/');
        }
    }, [])

    return (
        <Section>
            <article className={`login-container w-75 h-100 d-flex justify-content-center align-items-${screen ? 'start' : 'end'} flex-column`}>
                {screen ? <SignIn screenFn={screenChange} /> : <SignUp screenFn={screenChange} />}
            </article>
        </Section>
    )
}

export default Login