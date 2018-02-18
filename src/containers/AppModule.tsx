import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import UserModule from './UserModule';

const AppModule = () => (
    <Router>
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Header
                </a>
            </nav>
            <div style={{ display: 'flex' }}>
                <div style={{ width: 200 }}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" ><Link to="/">Dashboard</Link></a>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" ><Link to="/user">User</Link></a>
                        </li>
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <Route exact={true} path="/" component={Dashboard} />
                    <Route path="/user" component={UserModule} />
                </div>
            </div>
        </div>
    </Router>
);

export default AppModule;