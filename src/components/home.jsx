// App.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const DepartmentHeader = styled.h1`
  text-align: center;
`;

const DepartmentImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const FacultyList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FacultyItem = styled.li`
  margin-bottom: 10px;
`;

const App = () => {
  const [departmentData, setDepartmentData] = useState({
    name: "Information Technology",
    faculties: [
      "Vibha Patel(HOD)",
      "Prof Jashvant Dave",
      "Prof Nikunj Gamit",
      "Prof Manmeetsinh Zala",
      "Prof Shailesh Molia",
      "Prof Chetna Chand",
      "Prof Om Mehta",
      "Prof Dhaval Vaira"
    ],
    totalStudents: 150,
    blockNumber: "Block B",
  });
  return (
    <Container>
      <DepartmentHeader>{departmentData.name}</DepartmentHeader>
      <DepartmentImage
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODXZR9uIC1rENy9iQO7ln_9AYixckZzkN9I7vK_sZlfNIMxPnaZtycBWdfiwN-YQDzl4&usqp=CAU'}
      alt={"Department photo"}
      />
      <p>Total Number of Students: {departmentData.totalStudents}</p>
      <p>Department's Location: {departmentData.blockNumber}</p>
      <h2>Faculties:</h2>
      <FacultyList>
        {departmentData.faculties.map((faculty, index) => (
          <FacultyItem key={index}>{faculty}</FacultyItem>
        ))}
      </FacultyList>
    </Container>
  );
};

export default App;
