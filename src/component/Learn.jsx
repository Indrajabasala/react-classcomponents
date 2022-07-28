import React from 'react';

class Learn extends React.Component {
       state= {
           name:'',
           teachers:[]
       }

       handlechange=(e)=> {
           
           this.setState({
               [e.target.name] :e.target.value
           })
       }

       handlesave =(e) =>{
      
           this.setState({
               teachers: [...this.state.teachers,this.state.name]
           },()=>{
               this.setState({
                   name: ''
               })
           })
       }

       render() {
           return(
               <>
               <input type="text" value={this.state.name} name='name' placeholder = 'teachername' onChange= {this.handlechange}/>

               <button onClick={this.handlesave}> Add  </button>

               {this.state.teachers.map(each=><li>{teacher}</li>)}
               </>
           )
       }

}

export default Learn