import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { FaStar, FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/Slices/productsSlice";
import styles from "../styles/ProductList.module.css"; 

export function ProductList({ searchQuery }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <Table responsive className={styles.styledTable}>
        <thead>
          <tr>
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
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={product.img}
                    alt="product"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p>{product.name}</p>
                </div>
              </td>
              <td>{product.category}</td>
              <td>{product.price}$</td>
              <td>{product.stock}</td>
              <td>{product.rating}</td>
              <td>{product.order}</td>
              <td>{product.sales}</td>
              <td>
                <div className={styles.actions}>
                  <Link to={`${product.id}/edit`}>
                    <FaEdit style={{ color: "#78ca78" }} />
                  </Link>
                  <Link to={`${product.id}`}>
                    <FaEye style={{ color: "rgb(108 180 202)" }} />
                  </Link>
                  <MdDelete
                    style={{ color: "rgb(255 69 69)" }}
                    onClick={() => deleteHandler(product.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
