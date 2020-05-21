import React from 'react';
import './App.css';
import './todoItem/todoItem.css';
import ItemList from './ItemList/ItemList';
import axios from 'axios';


const App = () => {
  const [item, setItem] = React.useState('');
  const [itemList, setItemList] = React.useState([]);


  //get all messages in DB before doing anything further.
  React.useEffect(()=>{
  axios.get("/api/getItems")
    .then((res)=> {setItemList(res.data)})
    .catch(console.log)
  }, [])

  //Handle adding the item from the handler.
  const addItemHandler = (event) => {
    if(item === "") return

    const body = {
      item
    }

    // "/addItem" responds with the list of items to be processed.
    axios.post("/api/addItem", body)
    .then(res => {
      console.log(res.data);
      
      setItemList(res.data)
    })
    .catch(console.log)
    //reset value
    setItem("");
    event.target.value = "";
  };

  //Changing input value handler
  const valueChangeHandler = (event) => {
    setItem(event.target.value)
  }

  const removeItemHandler = (event) => {
    if(item === "") return
    
    const body = {
      item
    }

    axios.post("/api/removeItem", body)
    .then(res => {
      console.log(res.data);
      
      setItemList(res.data)
    })
    
    //reset value
    setItem("");
    event.target.value = "";
  }



  return (
    <div id="ItemList" className="App">
      <h1>My Todo List</h1>
      <ItemList itemList={itemList} />
      <div className="column-input-button">
        <input 
        defaultValue="Add Item"
        onClick={(event) => event.target.value=""}
        className="input-text-box" 
        onChange={valueChangeHandler} 
        onKeyPress={ (event) => { 
          if(event.key === "Enter") {
            addItemHandler(); 
          }  
         }
        } />

        <button 
        className="cool-button" 
        onClick={addItemHandler}
        >Add Item</button>

      </div>

      <div className="column-input-button">
        <input 
        defaultValue="Remove Item"
        onClick={(event) => event.target.value=""}
        className="input-text-box" 
        onChange={valueChangeHandler} 
        onKeyPress={ (event) => { 
          if(event.key === "Enter"){
            removeItemHandler();
            }
          }
        }/>

        <button className="cool-button" onClick={removeItemHandler}>Remove Item</button>
      </div>
    </div>
  );
}

export default App;