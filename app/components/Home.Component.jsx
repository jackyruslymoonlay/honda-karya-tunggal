import React from "react";
import ReactLoading from 'react-loading';
import SearchUser from "./user/SearchUser.Component";
import UserProfile from "./user/UserProfile.Component";

const Home = (props) => {
    const { user, getUserData } = props;

    if (user.fetching) {
        return (
            <ReactLoading type="bubbles" color="#000000" height='200px' width='200px' />
        );
    }
    else {
        if (user.error) {
            return (
                <div>
                    <SearchUser getUserData={getUserData} />
                    {user.error.response.statusText}
                </div>
            );
        }
        else {
            return (
                <div>
                    <SearchUser getUserData={getUserData} />
                    <UserProfile user={user} />
                </div>
            );
        }
    }
}
export default Home;