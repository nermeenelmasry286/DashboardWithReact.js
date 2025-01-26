import React from 'react'
import { StyledTableContainer, StyledTable } from "../Custom/MainTable";
export function ProductList() {
  return (
    
    <StyledTableContainer>
    <StyledTable responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        
        
      </tbody>
    </StyledTable>
  </StyledTableContainer>
);
}