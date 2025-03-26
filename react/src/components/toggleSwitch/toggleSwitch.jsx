import "../toggleSwitch/toggleSwitch.css";
import { useState } from "react";



export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  }

  return (
    <>
      <div className={`toggle-container ${isOn ? "active" : ""}`}  onClick={handleToggle}>
        <div className={`toggle-btn`}>
          <span className="toggle-txt" >{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  )
}