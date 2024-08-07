import { Form } from "./components/form/Form"
import { ListActions } from "./components/listActions/ListActions"
import { TaskList } from "./components/tasksList/TasksList"

function App() {
  

  return (
      <main>
        <h1>To Do</h1>
        <Form />
        <ListActions />
        <TaskList />
      </main>
    
  );
}

export default App
