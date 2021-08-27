import React , {useState , useEffect, Component} from 'react';

import firebase from './firebase';

const ContextForm = ({props}) => {

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [location, setLocation] = useState();
    const [age, setAge] = useState();
    const [users, setUsers] = useState([]);
    const db = firebase.firestore();

    //

  const getName = (e) => {
    setName(e.target.value);
  }
  const getSurname = (e) => {
    setSurname(e.target.value);
  }
  const getLocation = (e) => {
    setLocation(e.target.value);
  }
  const getAge = (e) => {
    setAge(e.target.value);
  }
  const createUser = (e) => {
    e.preventDefault();
    db.collection('users').add({
      name: name,
      surname: surname,
      location: location,
      age: age
    })
      .then((res) => { console.log('user add') })
      .catch((err) => { console.log(err) })
  }

  const updateUser = (e) => {
    let uid = e.target.
      db.collection('users').doc(uid).update({
        name: name,
        surname: surname,
        location: location,
        age: age

      })
      .then(() => { console.log("user update") })
      .catch((err) => { console.log(err) }
      )
  }
//
    return (

        <>
         <form  onSubmit = {createUser}>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">NAME</span>
                <input  name="name" onChange={getName}  type="text" class="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">SURNAME</span>

                <input     name="surname" onChange={getSurname} type="text" class="form-control" placeholder="surname" aria-label="Username" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">LOCATION</span>
                <input name="location" onChange={getLocation}  type="text" class="form-control" placeholder="location" aria-label="Username" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">AGE</span>
                <input     name="age" onChange={getAge} type="text" class="form-control" placeholder="age" aria-label="Username" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">

                <button type="submit" class="btn btn-success">SUBMIT</button>
            </div>
            </form>
        </> 
    );
}

export default ContextForm;