import React from 'react';


const Friends = ({friend, handleDelete}) => {
    return (
        <div>
            <h4>{friend.name}</h4>
            <div>{friend.email}</div>
            <div>{friend.age}</div>
            <button onClick={handleDelete}>Delete Friend</button>
            <button>Edit Friend</button>
        </div>
    )
}

export default Friends;