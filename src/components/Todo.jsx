import { useState } from "react"
import styles from './styles/Todo.module.css';
export default function Todo(){
 const[todo, setTodo] = useState("");
 const[todos, setTodos] = useState([]);
 function handleClick(e){
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo("");
 }
    return(
    <div>
        <h2>Welcome To Today's Calendar of Activities</h2>
        <div className={styles.pickdiv}>
      <form onSubmit={handleClick}>
      <input type="text" id="todoInput" onChange={(e) => (setTodo(e.target.value))} value={todo}/>
      <button type="submit" className={styles.btnsub}>Add</button>
      </form>
     <ul>
        {todos.map((value,index) => (

           <li key={index}>{value}</li>

        ))}
     </ul>
     </div>
    </div>
    )
}