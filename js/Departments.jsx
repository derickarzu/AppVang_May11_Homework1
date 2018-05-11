import React from 'react';
import deptsJson from '../../May11_Homework1/data.json';

const deptsArray = deptsJson.departments;
const a = 0;
const htmlContent = (
  <div id="middle">
    <center>
      <h1>Departamentos</h1><br />
      <tbody>
        <a href="/#/department">{deptsArray[0].name} </a><br /><br />
        <a href="/#/department">{deptsArray[1].name} </a><br /><br />
        <a href="/#/department">{deptsArray[2].name} </a><br /><br />
        <a href="/#/department">{deptsArray[3].name} </a><br /><br />
        <a href="/#/department">{deptsArray[4].name} </a><br /><br />
        <a href="/#/department">{deptsArray[5].name} </a><br /><br />
      </tbody>
    </center>
  </div>
);

const Departments = () => htmlContent;
export default Departments;
