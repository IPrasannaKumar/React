import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component {
    navigate()
    {
        this.props.history.pushState(null,"/");
    }
render()
{
    const title="Prasanna Kumar";
    return( 
        <div>
           <h1>Killer News</h1>
         <div>
            {this.props.children}
            </div>
            <Link to="archievs" class="btn btn-danger">Archievs</Link>
            <Link to="settings" class="btn btn-danger"><button class="btn btn-success">settings</button></Link>
            </div>
    );
}

}

export default Layout;

