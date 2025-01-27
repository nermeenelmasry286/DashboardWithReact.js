import React from 'react'
import { StyledTableContainer, StyledTable } from "../Custom/MainTable";
import { FaStar } from "react-icons/fa6";
import { FaEdit,FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export function ProductList() {
  return (
    
    <StyledTableContainer>
    <StyledTable responsive style={{alignItems:'center'}} >
      <thead >
        <tr >
          <th>id</th>
          <th>product</th>
          <th>category</th>
          <th>price</th>
          <th>stock</th>
          <th>rating</th>
          <th>order</th>
          <th>sales</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody >

        
        <tr>
          <td >1</td>
           <td> 
            <div className="d-flex flex-column align-items-center">
            <img
                src="/images/1.jpg"
                alt="Jacket"
                style={{ width: "50px", height: "50px"}}
              />
               <p>Jacket</p>


            </div>
            
            </td>
           <td>men's wears</td>
           <td>20$</td>
           <td>170</td>
           <td><div style={{ color: "yellow", fontSize: "1.5rem",display:'flex',justifyContent:'center',alignItems:'center'}}>
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                         </div></td>
           <td>23</td>
           <td>10%</td>
           <td><div style={{ fontSize: "1.5rem",display:'flex',gap:'10px',justifyContent:'center',alignItems:'center' }}><FaEdit style={{color:'#78ca78'}} /><FaEye style={{color:'rgb(108 180 202)'}} /><MdDelete style={{color:'rgb(255 69 69)'}}/></div></td>
        </tr>
        
        
        
      </tbody>
    </StyledTable>
  </StyledTableContainer>
);
}