import { useRef } from "react"

const SignIn = ({ screenFn }) => {
    let formData = {};

    const mail = useRef(null)
    const password = useRef(null)

    const submitFn = (event) => {
        event.preventDefault();

        formData.mail = mail.current.value;
        formData.password = password.current.value;
    }

    return (
        <form onSubmit={submitFn} className='login-box d-flex justify-content-evenly align-items-center flex-column h-100'>
            <h2 className='text-center cities-title'>Sign In</h2>

            <label className='cities-title fs-4'>
                <i className='bi bi-person-fill login-icon'></i>

                <input type='text' className='login-input' name='mail' ref={mail} placeholder='Email' />
            </label>

            <label className='fs-4'>
                <i className='bi bi-key-fill login-icon'></i>

                <input type='password' className='login-input' name='password' ref={password} placeholder='Password' />
            </label>

            <span className='fs-5 mx-4'>Don't have an account? <span className='screen-link' onClick={screenFn}>Sign In</span></span>

            <button type='submit' className='btn-submit fs-4 py-1 px-3'>Log In</button>
        </form>
    )
}

export default SignIn