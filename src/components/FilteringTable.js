import React ,{useMemo} from 'react'
import { useTable ,useGlobalFilter,useFilters} from 'react-table'
import MOCK_DATA from "./MOCK_DATA.json"
import { Columns } from './Columns'
import GlobalFilter from './GlobalFilter'
import ColumnFilter from './ColumnFilter'

import "./Styles.css"
const BasicTable = () => {
    //useMemo is used so that data is not recreated on every render
    const columns=useMemo(()=>Columns,[])
    // const columns=useMemo(()=>GROUPED_COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])
    //if we need to add filter option once without adding to eachone,we can usedefault  and add it to useTable
    const defaultColumn=useMemo(()=>{
        return{
            Filter:ColumnFilter
        }
    },[])
 //state is the  tablestate and setGlobalFilter is function to set global filter text value
    const {getTableProps,getTableBodyProps,state,setGlobalFilter,footerGroups,headerGroups,rows,prepareRow} =  useTable({columns,data,defaultColumn},useFilters,useGlobalFilter)
    //since the state here has several properties we need to destructure Globalfilter from state.
    const {globalFilter}=state
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=>(
            //every column header belongs to its own seperate groups
            <tr {...headerGroup.getHeaderGroupProps()}>
               {/*  we access headers in each group */}
                {headerGroup.headers.map((column)=>(
                    //then we access each column 
                    <th {...column.getHeaderProps()}>
                    {/* render "Header" property defined in the columns used in the used table */}
                    {column.render('Header')}
                    {/* Filter is a property in each column */}
                    <div>{column.canFilter ? column.render('Filter'):null}</div>
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {/* map the rows and prepare for each row which is rendered */}
            {rows.map(row=>{
                prepareRow(row)
                return(
            <tr {...row.getRowProps()}>
                {/* each row has cell and "Cell" is rendered,which picks the value from row data */}
                {row.cells.map(cell=>{
                    return <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                    </td>
                    })}
            </tr>
            )
            })}
        </tbody>
        <tfoot>
         {
            footerGroups.map(footerGroup=>(
                <tr {...footerGroup.getHeaderGroupProps()}>
                   {
                    footerGroup.headers.map(column=>(
                       <td {...column.getFooterProps()}>
                       {column.render('Footer')}
                       </td> 
                    ))
                   } 
                </tr>
            ))
         }
        </tfoot>
    </table>
        </>
  )
}

export default BasicTable