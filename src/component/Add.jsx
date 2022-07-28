import React from 'react';

class Add extends React.Component {
    state = {
        email:'',
        orders:[]
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    // handleSave = () => {
    //     this.setState({
    //         orders: [...this.state.orders, this.state.email ]
    //     },()=>{
    //         this.setState({
    //             email : ""
    //         })
    //     })
    // }

    handleSave = () => {
        let email = this.state.email;
        let previosData = this.state.orders;
        previosData.push(email);
        this.setState({
            order : previosData
        })
    }

    render() {

        return (
            <>
            fullnames :  <input name='email' value={this.state.email} onChange={this.handleChange}/>

            <button onClick={this.handleSave} > Add </button>

            {this.state.orders.map((order)=> <li>{order}</li> )}
            </>
             ) }
}

 export default Add;