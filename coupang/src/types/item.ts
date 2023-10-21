export interface Product {
  id: number;
  name: string;
  category: {
    categoryId: number;
    categoryName: string;
  };
  img1: string;
  img2: string;
  img3: string;
  price: number;
  stockQuantity: number;
  registerDate: string;
  fieldPredictedSaleEndDate: string;
  click: number;
}
