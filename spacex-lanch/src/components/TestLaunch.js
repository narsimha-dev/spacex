import React from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import LaunchesSuccess from "./LaunchesSuccess";
import LandingSuccess from "./LandingSuccess";
import { ErrorHandeling } from "./ErrorHandeling";
// import  AllYearsInButton  from "./AllYearsInButton";
import Axios from "axios";
// import { ReuseBulity } from "./ReuseBulity";

class TestLaunch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successValidate: null,
      type: "",
      spaceData: [],
    };
  }

  componentDidMount() {
    Axios.get("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((response) =>
        this.setState((prevState) => ({
          spaceData: [...prevState.spaceData, response.data],
        }))
      )
      .catch((error) => console.log(error));
  }

  handleLaunch = (flage) => {
    console.log("handleLaunchValidate is: ", flage);
    this.setState({ type: "launch", successValidate: flage });
  };
  handleLanding = (flage) => {
    console.log("handleLandingValidate is: ", flage);
    this.setState({ type: "landing", successValidate: flage });
  };
  render() {
    const { successValidate, type, spaceData } = this.state;
    let result = null;
    const rowResult =
      spaceData &&
      spaceData.map(items => {
        return [...new Set(items.map(a => a.launch_year))]
      });
    console.log(rowResult);
    if (rowResult) {
      result = rowResult.map(y => y.map((yy, index) => {
        console.log(y, "object:", yy)
        return <div key={index}>
          <Button>{yy}</Button>
          <br />
        </div>
        // return <ReuseBulity key={index} year={yy}/>
      }));
    }
    if (successValidate != null) {
      switch (type) {
        case "launch":
          if (successValidate) {
            return <LaunchesSuccess flage={successValidate} />;
          }
          return <LaunchesSuccess flage={successValidate} />;
        case "landing":
          if (successValidate) {
            return <LandingSuccess flage={successValidate} />;
          }
          return <LandingSuccess flage={successValidate} />;
        default:
          return <ErrorHandeling message="This actoin not valid" />;
      }
    }
    return (<React.Fragment>
      <div className="container-fluid">
        <div className="row">
       <div className="col-sm launch">
          <p >Launch Year</p>
          {result}
        </div>
        <div className="col-sm">
          <p> Successful Launch</p>
          <Col>
            <Row>
              <Button color="success" onClick={() => this.handleLaunch(true)}>True</Button>{' '}
              <Button variant="primary" onClick={() => this.handleLaunch(false)}>False</Button>
            </Row>
          </Col>
        </div>
     <div className="col-sm">
         <div>
          <p> Successful Landing</p>
          <Col>
            <Row>
              <Button variant="success" onClick={() => this.handleLanding(true)}>True</Button>{' '}
              <Button variant="danger" onClick={() => this.handleLanding(false)}>False</Button>
            </Row>
          </Col>
        </div>
      </div>
      </div>
      </div>
    </React.Fragment>
    );
  }
}
export default TestLaunch;
