import React, { Component } from 'react';
import Axios from 'axios';
class LaunchesSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            launchData:[],
            launchesSuccessValidate: props.flage
         }
    }

    componentDidMount(){
        const {launchesSuccessValidate}=this.state;
        if(launchesSuccessValidate){
         Axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchesSuccessValidate}`)
                    .then(response=>this.setState(prevState => ({
                        launchData: [...prevState.launchData, response.data]
                      })))
                      .catch(error=>console.log(error));
        }
        else{
            Axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchesSuccessValidate}`)
                    .then(response=>this.setState(prevState => ({
                        launchData: [...prevState.launchData, response.data]
                      })))
                      .catch(error=>console.log(error));
        }
    }
    render() { 
        console.log("LaunchesSuccess js is called: ", this.state.launchData);
        return (  <div>LaunchesSuccess file a js</div>);
    }
}
 
export default LaunchesSuccess;