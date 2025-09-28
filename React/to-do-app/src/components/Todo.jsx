import Todos from "./Todos.jsx";
function Todo({ todoitems }) {
    return (
    <>
      {todoitems.map(({work,date}) => (
        <Todos work={work} date={date} />)
      )}
    </>
  );
}
export default Todo;
