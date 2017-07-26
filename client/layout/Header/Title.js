import React from 'react';


export default class Title extends React.Component{
render()
{
    return( 
        <div>
            <h1>{this.props.title}</h1>
            <h6>{this.props.sixheading}</h6>
            </div>

    );
}

}