import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Details = () => {

    const db = firebase.firestore();
    const [users, setUsers] = useState([]);
    //let id currentId = useParams();

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


    return (
        <>
        <Router>
            <div class="container mt-5">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        WELLCOME
                    </div>
                    <div class="card-body text-center bg-primary text-white">
                        <h5 class="card-title">{users.map(element => {
                            if (element.id == id) {
                                return (
                                    <p>Hi  {element.name} ,
                                        {element.surname}  YOUR LOCATION IS {element.location} AND AGE IS  {
                                            element.age
                                        }
                                    </p>


                                )
                            }

                        }

                        )
                        } </h5>
                        <Link to={"/"}

                            type="button" class="btn btn-success">CANCE

                        </Link>
                    </div>
                </div>
            </div>
            


            </Router>
        </>
    );
}

export default Details;