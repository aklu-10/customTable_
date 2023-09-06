import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import ActionComponent from './ActionComponent';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 160,
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,

    },
  ];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "90",
      hideable: false,
      filterable: false,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <ActionComponent/>
          </div>
        );
      },
    },
  ];

const DynamicTable = () => {

    const [rows, setRows] = useState([]);

    const handleFilter = (filterParamsArray) =>
    {
        console.log(filterParamsArray)
    }

    useEffect(()=>
    {
        axios.get('https://dummyjson.com/users')
        .then((res)=>
        {
            let actualRows = res.data.users.map((element)=>
            {
                return {
                    id:element.id,
                    lastName:element.lastName,
                    firstName:element.firstName,
                    age:element.age,
                    gender:element.gender
                }
            })

            setRows(actualRows);
        })
        .catch(err=>
        {
            console.log(err);
        })

    },[]);

  return (

    <>
         <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        onFilterModelChange={(filter) => handleFilter(filter)}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </>

  )
}

export default DynamicTable