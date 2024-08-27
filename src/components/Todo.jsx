import { useState } from "react"
import styles from './styles/Todo.module.css';
export default function Todo(){
     const [todo, setTodo] = useState({activity:"",done:false});
     const [todos, setTodos] = useState([]);
     const [count, setCount] = useState(0);
  
    function handleDone(value){
      console.log(value);
      // let index = todos.indexOf(value);
      // if (index > -1) { 
      //   todos.splice(index, 1);
      // }
      // if(value.done){  
      //   setTodos([...todos,{activity:value.activity,done:false}]);
      // }else{
      //   setTodos([...todos,{activity:value.activity,done:true}]);
      // }
      const newTodos = todos.map((myTodo) => (myTodo.activity === value.activity) ? ({...myTodo, done:!myTodo.done}) : myTodo);
      setTodos(newTodos);
 
   }
  
     function handleSubmit(e){
        e.preventDefault();
        let count = todos.length;
        console.log(todo);
        setTodos([...todos, todo]);
        setCount(count + 1);
        setTodo({activity:"",done:true});
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
        {(value.done) ?
          (<del className={styles.strike} onClick={() => (handleDone(value))}>{value.activity}</del>)
          :  (<span className={styles.normal} onClick={() => (handleDone(value))}>{value.activity}</span>)}
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
          <h2>Welcome To Today's Calendar {count} Activities</h2>
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