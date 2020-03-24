import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Friends from './Friends';

const FriendsPage = () => {

    const [ friends, setFriends ] = useState([]);

    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(()=>{
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setAddFriend({
            ...addFriend,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', addFriend)
        .then(res => {
            setFriends(res.data)
            console.log(res)
        })
        .catch(err => console.log(err))
        
    } 
    
    return (
        <div>
            <div>
                <h4>Add Friend</h4>
                <form onSubmit={handleSubmit}>
                    <label html='name'>Name:</label>
                    <input id='name' name='name' onChange={handleChange} />
                    <label html='age'>Age:</label>
                    <input id='age' name='age' onChange={handleChange}/>
                    <label html='email'>Email:</label>
                    <input id='email' name='email' onChange={handleChange}/>
                    <button>Add Friend</button>
                </form>
            </div>
            <h3>Friends List</h3>
            {friends.map(friend => (
                <Friends friend={friend} key={friend.id}/>
            ))}
        </div>
    )
}

export default FriendsPage; 
