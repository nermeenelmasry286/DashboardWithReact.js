import React, { useEffect } from 'react';
import { GeneralProductInfo } from '../components/AddProductComponents/GeneralProductInfo';
import { PriceAndStock } from '../components/AddProductComponents/PriceAndStock';
import { UploadImgForm } from '../components/AddProductComponents/UploadImg';
import { AddCategoryForm } from '../components/AddProductComponents/AddCategory';
import { StyledButton } from '../Custom/MainButton';
import { FaCheck } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductById, createProduct, updateProduct } from '../store/Slices/productsSlice';

export function ProductForm() {
  const { id } = useParams();
  const product = useSelector((state) => selectProductById(state, id));
  const dispatch = useDispatch();

  const [productDetails, setProductDetails] = React.useState({
    name: '',
    description: '',
    gender: '',
    size: ''
  });
  const [priceDetails, setPriceDetails] = React.useState({
    basePrice: 0,
    stock: 0,
    discount: 0,
    discountType: ''
  });
  const [imagePreview, setImagePreview] = React.useState(null);
  const [categoryName, setCategoryName] = React.useState('');

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceDetails({ ...priceDetails, [name]: value });
  };

  const handleAddCategory = (e) => {
    const { value } = e.target;
    setCategoryName(value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const finalProductDetails = { 
    ...productDetails, 
    ...priceDetails, 
    img: imagePreview,
    category: categoryName
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (id && product) {
      setProductDetails({
        name: product.name,
        description: product.description,
        gender: product.gender,
        size: product.size
      });

      setPriceDetails({
        basePrice: product.basePrice,
        stock: product.stock,
        discount: product.discount,
        discountType: product.discountType
      });

      setImagePreview(product.img);
      setCategoryName(product.category);
    }
  }, [id, product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await dispatch(updateProduct({ id, product: finalProductDetails }));
      navigate('/Products');
    } else {
      await dispatch(createProduct(finalProductDetails));
      navigate('/Products');
    }
  };

  return (
    <main className={`container ${styles.customMargin}`}>
      <header style={{ margin: '2px' }}>
        <h3 className={`${styles.mainHeader}`}>{id ? 'Edit Product' : 'Add New Product'}</h3>
      </header>
      <Form onSubmit={handleSubmit}>
        <div className="row w-100 ms-0">
          <div className="col-12 col-md-6 mx-0">
            <GeneralProductInfo productDetails={productDetails} handleInputChange={handleProductChange} />
            <PriceAndStock productDetails={priceDetails} handleInputChange={handlePriceChange} />
          </div>
          <div className="col-12 col-md-6 mx-0">
            <UploadImgForm imagePreview={imagePreview} handleImageChange={handleImageChange} />
            <AddCategoryForm 
              categoryName={categoryName} 
              handleAddCategory={handleAddCategory} 
            />
            <StyledButton type='submit' style={{marginLeft:'30px'}}>
              <FaCheck /> {id ? 'Edit Product' : 'Add Product'}
            </StyledButton>
          </div>
        </div>
      </Form>
    </main>
  );
}
