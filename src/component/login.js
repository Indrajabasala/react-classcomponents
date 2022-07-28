import React, {Component} from 'react'



class Login extends Component {
    constructor(){
 super();
this.state={
    name: "indhu",  
    age:21
}

    }
    render() {
        return(
            <div>
                <h2>{this.state.name} </h2>
                <p>{this.state.age}</p>
            </div>
        )
    }
    
}




export default  Login ;
