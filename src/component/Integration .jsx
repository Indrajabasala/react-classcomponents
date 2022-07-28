import React from 'react';

import axios from 'axios';

class Practice extends React.Component {
    state= {
        names:[]
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            
            const names = res.data;
            this.setState({names})
        }
            )
    }

    render() {
        return(
            <ul>
             CLASS bbbb COMPONENT
             {this.state.names.map(name=>   <li>{ name.username + '--' + name.name }   </li>    )}
            </ul>
        )
    }
}
export default Practice;