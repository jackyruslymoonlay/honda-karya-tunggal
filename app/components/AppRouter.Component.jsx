import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Containers/Home.Container';
import About from './About.Component';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/About'}>About</Link></li>
                    </ul>
                    <hr />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/About' component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default AppRouter;