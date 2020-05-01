import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table'
import Sort from './Sort'

const Fetch = () => {

    /*Variable to save the sort data */
    const [sortedName, setsortedName] = useState([])
    const [sortAge, setsortAge] = useState([])
    const [sortSport, setsortSport] = useState([])

    /* Functions to sort data */
    const SortbyName = (data) => {
        setsortedName([])
        setsortAge([])
        setsortSport([])
        setsortedName(data.sort((a, b) => (a.name > b.name) ? 1 : -1))
        return (<Table object={sortedName} />)
    }

    const SortbyAge = (data) => {
        setsortedName([])
        setsortAge([])
        setsortSport([])

        setsortAge(data.sort((a, b) => (a.age > b.age) ? 1 : -1))
        return (<Table object={sortAge} />)
    }
    const SortbySport = (data) => {
        setsortedName([])
        setsortAge([])
        setsortSport([])

        setsortSport(data.sort((a, b) => (a.sport > b.sport) ? 1 : -1))
        return (<Table object={sortSport} />)
    }
    /* Functions to sort data*/

    /*Declare variable to save the data of fetch */
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

    if (loading === true) {
        return <h1>Loading....</h1>
    }
    return (
        <>
            <Table object={subscritors} />
            <div className="container mx-auto  pl-4 pr-4">
                <div className="row">
                    <button className=" col btn btn-info mx-1" onClick={() => SortbyName(subscritors)}>Sort by name </button>
                    <button className="col btn btn-secondary mx-1" onClick={() => SortbyAge(subscritors)}>Sort by age </button>
                    <button className="col btn btn-success mx-1" onClick={() => SortbySport(subscritors)}>Sort by sport </button>
                </div>
            </div>
        </>
    );
}
export default Fetch;