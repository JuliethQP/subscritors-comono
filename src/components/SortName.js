import React, { useState } from 'react';
import Table from './Table'

const SortbyName=(data)=>{
  
    console.log(data)
    const sortedName = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(sortedName)
 
   

}
export default SortbyName;

/*const SortName = ({ datos }) => {
    const [sortName, setsortName] = useState([])
    const sort = () => {
        const sortName = datos.sort((a, b) => (a.name > b.name) ? 1 : -1)
        setsortName(sortName)
        console.log(sortName)
        return (<Table object={sortName} />)
       
    }
   
    return (
        <>
            <button onClick= {()=>sort()}>Sort by name </button>

        </>)


}
export default SortName; */