import React, { Fragment} from 'react';

const Table = ({object}) => {


    return (
        <Fragment>
            <div className="container mt-5">
                <table className="table table-striped table-dark table-bordered" >
                    <thead>
                        <tr >
                            <td>Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                            <td>Sport</td>
                        </tr>
                    </thead>
                    {object.map(item => (
                        <tbody key={item.id}>
                            <tr>
                                <td >{item.name}</td>
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
export default  Table;