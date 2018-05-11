import React from 'react';
import deptsJson from '../../May11_Homework1/data.json';

const deptsArray = deptsJson.departments;
const a = 0;
const htmlContent = (
  <div id="middle">
    <center>
      <h1>Departamentos</h1><br />
      <tbody>
        <a href="/#/department" id="0">{deptsArray[0].name} </a><br /><br />
        <a href="/#/department" id="1">{deptsArray[1].name} </a><br /><br />
        <a href="/#/department" id="2">{deptsArray[2].name} </a><br /><br />
        <a href="/#/department" id="3">{deptsArray[3].name} </a><br /><br />
        <a href="/#/department" id="4">{deptsArray[4].name} </a><br /><br />
        <a href="/#/department" id="5">{deptsArray[5].name} </a><br /><br />
      </tbody>
    </center>
  </div>
);

const Departments = () => htmlContent;
export default Departments;
