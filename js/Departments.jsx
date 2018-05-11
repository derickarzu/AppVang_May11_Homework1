import React from 'react';
import deptsJson from '../../May11_Homework1/data.json';

const deptsArray = deptsJson.departments;
const htmlContent = () => (
  <div id="middle">
    <center>
      <h1>Departamentos</h1><br />
      <tbody>
        {deptsArray.map(dept => <div><a href={`/#/department/${dept.name}`}>{dept.name}</a><br /><br /></div>)}

      </tbody>
    </center>
  </div>
);

export default htmlContent;
