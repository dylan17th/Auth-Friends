import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Friends from './Friends'


const FriendsPage = () => {

    const [ friends, setFriends ] = useState([]);

    useEffect(()=>{
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err))

    }, [])
    

    return (
        <div>
            <h3>Friends List</h3>
            {friends.map(friend => (
                <Friends friend={friend} key={friend.id}/>
            ))}
        </div>
    )
}

export default FriendsPage; 