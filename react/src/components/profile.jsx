import personProfile from "../Api/profileApi.json";
import { ProfileList } from "./profileList";
import profileStyle from "./profile.module.css";
const ulStyle = {
  gap: "20px",
  padding: "50px"
}
export const GetProfile = () => {
  return (
    <ul className={profileStyle.ulStyle} style={ulStyle}>
      { personProfile.map((currElem) => {
          return(
            <ProfileList
            key={currElem.id}
            age={30}
            greeting={
              <div>
                <strong>welcome to props!</strong>
              </div>
            }
            currElem={currElem}
            >
              <p>hello world</p>
            </ProfileList>
          );
        })
      }
    </ul>
  );
}