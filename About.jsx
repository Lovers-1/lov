import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {

    const [info, setInfo] = useState([]);
    const { id: id } = useParams();


    useEffect(() => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' + id)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setInfo(data);
            })

    })
    return (

        <>
            <div class="container mt-5">
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

            </div>
        </>
    );
}

export default About;