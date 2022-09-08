import React ,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
const GlobalFilter = ({filter,setFilter}) => {
    //for thousands of records we add debouncing
    const [value,setValue] = useState(filter)
    const onChange=useAsyncDebounce(value=>{
        setFilter(value||undefined)
    },1000)
  return (
    <span>
        Search:{''}
        {/* <input value={filter||""} onChange={(e)=>setFilter(e.target.value)}/> */}
        <input value={value||""} onChange={(e)=> {
             setValue(value)
             onChange(e.target.value)}}/>
    </span>
  )
}

export default GlobalFilter