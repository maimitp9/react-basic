import React, {Component} from 'react';
import {Panel, Table} from 'react-bootstrap';


export default class ContactUs extends Component{
  render(){
    return(
      <div>
        <Panel header="ContactUs" bsStyle="primary">
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <td><b>Name</b></td>
                <td>Maimit Patel</td>
              </tr>
              <tr>
                <td><b>E-mail</b></td>
                <td>maimitp9@gmail.com</td>
              </tr>
              <tr>
                <td><b>Contact No.</b></td>
                <td>+91-9824341494</td>
              </tr>
            </tbody>
          </Table>
        </Panel>
      </div>
    );
  };
}
