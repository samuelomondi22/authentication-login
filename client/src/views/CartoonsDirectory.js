import React from 'react';
//import { Redirect } from 'react-router-dom';
//import superagent from 'superagent';
import Paper from 'material-ui/Paper';

import {
  Table,
  TableBody,
  //TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class CartoonsDirectory extends React.Component {
  constructor(){
    super();
    this.state = {
      cartoons:[
        {
          "id": 1,
          "name":"Mickey Mouse",
          "creator":"Wlat Disney"
        },
        {
          "id": 2,
          "name":"Tom and Jerry",
          "creator":"Hannah"
        }
      ]
    }
  }
  getAuthenticationToken (){
    return localStorage.getItem('token')
  }
  // componentDidMount(){
  //   superagent
  //   .get('/api/v1/cartoons')
  //   .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
  //   .end((err,res) => {
  //     if(err){
  //       this.setState({
  //         errorMessage: 'cannot retrieve cartoons server'
  //       });
  //       return;
  //     }
  //     this.setState({cartons: res.body})
  //   })
  // }
  render() {
    const tableRows = this.state.cartoons.map((cartoon) => {
      return(
        <TableRow key={cartoon.id}>
        <TableRowColumn> {cartoon.id} </TableRowColumn>
        <TableRowColumn> {cartoon.name} </TableRowColumn>
        <TableRowColumn> {cartoon.creator}</TableRowColumn>
      </TableRow>
      )
    })
    return (
     <Paper>
       <h2> ......Cartoons Directory </h2>
       <Table>
         <TableHeader>
           <TableRow>
             <TableHeaderColumn> ID </TableHeaderColumn>
             <TableHeaderColumn> NAME </TableHeaderColumn>
             <TableHeaderColumn> CREATOR </TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody>
         {tableRows}
         </TableBody>
       </Table>
     </Paper>
    );
  }
}
