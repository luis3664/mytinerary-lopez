const SignUp = ({ fnBtn }) => {
    return (
        <form className='login-box d-flex justify-content-evenly align-items-center flex-column h-100'>
            <h2 className='text-center cities-title'>Sign Up</h2>

            <label className='cities-title fs-4'>
                <i className='bi bi-person-fill-add login-icon'></i>

                <input type='text' className='login-input' placeholder='First Name' />
            </label>

            <label className='cities-title fs-4'>
                <i className='bi bi-person-add login-icon'></i>

                <input type='text' className='login-input' placeholder='Last Name' />
            </label>

            <label className='cities-title fs-4'>
                <i className='bi bi-person-lines-fill login-icon'></i>

                <input type='number' className='login-input' placeholder='Age' />
            </label>

            <label className='cities-title fs-4 d-flex'>
                <i className='bi bi-flag-fill login-icon me-3'></i>

                <select id='country' name='country' className='login-select'>
                    <option value='' disabled selected>Select Country</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brazil'>Brazil</option>
                    <option value='Chile'>Chile</option>
                    <option value='Colombia'>Colombia</option>
                    <option value='Ecuador'>Ecuador</option>
                    <option value='Peru'>Peru</option>
                    <option value='Uruguay'>Uruguay</option>
                    <option value='Venezuela'>Venezuela</option>
                </select>
            </label>

            <label className='cities-title fs-4'>
                <i className='bi bi-envelope-at-fill login-icon'></i>

                <input type='text' className='login-input' placeholder='Email' />
            </label>

            <label className='fs-4'>
                <i className='bi bi-key-fill login-icon'></i>

                <input type='password' className='login-input' placeholder='Password' />
            </label>

            <label className='fs-4'>
                <i className='bi bi-key login-icon'></i>

                <input type='re-password' className='login-input' placeholder='Re-Enter Password ' />
            </label>

            <button type='button' className='btn-submit fs-4 py-1 px-3' onClick={fnBtn}>Register</button>
        </form>
    )
}

export default SignUp