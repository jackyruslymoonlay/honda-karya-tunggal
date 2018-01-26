import React from "react";

const UserProfile = (props) => {
    const { user } = props;

    return (
        <div>
            <img src={user.data.avatar_url} width="64" height="64" />
            <h1>{user.data.name}</h1>
            <h2>{user.data.location}</h2>
            <h2>{user.data.bio}</h2>
        </div>
    );
}
export default UserProfile;