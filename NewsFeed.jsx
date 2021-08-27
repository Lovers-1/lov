import { useEffect, useState } from "react";
import { Redirect } from "react-router";

import About from "./About";

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
const NewFeed = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            .then((res) => {
                return res.json()
            }
            )
            .then((_data) => {
                console.log(_data)
                setData(_data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log('DONE!!')
            }
            )
    }, []);


    //{id: 7, brand: "maybelline", name: "Maybelline Volum'Express the Falsies Mascara", price: 
    return (
        <>
            <Router>
                <div className="text-center"><h3>MAYBELLINE PRODUCT FOR WOMEN</h3></div>
                {data.map(element =>
                    <div className="card width: 18rem  text-center border border-success mt-2 bg-info text-dark" >
                        <div className="text-center">
                            <img src={element.image_link} className="rounded" alt="..." />
                        </div>
                        <div class="card-body text-center">
                        <h5 class="card-title color-$cyan-100">Name       : {element.name}</h5>
                        <h5 class="card-title">Created_at :{element.created_at} </h5>
                        <h5 class="card-title">Price :{element.price} </h5>
                    </div>
                        
                        <div class="card-body">
                            <Link to={"./About/" + element.id}

                                className="list-group-item list-group-item-action link-info" key={element.id}>see more details

                            </Link>
                        </div>
                    </div>
                )}
            </Router>
        </>
    );
}

export default NewFeed;