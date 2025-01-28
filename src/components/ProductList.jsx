import React from 'react'
import { StyledTableContainer, StyledTable } from "../Custom/MainTable";
import { FaStar } from "react-icons/fa6";
import { FaEdit,FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import{getProducts} from '../Api/productApi'

export  function ProductList() {

  
  const [product,setProduct] = useState([]);
  
   
  useEffect(()=>{

    getProducts().then((response)=>{
      setProduct(response.data)
  
    })

  },[])
  
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

        
        {
          product.map((product)=>(
            <tr key={product.id}>
          <td >{product.id}</td>
           <td> 
            <div className="d-flex flex-column align-items-center">
            <img
                src="/images/1.jpg"
                alt="Jacket"
                style={{ width: "50px", height: "50px"}}
              />
               <p>{product.name}</p>


            </div>
            
            </td>
           <td>{product.category}</td>
           <td>{product.price}$</td>
           <td>{product.stock}</td>
           {/* <td><div style={{ color: "yellow", fontSize: "1.5rem",display:'flex',justifyContent:'center',alignItems:'center'}}>
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                         </div></td> */}
          <td>{product.rating}</td>             
           <td>{product.order}</td>
           <td>{product.sales}</td>
           <td>
            <div style={{ fontSize: "1.5rem",display:'flex',gap:'10px',justifyContent:'center',alignItems:'center' }}>
            <Link to={`${product.id}/edit`}><FaEdit style={{color:'#78ca78'}} /></Link>
            <Link to={`${product.id}`}><FaEye style={{color:'rgb(108 180 202)'}} /></Link>
            <MdDelete style={{color:'rgb(255 69 69)'}}/>
            </div>
            </td>
        </tr>
        

          ))
        }
        
        
        
      </tbody>
    </StyledTable>
  </StyledTableContainer>
);
}