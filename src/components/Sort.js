import React, { useState } from 'react';
import Table from './Table';

const Sort = ({ subscritors }) => {
  const [sortedName, setsortedName] = useState([])
  const [sortAge, setsortAge] = useState([])
  const [sortSport, setsortSport] = useState([])

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


  return (
    <>
      <button onClick={() => SortbyName(subscritors)}>Sort by name </button>
      <button onClick={() => SortbyAge(subscritors)}>Sort by age </button>
      <button onClick={() => SortbySport(subscritors)}>Sort by sport </button>
    </>
  )

}

export default Sort;

