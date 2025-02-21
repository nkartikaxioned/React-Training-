import profileSt from "./profile.module.css";

export const ProfileList = (props) => {
  const {key} = props.currElem;
  const {age, greeting, children} = props;

  return (
    <li key={key} className={`card-style ${profileSt["card-style"]}`}>
      <span>Age: {age}</span>
      {greeting}
      {children}
    </li>
  );

}