const SignIn = ({ fnBtn }) => {
    return (
        <form className='login-box d-flex justify-content-evenly align-items-center flex-column h-100'>
            <h2 className='text-center cities-title'>Sign In</h2>

            <label className='cities-title fs-4'>
                <i className='bi bi-person-fill login-icon'></i>

                <input type='text' className='login-input' placeholder='Email' />
            </label>

            <label className='fs-4'>
                <i className='bi bi-key-fill login-icon'></i>

                <input type='password' className='login-input' placeholder='Password' />
            </label>

            <button type='button' className='btn-submit fs-4 py-1 px-3' onClick={fnBtn}>Log In</button>
        </form>
    )
}

export default SignIn