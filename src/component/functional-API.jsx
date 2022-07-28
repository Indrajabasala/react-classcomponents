import React from 'react';
import axios from 'axios';

const FunctionalAPI = () => {
   const [persons, setPersons] = React.useState([]);

   React.useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
        console.log('responce data.....:', res )
      const persons = res.data;
      setPersons(persons);
    })
   },[])
   
  

      return (
        <ul>
            FUNCTIONAL COMPONENT
          { persons.map(person => <li>{person.name + '   ----    ' + person.username}</li>)}
          
        </ul>
      )
    }
  
    export default FunctionalAPI