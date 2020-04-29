import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Table = () => {
    const [subscritors, setSubscritors] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://localhost:3005/subscritors',
        );
        setSubscritors(result.data);
    }, []);

    return (
        <Fragment>
        <div className="container mt-5">
            <table class="table table-striped table-dark table-bordered " >
                <thead>
                    <tr >
                        <td>Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                        <td>Sport</td>
                    </tr>
                </thead>
                {subscritors.map(item => (
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>{item.sport}</td>
                        </tr>
                    </tbody>
                ))
                }
            </table>
        </div>
        
        </Fragment>

    );
}
export default Table;