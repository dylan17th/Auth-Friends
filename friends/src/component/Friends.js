import React from 'react';


const Friends = ({friend}) => {
    return (
        <div>
            <h4>{friend.name}</h4>
            <div>{friend.email}</div>
            <div>{friend.age}</div>
        </div>
    )
}

export default Friends;