import React,{Component} from 'react'
import './table.css'

class Table extends Component {
    constructor(){
        super();
        this.state={
             name : "indhu" ,
             age  : 21,
            salary : 10000,
            
            place : "chennai" 

        }
    }
    render() {
        return (
            <div>
                <h2> table </h2>
                  <table >       
                      <tr>
                   <th className='t-head'> employee name </th>
                   <th> salary </th> 
                    <th> age </th>
                    <th> place </th>

                         </tr>
                      <tr>
                         <td className='t-head'> {this.state.name} </td>
                         <td> {this.state.salary} </td>
                         <td> {this.state.age} </td>
                         <td> {this.state.place}</td>
                          </tr>
                        
                        
          </table>

            </div>
        )
    }
}
export default Table;