// export const StudentsLi = (props) => {
//   const {name, school} = props.curElement;
//   return (
//     <li>
//       <p>Student Name: {name}</p>
//       <p>School Name: {school}</p>
//     </li>
//   );
// };

export const StudentsLi = ({curElement}) => {
  const {name, school} = curElement;
  return (
    <li>
      <p>Student Name: {name}</p>
      <p>School Name: {school}</p>
    </li>
  );
};