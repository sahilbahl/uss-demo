import React, { Component } from 'react';
import './App.css';
import { FormGroup, Checkbox, Radio } from 'react-bootstrap/lib';

class App extends Component {
  constructor() {
    super();
    this.state = {
      siteEnabled: false,
      curatedSiteEnabled: false,
      unitEnabled: false,
      driverEnabled: false,
      addressEnabled: false
    }
  }
  render() {
    return (
      <div className="SearchBox">
          <div className="heading">
            <h1>Unified Search Service Demo</h1>
          </div>
          <div clasName="entityTypes">
              <h5>Entity Types</h5>
              <FormGroup>
                <Checkbox inline>Site</Checkbox>
                <Checkbox inline>CuratedSite</Checkbox>
                <Checkbox inline>Unit</Checkbox>
                <Checkbox inline>Driver</Checkbox>
                <Checkbox inline>Address</Checkbox>
              </FormGroup>
          </div>
          <div className="limit">
              <h5>Limit</h5>
              <Radio name="limitOptions" inline>LimitPerType</Radio>
                <input style= {{width: '50px', marginTop: '1px', marginLeft: '10px', height: '5px'}} type='text' name="limit"/>
                <input style= {{width: '50px', marginTop: '1px', marginLeft: '10px', height: '5px'}} type='text' name="limit"/>
                <input style= {{width: '50px', marginTop: '1px', marginLeft: '10px', height: '5px'}} type='text' name="limit"/>
                <input style= {{width: '50px', marginTop: '1px', marginLeft: '10px', height: '5px'}} type='text' name="limit"/>
                <input style= {{width: '50px', marginTop: '1px', marginLeft: '10px', height: '5px'}} type='text' name="limit"/>
          </div>
          <div className="limitInput" style={{marginTop: '5px'}}>
            <Radio name="limitOptions" inline>Limit</Radio>
            <input style= {{width: '50px', marginTop: '1px', marginLeft: '10px', height: '5px'}} type='text' name="limit"/>
          </div>
          <div className="Environment">
            <h5>Environment</h5>
            <Radio name="envOptions" inline>Prod</Radio>
            <Radio name="envOptions" inline>QA</Radio>
            <Radio name="envOptions" inline>Local</Radio>
          </div>
          <div className="session">
            <label for="sessionId">Session Id</label>
              <input id="sessionId" type="text" name="sessionId" style= {{width: '300px', marginTop: '15px', marginLeft: '10px', height: '5px'}} />
          </div>
          <input type="text" name="search" placeholder="Search Marker, SharedMarker, Unit, Driver, Addresses" />
      </div>
    );
  }
}

export default App;
