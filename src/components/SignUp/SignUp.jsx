import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from '../../redux/actions/usersAction.js';
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const SignUp = ({ screenFn }) => {
    let formData = {};
    const [countries, setCountries] = useState([]);
    const { notify } = useSelector(store => store.users);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getContries = async () => {
        try {
            const res = await axios.get('https://mytinerary-back-lopez-oxky-dev.fl0.io/api/countries/');
            setCountries(res.data.response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getContries();
    }, [])

    const firstName = useRef(null);
    const lastName = useRef(null);
    const age = useRef(null);
    const photo = useRef(null);
    const country = useRef(null);
    const mail = useRef(null);
    const password = useRef(null);
    const rePassword = useRef(null);

    const submitFn = (event) => {
        event.preventDefault();

        formData.firstName = firstName.current.value;
        formData.lastName = lastName.current.value;
        formData.age = age.current.value;
        formData.photo = photo.current.value;

        if (country.current.value != '') {
            formData.country = country.current.value;
        } else {
            return notify.reject('You have to select a Country.');
        }

        formData.mail = mail.current.value;

        if (password.current.value == rePassword.current.value) {
            formData.password = password.current.value;
        } else {
            return notify.reject('Passwords must be the same.');
        }

        dispatch(signUpUser(formData)).then((data) => {
            const res = data.payload;

            if (!res.success) {
                res.axios.message.map((error) => notify.reject(error));
            } else {
                navigate(-1);
                notify.success(res.userData.firstName);
            }
        });
    };

    const loginGoogle = (credential) => {
        let res = jwtDecode(credential.credential)

        formData.firstName = res.given_name;
        formData.lastName = res.family_name;
        formData.photo = res.picture;
        formData.country = res.locale;

        formData.mail = res.email;
        formData.password = import.meta.env.VITE_USER_PWD + res.sub;

        dispatch(signUpUser(formData)).then((data) => {
            const res = data.payload;

            if (!res.success) {
                res.axios.message.map((error) => notify.reject(error));
            } else {
                navigate(-1);
                notify.success(res.userData.firstName);
            }
        });
    };

    return (
        <form onSubmit={submitFn} className='login-box d-flex justify-content-evenly align-items-center flex-column h-100'>
            <h2 className='text-center cities-title'>Sign Up</h2>

            <label className='cities-title fs-5'>
                <i className='bi bi-person-fill-add login-icon'></i>

                <input type='text' className='login-input' ref={firstName} placeholder='First Name' />
            </label>

            <label className='cities-title fs-5'>
                <i className='bi bi-person-add login-icon'></i>

                <input type='text' className='login-input' ref={lastName} placeholder='Last Name' />
            </label>

            <label className='cities-title fs-5'>
                <i className='bi bi-person-lines-fill login-icon'></i>

                <input type='number' className='login-input' ref={age} placeholder='Age' />
            </label>

            <label className='cities-title fs-5'>
                <i className='bi bi-person-bounding-box login-icon'></i>

                <input type='uri' className='login-input' ref={photo} placeholder='URL Photo' />
            </label>

            <label className='cities-title fs-5 d-flex'>
                <i className='bi bi-flag-fill login-icon me-3'></i>

                <select id='country' name='country' defaultValue={'Select Country'} ref={country} className='login-select'>
                    <option value='' defaultValue>Select Country</option>
                    {countries.map((country) => <option key={country._id} value={country.name}>{country.name}</option>)}
                </select>
            </label>

            <label className='cities-title fs-5'>
                <i className='bi bi-envelope-at-fill login-icon'></i>

                <input type='email' className='login-input' ref={mail} placeholder='Email' />
            </label>

            <label className='fs-5'>
                <i className='bi bi-key-fill login-icon'></i>

                <input type='password' className='login-input' ref={password} placeholder='Password' autoComplete="on" />
            </label>

            <label className='fs-5'>
                <i className='bi bi-key login-icon'></i>

                <input type='password' className='login-input' ref={rePassword} name='re-password' placeholder='Re-Enter Password' autoComplete="off" />
            </label>

            <span className=' mx-4 my-3'>Are you already registered? <span className='screen-link' onClick={screenFn}>Sign In</span></span>

            <button type='submit' className='btn-submit fs-4 py-1 mb-2 px-3'>Register</button>

            <GoogleLogin
                text='signup_with'
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
        </form>
    )
}

export default SignUp