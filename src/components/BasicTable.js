import React ,{useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from "./MOCK_DATA.json"
import { Columns } from './Columns'
import "./Styles.css"
const BasicTable = () => {
    //useMemo is used so that data is not recreated on every render
    const columns=useMemo(()=>Columns,[])
    const data=useMemo(()=>MOCK_DATA,[])
    //arrays and functions for accessing to connect data with table elements
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} =  useTable({columns,data})
  return (
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
    </table>
  )
}

export default BasicTable