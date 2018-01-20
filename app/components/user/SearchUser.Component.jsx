import React from "react";

const SearchUser = (props) => {
    return (
        <form onSubmit={props.getUserData}>
            <input type="text" id="username" />
            <button type="submit">Get Github User Data</button>
        </form>
    );
}
export default SearchUser;