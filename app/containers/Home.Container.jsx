import React from 'react';
import { connect } from "react-redux";
import { fetchUser } from "../actions/user.actions";
import Home from "../components/Home.Component";

@connect((store) => {
    return {
        user: store.user
    };
})
class HomeContainer extends React.Component {
    componentWillMount() {
        /* On Init */
        this.getGithubUserData("jackyrusly");
    }

    getGithubUserData(username) {
        this.props.dispatch(fetchUser(username));
    }

    submitForm(event) {
        event.preventDefault();
        
        let username = document.getElementById("username").value;
        this.getGithubUserData(username);
    }

    render() {
        return (
            <Home user={this.props.user} getUserData={this.submitForm.bind(this)} />
        );
    }
}
export default HomeContainer;