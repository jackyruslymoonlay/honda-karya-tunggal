import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../containers/home.container';
import About from './about/about.component';
import Branch from './branch/branch.component';
import './app-router.scss';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div id="nav">
                        <ul>
                            <li><Link to={'/'}>Beranda</Link></li>
                            <li><Link to={'/About'}>Tentang Kami</Link></li>
                        </ul>
                    </div>
                    <Branch />
                    
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