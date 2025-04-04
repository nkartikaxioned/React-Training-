
export const DisplayTodo = ({todoArray}) => {

  return (
    <>
      {todoArray.map((todo, index) => {
        return (
          <li key={index}>
            <input type="checkbox" />
            <p>{todo}</p>
            <div>
              <button>Delete</button>
            </div>
            <div>
              <button>Edit</button>
            </div>
          </li>
        );
      })}
    </>
  );
}