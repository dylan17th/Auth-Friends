import React, {useState} from 'react';
import axios from 'axios';

const Login = props => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', login )
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friends')
        })
        .catch(err => console.log(err))
    } 

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label html='username'>Username:</label>
                    <input id='username' name='username' onChange={handleChange} />
                </div>
                <div>
                    <label html='password'>Password:</label>
                    <input id='password' name='password' onChange={handleChange}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login; 