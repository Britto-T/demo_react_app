import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Student = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response: any) => {
        setStudentDetails(response.data.data);
      })
      .catch((error: any) => {
        alert("Invalid User");
      });
  }, []);
  return (
    <>
      <h4 style={{ color: "Green" }}>I am the student page</h4>
      <br />
      <ol>
        {studentDetails.map((item: any, key: any) => {
          return (
          <li key={key}>
              {item.email}
              {item.id}
              {item.first_name}
              {item.last_name}
            </li>

          )
        })}
      </ol>
    </>
  );
};
export default Student;
