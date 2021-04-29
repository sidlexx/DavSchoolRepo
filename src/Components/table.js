import React from 'react'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
export default class tables extends React.Component{
    render(){
        if(this.props.studentData)
            {return(
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Admn No.</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Sec</th>
                <th>English</th>
                <th>Mathematics</th>
                <th>Science</th>
                <th>Sst</th>
                <th>Lang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{this.props.studentData.AdmNo}</td>
              <td>{this.props.studentData.Student_name}</td>
              <td>{this.props.studentData.RollNo}</td>
              <td>{this.props.studentData.Sec}</td>
              <td>{this.props.studentData.ENGLISH}</td>
              <td>{this.props.studentData.MATHEMATICS}</td>
              <td>{this.props.studentData.SCIENCE}</td>
              <td>{this.props.studentData.SST}</td>
              <td>{this.props.studentData.LANG}</td>
              </tr>
            
            </tbody>
          </Table>
            
        )
        
            }
            else{
                return <div><Alert  variant={'danger'}>
                No student found. Check your Enrollment Number and Class Roll Number
              </Alert></div>
                }
    }
}