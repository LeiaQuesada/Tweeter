import React, { useState } from 'react';

const Post = () => {
    const [ user, setUser ] = useState('');

    return (
        <>
            <h3>Please enter Your UserName below</h3>
            <form>
                <label>User</label>
                <input
                    value={user}
                    type="text"
                    onChange={(e) => {
                        setUser( e.target.value );
                    }}
                ></input>
            </form>
        </>
    )
}

export default Post;