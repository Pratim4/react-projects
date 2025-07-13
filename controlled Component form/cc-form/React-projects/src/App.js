// import logo from './logo.svg';
import './App.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  let [formData, setFormData] = useState(
    {
      uname: '',
      uemail: '',
      uphone: '',
      umessage: '',
      index: ''
    }
  )
  let [userData, setUserData] = useState([]);
  let getValue = (event) => {
    let oldData = { ...formData }
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData)

  }
  let handleSubmit = (event) => {
    let currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    }
    if(formData.index===''){

      let checkFilterUser = userData.filter((v) => v.uemail === formData.uemail || v.uphone === formData.uphone)
      if (checkFilterUser.length === 1) {
        toast.error("Email or Phone already Exists...")
      }
      else {
  
        let oldUserData = [...userData, currentUserFormData]//Old Array + New Array Elements
        setUserData(oldUserData);
        setFormData(
          {
            uname: '',
            uemail: '',
            uphone: '',
            umessage: '',
            index: ''
          })
      }
    }
    else{
      let editIndex=formData.index;
      let oldData=userData;
      let checkFilterUser = userData.filter((v,i) =>(v.uemail === formData.uemail || v.uphone === formData.uphone) && i!==editIndex)
      if(checkFilterUser.length===0){
      oldData[editIndex]['uname']=formData.uname;
      oldData[editIndex]['uemail']=formData.uemail;
      oldData[editIndex]['uphone']=formData.uphone;
      oldData[editIndex]['umessage']=formData.uname;
      setUserData(oldData);
      setFormData(
        {
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        })
        toast.success('Data Updated successfully..');
    }
    else{
      toast.error("Email or Phone already Exists...");

    }
  }
    event.preventDefault();
   

  }
  let deleteData=(indexNumber)=>{
    let filterDataAfterDelete=userData.filter((v,i)=>i!==indexNumber);
    toast.success("Data Deleted Successfully..")
    setUserData(filterDataAfterDelete)
    
  }
  let editData=(indexNumber)=>{

    let editData=userData.filter((v,i)=>i===indexNumber)[0];
    editData['index']=indexNumber;
    setFormData(editData)
  }
  return (
    <Container fluid>
      <ToastContainer/>
      <Container>
        <Row>
          <Col className="text-center" py-5>
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form onSubmit={handleSubmit}>
              <div className="pb-3">
                <label className="form-label">Name</label>
                <input type="text" onChange={getValue} value={formData.uname} name='uname' className="form-control" />
              </div>
              <div className="pb-3">
                <label className="form-label">Email</label>
                <input type="email" onChange={getValue} value={formData.uemail} name='uemail' className="form-control" />
              </div>
              <div className="pb-3">
                <label className="form-label">Phone</label>
                <input type="phone" onChange={getValue} value={formData.uphone} name='uphone' className="form-control" />
              </div>
              <div className="mb-3">
                <label For="" className="form-label">Message</label>
                <textarea value={formData.umessage} onChange={getValue} name="umessage" id="" rows='3' className="form-control"></textarea>
              </div>
              <button className="btn btn-primary">
                {formData.index !== "" ? 'Update' : 'Save'}
              </button>
            </form>
            <Col lg={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length >= 1 ?
                    userData.map((obj, i) => {
                      return (

                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{obj.uname}</td>
                          <td>{obj.uemail}</td>
                          <td>{obj.uphone}</td>
                          <td>{obj.umessage}</td>
                          <td className="d-flex justify-content-center gap-2">
                            <button onClick={()=>deleteData(i)} className="btn btn-primary">Delete</button>
                            <button onClick={()=>editData(i)}className="btn btn-secondary ">Edit</button>
                          </td>
                        </tr>
                      )
                    })
                    :
                    <tr>
                      <td colSpan={6}>No Data Found.</td>
                    </tr>
                  }
                </tbody>
              </Table>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>



  );
}

export default App;
