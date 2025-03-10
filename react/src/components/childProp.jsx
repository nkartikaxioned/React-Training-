export const ChildProp = (props) => {
  const {onClick, onMouseEnter} = props;
  return (
    <>
      <button onClick={onClick} onMouseEnter={onMouseEnter}>Click to get Event.</button>
    </>
  );
}