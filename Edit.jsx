import React, { useState, useEffect, Component } from 'react';
import firebase from './firebase';
import { useParams } from 'react-router-dom';

const Edit = () => {



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

    const { id: id } = useParams();

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

    }, [id])
    useEffect(() => {
        let userinfo = [];
        db.collection('users').get()
            .then((res) => {

                res.forEach(action => {
                    userinfo.push({ ...action.data(), id: action.id });
                    console.log(action.data())
                })
                setUsers({ ...userinfo[id] });
            })

    }, [users, id])
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
    return (



        <>
            <form onSubmit={createUser}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input value={id} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                    <label for="exampleInputEmail1" class="form-label">Surname</label>
                    <input value={id} name="age" onChange={getAge} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                    <label for="exampleInputEmail1" class="form-label">Location</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                    <label for="exampleInputEmail1" class="form-label">Age</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Edit;