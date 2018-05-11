import React from 'react';

import deptsJson from '../../May11_Homework1/data.json';

function findDepartment(name) {
  return deptsJson.find(dept => dept.name === name);
}

const Department = props => {
  const department = findDepartment(props.params.name);
  return (
    <div id="info">
      {department}
    </div>
  );
};

export default Department;
