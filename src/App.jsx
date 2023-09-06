import React from 'react'
import DynamicTable from './Components/DynamicTable'

const App = () => {

  return (

    <>

      <DynamicTable/>

      <div style={{margin:'20px', border:'1px solid black', padding:'20px'}}>
        <h3>Practiced Adding Custom Column with menu in DataGrid (showcase image below) </h3>

        <img src='./practiced_custom_column_with_menu.png' style={{border:'1px solid red'}}/>
      </div>

    </>

  )
}

export default App