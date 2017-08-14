import React, { Component } from 'react';
import { Panel, Table} from 'react-bootstrap';

export default class Comment extends Component{
  render(){
    return(
      <div>
				<Panel header="Comments" bsStyle="primary">
					<Table striped bordered condensed hover>
						<tbody>
							<Avatar user={comment.author} />
							<UserInfo user={comment.author}/>
							<tr>
								<td><b>Commented Date:</b> </td>
								<td>{formateDate(comment.date)}</td>
							</tr>
							<tr>
								<td><b>Comment Text:</b></td>
								<td>{comment.text}</td>
							</tr>
						</tbody>
					</Table>
				</Panel>
  		</div>
    );
  }
}
const comment = {
	date: new Date(),
	text: "This is my first comment",
	author: {
		fName: "Chintu",
		lName: "Patel",
		avatarUrl: "http://placekitten.com/g/64/64"
	}
};

function Avatar(props){
	return(
		<tr>
			<td><b>Profile Picture:</b></td>
			<td><img src={props.user.avatarUrl} alt={props.user.fName} /></td>
		</tr>
	);
}

function UserInfo(props){
	return(
		<tr>
			<td><b>Comment by:</b></td>
			<td>{props.user.fName} {props.user.lName}</td>
		</tr>
	);
}

function formateDate(date){
	return date.toLocaleTimeString();
}
