import axiosClient from "./index";

export const getUserData = async () => {
  const response = await axiosClient.get("/user/myPage/userInfo");
  return response.data;
};

export const postOrder = async (cartProductIdList: number[]) => {
  const response = await axiosClient.post("/users/payments", {
    cartProductIdList,
  });
  return response.data;
};
