// src/App.js
import "./App.css";
import listContacts from "./contacts.json";
import { useState } from "react";

const contacts = listContacts.slice(0,5)
console.log(contacts)


function App() {

const [famous, setFamous] = useState(listContacts.slice(0,5))

function randomFamous(){
  let random = listContacts[Math.floor(Math.random() * listContacts.length)]
  let exists = false
  console.log(random)
  
  for(let i = 0; i < famous.length; i++){
    if(famous.includes(random)){
      exists = true
    }
  }
  console.log(famous.length)
  if(!exists){
    setFamous(famous.concat([random]))
  }
}

function sortPop(){
  return setFamous(famous.map(famous=>famous).sort(function(a, b){
    return b.popularity - a.popularity
  })
  )}

function sortName(){
  return setFamous(famous.map(famous=>famous).sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase(); 
    
    if (nameA < nameB) {
      return -1;
      
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  }))
}

function remove(id){
    return setFamous(famous.filter(famous => famous.id !== id ))
}




  return <div className="App">

    <button onClick={randomFamous}>Random actor</button>
    <button onClick={sortPop}>Sort by popularity</button>
    <button onClick={sortName}>Sort by name</button>
   
      <table>
      <thead>
      <tr>

        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won <br></br> Oscar</th>
        <th>Won <br></br> Emmy</th>
        
      </tr>
      </thead>
      <tbody>
  {famous.map(contact =>{
    return(
      <tr key= {contact.id}>
        <td><img src={contact.pictureUrl} alt="asdasd"  width="130" height="130"/></td>
        <td>{contact.name} </td>
        <td>{contact.popularity} </td>
        {contact.wonOscar && <td>	&#127942;</td>}
        {!contact.wonOscar && <td></td>}
        {contact.wonEmmy && <td>	&#127942;</td>}
        {!contact.wonEmmy && <td></td>}
        <td><button onClick={()=>remove(contact.id)}>Delete entry</button></td>
      </tr>
      
    )
  })}
      </tbody>
    </table>
  </div>;
}
export default App;