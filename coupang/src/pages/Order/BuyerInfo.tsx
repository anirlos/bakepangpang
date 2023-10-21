import React, { FC } from "react";
import { UserType } from "../../types/user";
import * as st from "./OrderInfo.style";

type UserProps = {
  userData: UserType;
};

const BuyerInfo: FC<UserProps> = ({ userData }) => {
  return (
    <st.Wrap>
      <st.Title>구매자정보</st.Title>
      <st.Table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>{userData.name}</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>{userData.phoneNumber}</td>
          </tr>
        </tbody>
      </st.Table>
    </st.Wrap>
  );
};

export default BuyerInfo;
