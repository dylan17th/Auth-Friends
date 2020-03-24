import React, { useState} from 'react';


const AddFriend = () => {

    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setAddFriend({
            ...addFriend,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    } 

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label html='name'>Name:</label>
                    <input id='name' name='name' onChange={handleChange} />
                </div>
                <div>
                    <label html='age'>Age:</label>
                    <input id='age' name='age' onChange={handleChange}/>
                </div>
                <div>
                    <label html='email'>Email:</label>
                    <input id='email' name='email' onChange={handleChange}/>
                </div>
                <div>
                    <button>Add Friend</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriend;

