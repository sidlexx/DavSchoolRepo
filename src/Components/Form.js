import React from 'react'
import {Form,Button} from 'react-bootstrap'
import Table from './table'
import StudentInfo from './studentInfo'
export default class Forms extends React.Component{
  
    state  = {
    showMarks:false,
    enrollNum:null,
    classRoll:null,
    studentData:null,
    arr:StudentInfo
   }
   
   onChangeEnroll=(e)=>{
    this.setState({
        enrollNum:e.target.value,
    })   
   }

   onChangeClassRoll=(e)=>{
    this.setState({
        classRoll:e.target.value,
    })
   }

   findStudent=(enroll,classroll)=>{
     return this.state.arr.find((x)=>x.AdmNo===this.state.enrollNum && x.RollNo===this.state.classRoll)
   }

   onSubmit=(e)=>{
    this.setState({
        studentData:this.findStudent(this.state.enrollNum,this.state.classRoll),
        showMarks:true
    })
    
   } 
    render(){
        return(
            <div>
               <Form>
                    <Form.Group id='enrollmentNumber' onChange={this.onChangeEnroll}>
                        <Form.Label>Enrollment Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Enrollment Number" />         
                    </Form.Group>
                    <Form.Group id='classRoll' onChange={this.onChangeClassRoll}>
                        <Form.Label>Class Roll Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Class Roll Number" />         
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit} >
                        Submit
                     </Button>
                </Form>
                <br/>
                {this.state.showMarks?
                <Table 
                enrollNum={this.state.enrollNum} 
                classRoll={this.state.classRoll}
                studentData={this.state.studentData}
                />:<div></div>}
            </div>
        )
    }
}