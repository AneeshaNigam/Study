import Heading from "./components/Heading.jsx";
import Headers from "./components/Headers.jsx";
import Todo from "./components/Todo.jsx";
function App() {
  const todoitems=[{work:"Eating food", date:"12/05/2025" },
    {work:"Working in Office", date:"8/12/2024" },
    {work:"Laundry", date:"2/10/2024" },
  ]
  return (
    <>
      <br />
      <Heading />
      <br />
      <Headers />
      <br />
      <Todo todoitems={todoitems}/>  
      <br />
    </>
  );
}

export default App;
