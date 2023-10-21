// UserInfo.tsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

// declare global {
//   interface Window {
//     daum: any;
//   }
// }

const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;
  // margin-top: 12rem;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// const FlexContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   margin-bottom: 10px;
//   gap: 20px;
// `;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;

const Table = styled.table`
  width: 100%;
`;

const LabelCell = styled.td`
  text-align: left;
  //   padding-left: 1rem;
`;

const InputCell = styled.td`
  text-align: center;

  input {
    width: 70%;
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  margin: 0 5px;
  margin-bottom: 20px;
  margin-left: 3rem;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0077b6;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005694;
  }
`;

const RightAlignedButton = styled(Button)`
  margin-left: 62%;
`;

// const ErrorText = styled.p`
//   color: red;
//   margin-bottom: 10px;
// `;

// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   width: 300px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 5px;
// `;

type UserInfoType = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  zipCode: string;
};

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<UserInfoType>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    detailedAddress: "",
    zipCode: "",
  });
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const detailAddressRef = useRef<HTMLInputElement>(null);
  // const handleAddressSearch = () => {
  //   if (window.daum && window.daum.Postcode) {
  //     new window.daum.Postcode({
  //       oncomplete: function (data) {
  //         setUser((prev) => ({
  //           ...prev,
  //           address: data.address,
  //           zipCode: data.zonecode,
  //         }));
  //         if (detailAddressRef.current) {
  //           detailAddressRef.current.focus();
  //         }
  //       },
  //     }).open();
  //   } else {
  //     console.error("Daum Postcode API is not loaded.");
  //   }
  // };
  const fetchUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token is not available in localStorage.");
      return;
    }

    try {
      const response = await axios.get(
        "http://43.201.30.126:8080/api/user/myPage/userInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 헤더에 넣어줍니다.
          },
        }
      );
      const { name, email, address, phoneNumber } = response.data;

      setUser((prev) => ({
        ...prev,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
      }));
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  // useEffect(() => {
  //   // 주소 API 스크립트 동적 로딩
  //   const script = document.createElement("script");
  //   script.src =
  //     "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  //   script.async = true;
  //   document.head.appendChild(script);
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  const handleCancel = () => {
    window.location.href = "/user/sales";
  };

  const handleWithdrawal = () => {
    const isConfirmed = window.confirm("정말 탈퇴하시겠습니까?");
    if (isConfirmed) {
      // Call backend API to withdraw
    } else {
      window.alert("취소 되었습니다.");
    }
  };

  // const [profileImage, setProfileImage] = useState<File | null>(null);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setProfileImage(e.target.files[0]);
  //   }
  // };
  return (
    <Container>
      <h2>개인정보 확인</h2>
      <Table>
        <tbody>
          <tr>
            <LabelCell>name</LabelCell>
            <InputCell>
              <Input defaultValue={user.name} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>이메일</LabelCell>
            <InputCell>
              <Input defaultValue={user.email} disabled />
            </InputCell>
          </tr>
          <tr>
            <LabelCell>전화번호</LabelCell>
            <InputCell>
              <Input defaultValue={user.phoneNumber} disabled />
            </InputCell>
          </tr>

          <tr>
            <LabelCell>주소</LabelCell>
            <InputCell>
              <Input defaultValue={user.address} disabled />
            </InputCell>
            {/* <InputCell>
              <Button
                onClick={handleAddressSearch}
                style={{ marginLeft: "-20px" }}
              >
                변경
              </Button>
            </InputCell> */}
          </tr>
        </tbody>
      </Table>

      <Button onClick={handleCancel}>취소</Button>
      <RightAlignedButton onClick={handleWithdrawal}>
        회원 탈퇴
      </RightAlignedButton>
    </Container>
  );
};

export default UserInfo;
