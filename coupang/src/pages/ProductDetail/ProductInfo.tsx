import React, { useState, useEffect } from "react";
import {
  Container,
  ProductInfoBox,
  ProductImage,
  ProductName,
  ProductPrice,
  QuantityCounter,
  ButtonWrapper,
  ProductTextWapper,
} from "./ProductInfo.styled";
import { useDispatch } from "react-redux";
import { Product } from "../../redux/slice/productSlice";
import { addToCart } from "../../redux/slice/cartSlice"
import AddToCartButton from "./AddToCartButton";
import AddToOrderButton from "./AddToOrderButton";
import { fetchProductDetails, postAddToCart } from "../../api/productApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserData, postOrder } from '../../api/order';

type ProductType = {
  id: number;
  img: string;
  productName: string;
  amount: number;
  price: number;
};

const ProductInfo: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { productName } = useParams<{ productName: string }>();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = productName
          ? await fetchProductDetails(productName)
          : null;

        if (data) {
          // data의 유효성 검사 추가합니다.
          setProduct({
            id: data.id,
            img: data.img1,
            productName: data.name,
            amount: data.stockQuantity,
            price: data.price,
          });
        } else {
          console.error("Received data is null or undefined");
        }
      } catch (error) {
        console.error(
          "Error fetching product details from the component:",
          error
        );
      }
    };

    getProductDetails();
  }, [productName]);

  useEffect(() => {
    if (product) {
      // 제품 정보가 설정되었을 때 전체 가격 초기화
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (product) {
      setTotalPrice(product.price * newQuantity);
    }
  };
  const handleAddToCartClick = async () => {
    if (!product) return;

    try {
      // API 호출하여 장바구니에 제품을 추가합니다.
      const response = await postAddToCart(product, quantity);

      // Redux dispatch를 통해 상태를 업데이트합니다.
      const addedProduct: Product = {
        id: product.id,
        productName: product.productName,
        price: product.price,
        amount: quantity,
        cartItems: [], // 이 필드에 대한 추가 정보가 필요합니다.
      };

      dispatch(addToCart(addedProduct));
      navigate("/Cart");

      console.log("장바구니에 제품 추가:", addedProduct);
    } catch (error) {
      console.error("장바구니에 추가하는 도중 오류 발생:", error);
    }
  };

  const handleAddToOrderClick = async() => {
    //바로 구매 로직
    if (product) {
      try {
        // 1. 현재 로그인한 유저의 정보를 가져옵니다.
        const userData = await getUserData();
  
        // 2. 사용자 정보와 함께 구매 요청을 수행합니다.
        const response = await postOrder([product.id]); // 예를 들어 product.id가 상품의 ID라고 가정합니다.
        
        if (response.success) { // 응답 형태에 따라 이 조건문을 수정할 수 있습니다.
          console.log("주문 성공!");
          navigate("/order");
        } else {
          console.log("주문 실패:", response.message); 
        }
      } catch (error) {
        console.error("주문 중 오류 발생:", error);
      }
    }
  };

  return (
    <Container>
      {product?.img ? <ProductImage src={product.img} alt="Product" /> : null}
      <ProductInfoBox>
        <ProductTextWapper>
          <ProductName>{product?.productName}</ProductName>
          <ProductPrice>{totalPrice}원</ProductPrice>
        </ProductTextWapper>

        <QuantityCounter>
          <button onClick={() => setQuantity((q) => (q > 0 ? q - 1 : 0))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </QuantityCounter>

        <ButtonWrapper>
          <AddToCartButton onClick={handleAddToCartClick} />
          <AddToOrderButton onClick={handleAddToOrderClick} />
        </ButtonWrapper>
      </ProductInfoBox>
    </Container>
  );
};
export default ProductInfo;
