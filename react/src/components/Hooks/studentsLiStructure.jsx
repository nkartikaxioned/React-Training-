export const StudentLiStructure = ({students}) => {
  return (
    <>
      {students.map(({sid, sname, age}) => (
        <li key={sid}>
          {sname} - Age: {age}
        </li>
      ))}
    </>
  );
};