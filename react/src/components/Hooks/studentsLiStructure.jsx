export const StudentLiStructure = (props) => {
  return (
    <>
      {props.students.map((student) => (
        <li key={student.sid}>
          {student.sname} - Age: {student.age}
        </li>
      ))}
    </>
  );
};