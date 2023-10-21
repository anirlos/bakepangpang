import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "http://43.201.30.126:8080"; // 변수 값 설정
export const GET_PRODUCT_API = `${BASE_URL}/api/product/all`; // 특정 패스파라미터 앞에 해당 변수 넣어 API 주소 세팅
export const GET_PRODUCT_CATEGORY_API = `${BASE_URL}/api/product/category`;
//http://43.201.30.126:8080
