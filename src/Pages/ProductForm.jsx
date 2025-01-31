import React, { useEffect } from 'react';
import { GeneralProductInfo } from '../components/AddProductComponents/GeneralProductInfo';
import { PriceAndStock } from '../components/AddProductComponents/PriceAndStock';
import { UploadImgForm } from '../components/AddProductComponents/UploadImg';
import { AddCategoryForm } from '../components/AddProductComponents/AddCategory';
import { StyledButton } from '../Custom/MainButton';
import { FaCheck } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/style.module.css';
import { createProduct ,getProductById,updateProduct} from '../Api/productApi';  
import { useParams } from 'react-router-dom';

export function ProductForm() {
  const {id}= useParams();
 
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
    img: imagePreview ,
    category: categoryName

  };

  const navigate = useNavigate();
  useEffect(() => {  
    const getProduct = async () => {
     if(id!=0){
      const response= await getProductById(id);
      const data = response.data;
      
      setProductDetails({
        name: data.name,
        description: data.description,
        gender: data.gender,
        size: data.size
      });

      setPriceDetails({
        basePrice: data.basePrice,
        stock: data.stock,
        discount: data.discount,
        discountType: data.discountType
      });

      setImagePreview(data.img);
      setCategoryName(data.category);
    }

    }
    getProduct();
   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id != 0) {
      await updateProduct(id, finalProductDetails); 
      navigate('/Products');
    } else {
      await createProduct(finalProductDetails);
      navigate('/Products');
    }
  };

  return (
    <main className={`container ${styles.customMargin}`}>
      <header style={{ margin: '2px' }}>
        <h3 className={`${styles.mainHeader}`}>{id==0?'Add New Product':'Edit Product'}</h3>
      </header>
      <Form onSubmit={handleSubmit}>
        <StyledButton type='submit'>
          <FaCheck /> {id==0?'Add Product':'Edit Product'}
        </StyledButton>
        <div className="row w-100">
          <div className="col-12 col-md-6">
            <GeneralProductInfo productDetails={productDetails} handleInputChange={handleProductChange} />
            <PriceAndStock productDetails={priceDetails} handleInputChange={handlePriceChange} />
          </div>
          <div className="col-12 col-md-6">
            <UploadImgForm imagePreview={imagePreview} handleImageChange={handleImageChange} />
            <AddCategoryForm 
              categoryName={categoryName} 
            
              handleAddCategory={handleAddCategory} 
            />
          </div>
        </div>
      </Form>
    </main>
  );
}
