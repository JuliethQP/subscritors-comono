import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table'

const Fetch = () => {

    /*Variables to save the sort data */
    const [sortedName, setsortedName] = useState([])
    const [sortAge, setsortAge] = useState([])
    const [sortSport, setsortSport] = useState([])
    /* Functions to sort data */
    const Sort = (data, arg) => {
        setsortedName([])
        setsortSport([])
        setsortAge([])
        arg == 1 ? setsortedName(data.sort((a, b) => (a.name > b.name) ? 1 : -1)) :
        arg == 2 ? setsortAge(data.sort((a, b) => (a.age > b.age) ? 1 : -1)) :
        setsortSport(data.sort((a, b) => (a.sport > b.sport) ? 1 : -1));
    }

    /*Declare variables to save fetch data */

    const [subscritors, setSubscritors] = useState([]);
    const [loading, setLoading] = useState(true);

    /*We are telling React that the component has to do something after rendering*/

    useEffect(() => {
        axios.get('https://json-server-now-nine.now.sh/db.json/')
            .then(res => {
                setLoading(false)
                setSubscritors(res.data.subscritors)
                console.log('datos de la peticion')
                console.log(res.data.subscritors)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (loading === true){
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
                    <button className=" col btn btn-info mx-1" onClick={() => Sort(subscritors, 1)}>Sort by name </button>
                    <button className=" col btn btn-secondary mx-1 " onClick={() => Sort(subscritors, 2)}>Sort by age </button>
                    <button className=" col btn btn-success mx-1 " onClick={() => Sort(subscritors, 3)}>Sort by sport </button>
                </div>
            </div>
        </Fragment>
    );
}
export default Fetch;