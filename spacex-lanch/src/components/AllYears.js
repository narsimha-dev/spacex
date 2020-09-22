import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import  '../css/style.css';
import CardView from './CardView';

class AllYears extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            spaceData:[]
         }
    }
    componentDidMount(){
        Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
                //  .then(response=>this.setState({this.state.spaceData,...response.data}))
                  
                .then(response=>this.setState(prevState => ({
                    spaceData: [...prevState.spaceData, response.data]
                  })))
                  .catch(error=>console.log(error));
    }
    render() { 
        console.log(this.state.spaceData);
        const {spaceData}=this.state;
        const rowresults= spaceData && spaceData.map((id,card)=>{
        return {card};
        });
        // console.log("object: ", rowresults,",", typeof rowresults);
        const rowResult= spaceData && spaceData.map(items=>{
            return items.map(card=>{
               return <Card style={{ width: '18rem' }}> 
            <Card.Img className="launchImage" src={card.links.mission_patch_small} />
            <Card.Body>
              <Card.Title>{card.mission_name}</Card.Title>
              <Card.Text>
              {card.mission_name}
              </Card.Text>
            <Card.Text>Launch Year: {card.launch_year}</Card.Text>
              <Button variant="primary">{card.mission_name}</Button>
            </Card.Body>
          </Card>
       })
    });
    return (
        <React.Fragment>  <Container>
        {/* <p className="spacex-name">SpaceX Launch Programs</p> */}
        {/* <Button>Add</Button> */}
        {/* <CardView/> */}
        {rowResult}
    </Container>
    </React.Fragment>
    );
    }
}
 
export default AllYears;