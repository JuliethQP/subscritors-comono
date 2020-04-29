import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/Table'
import SortSport from './components/SortSport'
import SortName from './components/SortName'
import SortAge from './components/SortAge'

ReactDOM.render(
  <>
    <Table />
    <div className="container">
      <div className="row ">
        <SortName />
        <SortAge />
        <SortSport />
      </div>
    </div>
  </>,

  document.getElementById('root')
);



