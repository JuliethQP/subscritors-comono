import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table'
import SortbyName from './SortName'


const Fetch = () => {

    const [subscritors, setSubscritors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://json-server-now-nine.now.sh/db.json/')
            .then(res => {
                setLoading(false)
                setSubscritors(res.data.subscritors)
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
   
        </>
    );
}
export default Fetch;