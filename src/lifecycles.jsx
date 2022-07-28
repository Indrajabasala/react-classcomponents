import React from 'react';

class Lifecycles extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
    };

    componentDidMount(){
        this.setState({data: 10})
    }
   setNewNumber = () => {
       this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}
class Content extends React.Component {
    constructor(){
        super();
        console.log('constructor')
    }
 
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps!')
    }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
  
   shouldComponentUpdate(newProps, newState) {
       console.log('shouldComponentUpdate')
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
    console.log('render')
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}
export default Lifecycles;