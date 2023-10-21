import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
    id: number;
    productName: string;
    price: number;
    amount: number;
    cartItems: any[]; 
};

interface ProductState {
    productInfo: Product | {}; // Product 타입 또는 빈 객체를 허용
    cart: Product[];
}

const initialState: ProductState = {
    productInfo: {},
    cart: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.cart.find(
                item => item.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.amount += action.payload.amount;
                existingProduct.price += action.payload.price;
            } else {
                state.cart.push(action.payload);
            }
        },
        setProductInfo: (state, action: PayloadAction<Product>) => {
            state.productInfo = action.payload;
        }
    }
});

export const { addToCart, setProductInfo } = productSlice.actions;
export default productSlice.reducer;
