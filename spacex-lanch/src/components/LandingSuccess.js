import React, { Component } from 'react';
import Axios from 'axios';
class LandingSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            landingData:[],
            landingDataSuccessValidate: props.flage
         }
    }

    componentDidMount(){
        const {landingDataSuccessValidate}=this.state;
        if(landingDataSuccessValidate){
            console.log("if is called");
         Axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${landingDataSuccessValidate}`)
                    .then(response=>this.setState(prevState => ({
                        landingData: [...prevState.landingData, response.data]
                      })))
                      .catch(error=>console.log(error));
        }
        else{
            console.log("flase is called");
            Axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${landingDataSuccessValidate}`)
                    .then(response=>this.setState(prevState => ({
                        landingData: [...prevState.landingData, response.data]
                      })))
                      .catch(error=>console.log(error));
                    }
                }
    render() { 
        console.log(this.props)
        console.log("LandingSuccess js is called: ", this.state.landingData);
        return (  <div>LandingSuccess file a js</div>);
    }
}
 
export default LandingSuccess;