import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/actions/usersAction.js';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const SignIn = ({ screenFn }) => {
    let formData = {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mail = useRef(null)
    const password = useRef(null)

    const submitFn = (event) => {
        event.preventDefault();

        formData.mail = mail.current.value;
        formData.password = password.current.value;

        dispatch(signInUser({ user: formData, navigate: navigate }));
    }

    const loginGoogle = (credential) => {
        let res = jwtDecode(credential.credential)

        formData.mail = res.email;
        formData.password = import.meta.env.VITE_USER_PWD + res.sub;

        dispatch(signInUser({ user: formData, navigate: navigate }));
    };

    return (
        <form onSubmit={submitFn} className='login-box d-flex justify-content-evenly align-items-center flex-column h-100'>
            <h2 className='text-center cities-title'>Sign In</h2>

            <GoogleLogin
                text='signin_with'
                shape='circle'
                locale='en'
                theme='outline'
                size='medium'
                useOneTap='true'
                onSuccess={loginGoogle}
                onError={() => {
                    console.log('Login Failed');
                }}
            />

            <span className='fs-5 mx-4'>- or -</span>

            <label className='cities-title fs-4'>
                <i className='bi bi-person-fill login-icon'></i>

                <input type='text' className='login-input' name='mail' ref={mail} placeholder='Email' autoComplete='on' />
            </label>

            <label className='fs-4'>
                <i className='bi bi-key-fill login-icon'></i>

                <input type='password' className='login-input' name='password' ref={password} placeholder='Password' autoComplete='on' />
            </label>

            <span className='fs-5 mx-4'>Don't have an account? <span className='screen-link' onClick={screenFn}>Sign In</span></span>

            <button type='submit' className='btn-submit fs-4 py-1 px-3'>Log In</button>
        </form>
    )
}

export default SignIn