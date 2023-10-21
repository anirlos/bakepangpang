import React, { FC } from "react";
import { UserType } from "../../types/user";
import styled from "styled-components";
import * as st from "./OrderInfo.style";

type UserProps = {
  userData: UserType;
};

const ShipInfo: FC<UserProps> = ({ userData }) => {
  return (
    <st.Wrap>
      <st.Title>받는사람정보</st.Title>
      <div className="table-div">
        <ExtendedTable>
          <tbody>
            <tr>
              <th>이름</th>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>{userData.phoneNumber}</td>
            </tr>
            <tr>
              <th>배송주소</th>
              <td>{userData.address}</td>
            </tr>
            <tr>
              <th>배송 요청사항</th>
              <td>
                <select name="shiprequest" id="shiprequest">
                  <option value="문 앞">문 앞</option>
                  <option value="직접 받고 부재 시 문 앞">
                    직접 받고 부재 시 문 앞
                  </option>
                  <option value="경비실">경비실</option>
                  <option value="택배함">택배함</option>
                </select>
              </td>
            </tr>
          </tbody>
        </ExtendedTable>
      </div>
    </st.Wrap>
  );
};

export default ShipInfo;

const ExtendedTable = styled(st.Table)`
  select {
    padding: 3px;
  }
`;
