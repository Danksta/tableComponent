import React from 'react'


const Select = (props) =>{
    return (
           
               <select onChange={(event)=>{props.changed(event.target.value)}} id={props.select_id}>  
                    <option value={props.selected_value}> {props.selected_value} </option>  

                    {props.some_value.map((element)=>{

                        return <option id={element} value={element}> {element} </option>

                    })}

                    {/* <option value="date"> date </option>  */}
              </select>
            
        )
    }


export default Select
