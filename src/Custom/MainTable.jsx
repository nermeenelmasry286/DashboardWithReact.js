import styled from "styled-components";
import Table from "react-bootstrap/Table";

export const StyledTableContainer = styled.div`
  padding: 20px;
  background: #f8f9fd;
  border-radius: 15px;
  box-shadow: rgba(133, 189, 215, 0.88) 0px 10px 10px -8px;
  border: 2px solid #fff;
  margin: 15px auto;
  max-width: 100%;
`;

export const StyledTable = styled(Table)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(133, 189, 215, 0.88) 0px 8px 10px -8px;

  thead {
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;

    th {
      font-weight: bold;
      text-align: center;
      padding: 12px;
      font-size: 16px;
    }
  }

  tbody {
    tr {
      &:nth-child(odd) {
        background: #f4f7fb;
      }

      &:nth-child(even) {
        background: #ffffff;
      }

      &:hover {
        background: rgba(16, 137, 211, 0.1);
        cursor: pointer;
      }

      td {
        text-align: center;
        padding: 10px;
        font-size: 16px;
        color: #333;
      }
    }
  }
`;
