import React  from 'react';

import axios from 'axios';

class Integrate extends React.component {
    state = {
        arrs: []
    }


     componentDidMount() {
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res => {

             const arr=res.data;
             this.setState({arr})
         })
     }

     render() {
         return(
             <ul>
                 classs component 
                 {this.state.arrs.map( arr=><li>{arr.name}</li> )}
             </ul>
         )
     }
}