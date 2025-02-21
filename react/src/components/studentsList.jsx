import students from "../Api/studentsInfo.json"
import {StudentsLi} from "./studentLi"

export const StudentsList = () => {
  return (
    <ul >
      {students.map((curElement) => {
        return(
         <StudentsLi key={curElement.id} curElement={curElement}/>
        );
      })}
    </ul>
  );
}