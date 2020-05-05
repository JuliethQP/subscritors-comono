import React, { Fragment, useState, useEffect,useReducer } from 'react'; /*import the hook useState from React--> to maintain a local state in a functional component */
import axios from 'axios';
import  Table from './Table'


export default function Fetch() {

    /*Variables*/
    /* name left: API de React */
    const [subscritors, setSubscritors] = useState([]); /* useState--> Declares a state variable; initial state*/
    const [loading, setLoading] = useState(true);

    /* Functions to sort data */

    const Sort = (data, arg) => {
        data.sort((first, second) => (first[arg] > second[arg]) ? 1 : -1)        
        setSubscritors([...data]); 
    }  
    /*We are telling React that the component has to do something after rendering*/

    useEffect(() => {
        console.log('entro a useEffect')
        axios.get('https://json-server-now-nine.now.sh/db.json/')
            .then(res => {
                setLoading(false)
                setSubscritors(res.data.subscritors)

            })
            .catch(err => {
                console.log(err)
            })
    }, []); /*second argument useEffect */

    if (loading === true) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow" style={{ width: '5rem', height: '5rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            <Table object={subscritors} />

         
            <div className="container mx-auto  pl-4 pr-4">
                <div className="row">
                    <button className="col btn btn-info mx-1" onClick={() => Sort(subscritors,'name') }>Sort by name </button>
                    <button className="col btn btn-secondary mx-1 " onClick={() => Sort(subscritors,'age')}>Sort by age </button>
                    <button className="col btn btn-success mx-1 " onClick={() => Sort(subscritors, 'sport')}>Sort by sport </button>
                </div>
            </div>
        </Fragment>
    );
}
