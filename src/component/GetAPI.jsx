import React from  'react';

import axios from 'axios';


class GetAPI extends React.Component {
     
    state={
        saves:[]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {

            const saves = res.data;
            this.setState({saves}); 
        })
    }


    render() {
        return(
            // <ul>
            // class component
            // { this.state.saves.map(save=> <li> {save.username + " ......" + save.name + "----"+ save.website + "--" +save.city} </li>)}
            // </ul>

//             <div>
//                 <table>
//                     <tr>
//                         <th>
//                             s/no
//                         </th>
//                         <th>
//                            username
//                         </th>
//                         <th>
//                             name
//                         </th>
//                     </tr>

//                     <tr>
     
// {/* {
//     this.state.saves.length > 0 ? this.state.saves.map((each,index) => {
//         return(
//             <tr key={each.id}>
// <td>{index+1}</td>
// <td>{each.name}</td>
// <td>{each.username}</td>

//             </tr>
            
//         )
//     }) : "no data"
// }
//                        */}




//                        {this.state.saves.map((each,index)=>{

//                            return(
//                                <tr key={each.id}>
//                                    <td>{index+1}</td>
//                             <td>{each.name}</td>
//                            <td>{each.username}</td>

                                  
//                                </tr>
//                            )
//                        }

//                        )}
//                     </tr>
//                 </table>
            // </div>


            <>
            {this.state.saves.map((each,index)=>{

                return(
                    <div key={each.id}>
                    <p>{each.name + "---" + each.person }</p>
                    </div>
                )
            }
            )}
            </>
        )
    }
}
export default  GetAPI;