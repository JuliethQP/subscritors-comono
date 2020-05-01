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
        setsortedName(data.sort((a, b) => (a.name > b.name) ? 1 : -1))
        return (<Table object={sortedName} />)
    }

    const SortbyAge = (data) => {

        setsortAge(data.sort((a, b) => (a.age > b.age) ? 1 : -1))
        return (<Table object={sortAge} />)
    }
    const SortbySport = (data) => {

        setsortSport(data.sort((a, b) => (a.sport > b.sport) ? 1 : -1))
        return (<Table object={sortSport} />)
    }
    /* Functions to sort data*/

    /*Declare variable to save the data of fetch */
    const [subscritors, setSubscritors] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
            <button onClick={() => SortbyName(subscritors)}>Sort by name </button>
            <button onClick={() => SortbyAge(subscritors)}>Sort by age </button>
            <button onClick={() => SortbySport(subscritors)}>Sort by sport </button>
        </>
    );
}
export default Fetch;