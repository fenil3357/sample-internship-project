// App.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const DepartmentContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

const Departments = () => {
  const departmentsData = [
    { name: 'IT', hod: 'Vibha Patel', students: 150 },
    { name: 'Computer', hod: 'Smit Patel', students: 200 },
    { name: 'Civil', hod: 'Neha Pandya', students: 100 },
    { name: 'Mechanical', hod: 'Keshav Jadhav', students: 120 },
    { name: 'Power tech', hod: 'Robin Jadeja', students: 140 },
    { name: 'Rubber tech', hod: 'Rahul Khan', students: 210 },
    { name: 'Electronics', hod: 'Disha Advani', students: 220 },
  ];

  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Department Information</h1>
      <GridContainer>
        {departmentsData.map((department, index) => (
          <DepartmentContainer key={index} style={{cursor:'pointer'}} onClick={()=>navigate('/home')}>
            <h2>{department.name}</h2>
            <p>HOD: {department.hod}</p>
            <p>Total Students: {department.students}</p>
          </DepartmentContainer>
        ))}
      </GridContainer>
    </div>
  );
};

export default Departments;
