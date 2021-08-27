import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState, useEffect, Component } from 'react';
import firebase from 'firebase';
import ContextForm from './ContextForm';
import Details from './Details';


const Context = () => {

  const [users, setUsers] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    let userinfo = [];
    db.collection('users').get()
      .then((res) => {

        res.forEach(action => {
          userinfo.push({ ...action.data(), id: action.id });
          console.log(action.data())
        })
        setUsers(userinfo);
      })

  }, [])
 
  const deleteUser = (e) => {
    let uid = e.target.id

    db.collection('users').doc(uid).delete()
      .then(() => { console.log("user deleted") })
      .catch((err) => { console.log(err) })
  }


  return (
    <>

<Router>
      <div className="container mt-5 bg-primary text-white">
    
        <div className="row">
          <div className="col-md-5">
            <h1>ADD USER FORM</h1>
            <ContextForm />
          </div>
          <div className="col-md-7 bg-primary text-white">
            <h1> LIST OF USERS</h1>
            {users.map(action =>
            <div className="list-group">
        
                <Link to={"./Details/" + action.id} 
                
                className="list-group-item list-group-item-action" key={action.id}>{action.name}
                
                </Link>
                <button id={action.id} onClick={deleteUser} type="button" className="btn btn-danger">DELETE</button>
            
                    <Link to={"./Edit/" + action.id} 
                
                class="link-warning">Edit
                    
                    </Link>
                   
                </div>
            
            )}
            

          </div>
        </div>
      </div>
      </Router>
    </>
  );
}

export default Context;