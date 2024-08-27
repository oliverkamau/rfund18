import { useState } from "react"
import styles from './styles/Todo.module.css';
export default function Todo(){
     const [todo, setTodo] = useState({activity:"",done:false});
     const [todos, setTodos] = useState([]);
     function handleSubmit(e){
        e.preventDefault();
        console.log(todo);
        setTodos([...todos, todo]);
        setTodo({activity:"",done:false});
     }
     function handleRemove(value){
      let index = todos.indexOf(value);
if (index > -1) {
  todos.splice(index, 1);
 setTodos([...todos]);
}
     }
     function createTableRows(todos){
      return(
      todos.map((value, index) => (
      <tr key={index}>
      <td>
          {value.activity}
      </td>
       <td className={styles.floatleft}>
       <button type="button" className={styles.removebutton} onClick={() => handleRemove(value)}></button>
   </td>
   </tr>
    ))
      )
     }
    return (
        <div>
          <h2>Welcome To Today's Calendar</h2>
          <div  className={styles.pickdiv}>
        <form onSubmit={handleSubmit}>
            <input type="text" id="todoItem" onChange={(e) => setTodo({activity:e.target.value,done:false})} value={todo.activity}/>
            <button type="submit" className={styles.btnsub}>Add</button>
            {console.log(todos)}
        </form>
        </div>
        <div  className={styles.pickdiv}>
          <table>
          <thead>
            <tr>
                <th>Activity</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tableDynamic">
         {createTableRows(todos)}  
        
 
        
          
          </tbody>
          </table>
          </div>
        
        </div>
       
    )
}