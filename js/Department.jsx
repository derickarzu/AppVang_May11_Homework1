import React from 'react';

import deptsJson from '../../May11_Homework1/data.json';

const deptsArray = deptsJson.departments;

/* function findDepartment(name) {
  return deptsJson.find(dept => dept.name === name);
} */

/* const Department = props => {
  const department = findDepartment(props.params.name);
  return (
    <div id="info">
      {department}
    </div>
  );
}; */
// const department = findDepartment('Cortés');
const Department = () => (
  <div id="info">
    <h1>{deptsArray[0].name}</h1>
  </div>
);

export default Department;
