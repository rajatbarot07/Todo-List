import React from 'react';
import {AddToDo, DeleteToDo} from '../Actions/index'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';

function Todo(props) {
    const[inpData,setinpData] = useState('');
    const list = useSelector((state)=>state.listdata.list);
    console.log(list);
    const dispatch = useDispatch()
    return (
        <>
          <div className="container">
            <div className="row">
             <div className="col">
                <input type="text" onChange={(event)=>{setinpData(event.target.value)}} value={inpData}/>
                <button className='btn btn-primary' onClick={()=>{dispatch(AddToDo(inpData),setinpData(''))}}>ADD</button>
                {list.map((ele)=>{
                    return(
                    <div className="col-3" key={ele.id}>
                    <input type="text" value={ele.data}/>
                    <button className='btn btn-primary' onClick={()=>{dispatch(DeleteToDo(ele.id))}}>Delete</button>
                    </div>
                    )
                })}
             </div>
            </div>
          </div>  
        </>
    );
}

export default Todo;