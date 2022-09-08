import ColumnFilter from "./ColumnFilter"
export const Columns=[
    //mapping each column to specific data value in the mock data 
    {//column name
        Header:"Id",
        Footer:"Id",
        //accessing this key from mock data
        accessor:"id",
        //to disable filter in any of the columns
       /*  Filter:ColumnFilter,
        disableFilters:true */
    },
    {
        Header:"First Name",
        Footer:"First Name",
        accessor:"first_name",
        // Filter:ColumnFilter
    },
    {
        Header:"Last Name",
        Footer:"Last Name",
        accessor:"last_name",
        // Filter:ColumnFilter
    },
    {
        Header:"Date Of Birth",
        Footer:"Date Of Birth",
        accessor:"date_of_birth",
        // Filter:ColumnFilter
    },
    {
        Header:"Country",
        Footer:"Country",
        accessor:"country",
        // Filter:ColumnFilter
    },
    {
        Header:"Phone Number",
        Footer:"Phone Number",
        accessor:"phone_number",
        // Filter:ColumnFilter
    },
]
export const GROUPED_COLUMNS=[
    {
        Header:"Id",
        Footer:"Id",
        accessor:"id",    
    },
    {   Header:"Name",
        Footer:"Name",
        columns:[
            {
                Header:"First Name",
                Footer:"First Name",
                accessor:"first_name",
            },
            {
                Header:"Last Name",
                Footer:"Last Name",
                accessor:"last_name",
            },
        ]

    },
    {
        Header:"Info",
        Footer:"Info",
        columns:[
            {
                Header:"Date Of Birth",
                Footer:"Date Of Birth",
                accessor:"date_of_birth",
            },
            {
                Header:"Country",
                Footer:"Country",
                accessor:"country",
            },
            {
                Header:"Phone Number",
                Footer:"Phone Number",
                accessor:"phone_number",
            },  
        ]

    },
]