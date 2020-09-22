import React from 'react';
import { Button } from 'react-bootstrap';
class AllYearsInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("************:",this.props)
        return ( <p>AllYearsInButtons</p> );
    }
}
 
export default AllYearsInButton;