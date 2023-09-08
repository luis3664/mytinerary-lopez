import './login.css'
import { useState } from 'react'
import Section from '../../layouts/section/Section'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const Login = () => {
    const [screen, setScreen] = useState(true);

    const screenChange = () => {
        if (screen) {
            setScreen(false)
        } else {
            setScreen(true)
        }
    }

    return (
        <Section>
            <article className={`login-container w-75 h-100 d-flex justify-content-center align-items-${screen ? 'start' : 'end'} flex-column`}>
                {screen ? <SignIn fnBtn={screenChange} /> : <SignUp fnBtn={screenChange} />}
            </article>
        </Section>
    )
}

export default Login