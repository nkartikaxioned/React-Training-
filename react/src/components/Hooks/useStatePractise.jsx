import { useState } from "react";
import { StudentLiStructure } from "./studentsLiStructure";
export const StudentsList = () => {
  
  const [students, setStudents] = useState([
    {sid:"s1", sname:"abc", age: 20},
    {sid:"s2", sname:"pqr", age: 19},
    {sid:"s3", sname:"xyz", age: 22},
    {sid:"s4", sname:"lmn", age: 25},
  ]);
  //passing array of object as state prop
  return (
    <ul className="students-list">
        <StudentLiStructure students={students}/> 
    </ul>
  );
}