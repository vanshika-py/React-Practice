
/*function Component2(){
   return(
    <div>
      <h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLceJEBIJlP2rbHy2CUaAsSauxGYHC54v0A&s" alt="image of a model"/>
      </h1>
    </div>
   )
}

function Component() {
return(
  <div>
  <h1>Hello this is Component</h1>
  <Component/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam harum ullam deleniti soluta, libero velit cupiditate nesciunt, quia at delectus quibusdam rerum modi repudiandae architecto veritatis, quas aut temporibus eligendi eos voluptates recusandae unde voluptatum. Eius, quisquam. Repellat pariatur suscipit quis magnam iure omnis excepturi error. Distinctio, obcaecati saepe.</p>
  <Component2/>
  </div>
)
}


function App() {
  return (
    <div>
     <Component/>
      <Component/>
       <Component/>
        <Component/>
         <Component/>
          <Component/>
          <nav/>
     
     </div>
  )
}*/
 
import { useState } from 'react';
import './App.css';

function App () {
const [count, setCount] = useState(0);

function increment(){
  setCount (count + 1)
}
  return (
    <div>
      <button onClick = {increment}>Click </button>
      {count}
    </div>
  )
}

export default App







