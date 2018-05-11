import React from 'react';
import deptsJson from '../../May11_Homework1/data.json';

const deptsArray = deptsJson.departments;

const htmlContent = (
  <div className="departments">
    <center>
      <h1>Departamentos</h1><br />
      <tbody>
        {deptsArray[0].name} <br />
        {deptsArray[1].name} <br />
        {deptsArray[2].name} <br />
        {deptsArray[3].name} <br />
        {deptsArray[4].name} <br />
        {deptsArray[5].name} <br />
      </tbody>
    </center>
  </div>
);

const Departments = () => htmlContent;
export default Departments;
