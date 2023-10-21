//fetchCartData.tsx

import axios from "axios";

const fetchCartData = async () => {
  try {
    const response = await axios.get(
      "http://43.201.30.126:8080/api/users/carts"
    ); // API_ENDPOINT_URL을 실제 API의 URL로 대체
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchCartData;
