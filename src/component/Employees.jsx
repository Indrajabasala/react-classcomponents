import React from 'react';

class Employees extends React.Component {
    state={
        name:'',
        employees:[]
    }

    handlechange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlesave=()=> {
        this.setState({
            employees : [...this.state.employees, this.state.name]
        })
    }

    render() {
        console.log(this.state.employees)
        return(
            <>
            <input type='text' value={this.state.name} name='name' placeholder='name...' onChange={this.handlechange} ></input>
            <button onClick={this.handlesave} >Add</button>
            {this.state.employees.map(each => <li>{each}</li>)}
            </>
        )
    }
}


export default Employees