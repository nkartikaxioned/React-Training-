
export const DisplayTodo = ({todoArray}) => {

  return (
    <>
      {todoArray.map((todo, index) => {
        return (
          <li key={index}>
            <input type="checkbox" />
            <p>{todo}</p>
            <div>
              <button className="btn">Delete</button>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </li>
        );
      })}
    </>
  );
}