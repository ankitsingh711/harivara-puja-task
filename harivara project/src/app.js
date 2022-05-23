import React, { Component, Fragment, useEffect} from "react";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from "react-redux";
import Header from './components/Header/Header'

import getPosts  from './actions/posts'
import './app.css'

const dispatch = useDispatch(); 

useEffect(() =>{
    dispatch(getPosts());
}, []);


class App extends Component{

    constructor(){
        super()

        this.state = {
            main: 'Harivara Project'
        }
    }

    render(){
        return(
            <Fragment>
                <Header/>
                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Updated AI</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{width: '45px', height: '45px'}}
                                    className="rounded-circle"
                                    />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">Software engineer</p>
                                <p className="text-muted mb-0">IT department</p>
                            </td>
                            <td>
                                <span className="badge badge-success rounded-pill d-inline">Active</span>
                            </td>
                            <td>Senior</td>
                            <td>
                                <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                                </button>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{width: '45px', height: '45px'}}
                                    />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Alex Ray</p>
                                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">Consultant</p>
                                <p className="text-muted mb-0">Finance</p>
                            </td>
                            <td>
                                <span className="badge badge-primary rounded-pill d-inline"
                                    >Onboarding</span
                                >
                            </td>
                            <td>Junior</td>
                            <td>
                                <button
                                        type="button"
                                        className="btn btn-link btn-rounded btn-sm fw-bold"
                                        data-mdb-ripple-color="dark"
                                        >
                                Edit
                                </button>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                    className="rounded-circle"
                                    alt=""
                                    style={{width: '45px', height: '45px'}}
                                    />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Kate Hunington</p>
                                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">Designer</p>
                                <p className="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                                <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                            </td>
                            <td>Senior</td>
                            <td>
                                <button
                                        type="button"
                                        className="btn btn-link btn-rounded btn-sm fw-bold"
                                        data-mdb-ripple-color="dark"
                                        >
                                Edit
                                </button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <Posts/>
                    <posts/>
                    <Form/>
            </Fragment>     
        )
    }
}

export default App