const initialData = {
    list:[]
}
const MyData = (store=initialData,action)=>{
    switch (action.type) 
    {
        case 'ADDTODO':
            const id = action.payload.id;
            const data = action.payload.data;
            return{
                ...store,
                list:[
                    ...store.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case 'DELETETODO':
            const list = store.list.filter((ele)=>ele.id!==action.id);
            return{
                ...store,
                list:list
            }  
        default: return store;
           
    }
}
export default MyData;