import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import UserModule from './UserModule';

const AppModule = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/user">User Module</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Route exact={true} path="/" component={Dashboard} />
                <Route path="/user" component={UserModule} />
            </div>
        </div>
    </Router>
);

export default AppModule;