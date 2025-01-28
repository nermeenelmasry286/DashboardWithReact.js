import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { StyledTableContainer } from "../Custom/MainTable";
import { StyledButton } from "../Custom/MainButton";
import { FaStar } from "react-icons/fa6";
import { useState,useEffect } from 'react';
import{getProductById} from '../Api/productApi'
import { Link ,useParams} from 'react-router-dom';

export function ProductDetails() {
  const {id}= useParams();
  const [product,setProduct] = useState(null);
  useEffect(
    ()=>{
      getProductById(id).then((response=>setProduct(response.data)))
    },[])
  
  return (
    <main className="container" style={{marginTop:'90px'}}>
      <h3 style={{ color: "#1091d3", textAlign: "center", marginTop: "30px" ,marginBottom:'30px'}}>
        Product Details
      </h3>

      <StyledTableContainer >
        <Container>
          <Row className="align-items-center">
            {/* Left Section */}
            <Col xs={12} md={6} className="text-center">
              <Image
                src="/images/1.jpg"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                }}
                alt="Product"
              />
            </Col>

            {/* Right Section */}
            <Col xs={12} md={6} className="text-center text-md-start mt-3">
              <h2>Product Name:{product?.name}</h2>
              <p>{product?.description}</p>
              <h3>Product Price:{product?.price}</h3>
              <h3>Product Quantity:{product?.stock}</h3>
              <div style={{ color: "yellow", fontSize: "1.5rem" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
               <h4>Size:{product?.size}</h4>
               <h4>Gender:{product?.gender}</h4>
               <h4>Category:{product?.category}</h4>
             <Link to={'/Products'}><StyledButton className="mt-3">Back to Products</StyledButton></Link> 
            </Col>

            
           
          </Row>
        </Container>
      </StyledTableContainer>
    </main>
  );
}
