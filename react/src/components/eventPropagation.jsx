//Topic:- Bubbling & Capturing-eventpropagation 

export const EventPropagation = () => {
  
  const handleGrandParentClick = (event) => {
    console.log("grandParent event triggered");
  }

  const handleParentclick = () => {
    console.log("parent event triggered");
  }

  const handlechildclick = () => {
    console.log("child event triggered");
  }
  
  return (
    <>
    {/* Bubbling: starts from bottom level element and ends at top level element */}
    <span>Bubbling:</span>
    <div className="gp-div" onClick={(event) => {handleGrandParentClick(event)}}>
      <div className="p-div" onClick={(event) => {handleParentclick(event)}}>
        <button className="c-div" onClick={(event) => {handlechildclick(event), console.log("bubbling");
        }}>Child</button>
      </div>
    </div>
    {/* Capturing: starts from Top level element and ends at Bottom level element */}
    <span>Capturing         :</span>
    <div className="gp-div2" onClickCapture={(event) => {handleGrandParentClick(event)}}>
      <div className="p-div2" onClickCapture={(event) => {handleParentclick(event)}}>
        <button className="c-div2" onClickCapture={(event) => {handlechildclick(event), console.log("Capturing");
        }}>Child2</button>
      </div>
    </div>
    </>
  );
}