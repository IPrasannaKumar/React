import React from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
render()
{
    return(
        <div>
        <nav className="navbar navbar-default" >
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Red Dice</Link>
                    </div>
                    
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                               <Link to="/ok">Sign Up </Link>
                            </li>
                            </ul>


                </div>
               
                </div>
            </nav>
 
            
            </div>

           

    );
}
}

export default NavigationBar;