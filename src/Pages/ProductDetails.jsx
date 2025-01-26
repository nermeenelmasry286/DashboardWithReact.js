import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { StyledTableContainer } from "../Custom/MainTable";
import { StyledButton } from "../Custom/MainButton";
import { FaStar } from "react-icons/fa6";

export function ProductDetails() {
  return (
    <main className="container">
      <h3 style={{ color: "#1091d3", textAlign: "center", marginTop: "15px" }}>
        Product Details
      </h3>

      <StyledTableContainer >
        <Container>
          <Row className="align-items-center">
            {/* Left Section */}
            <Col xs={12} md={6} className="text-center">
              <Image
                src="../../public/images/Capture.PNG"
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
              <h2>Product Name:</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ipsam saepe natus libero velit neque optio, non eius itaque excepturi soluta, earum eveniet, distinctio dolor. Nobis provident numquam molestias. Voluptatem!
              </p>
              <h3>Product Price:</h3>
              <h3>Product Quantity:</h3>
              <div style={{ color: "yellow", fontSize: "1.5rem" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
               <h4>Size:</h4>
               <h4>Gender:</h4>
               <h4>Category:</h4>
              <StyledButton className="mt-3">Back to Products</StyledButton>
            </Col>

            
           
          </Row>
        </Container>
      </StyledTableContainer>
    </main>
  );
}
