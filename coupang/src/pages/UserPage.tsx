import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import PaymentManagement from './PaymentManagement';
import SalesListPage from './SalesListPage';
import PurchaseListPage from './PurchaseListPage';
import CartPage from './CartPage';
import NotFound from './NotFound';
import Login from '../pages/LoginPage/LogIn';
import LogoutButton from '../pages/LoginPage/LogoutButton';

const Container = styled.div`
	display: grid;
	grid-template-rows: auto 2fr auto;
	grid-template-columns: 200px 1fr;
	height: 100vh;
	margin-left: 10rem;

	grid-template:
		'ProfileImageBar Sidebar Sidebar' 0px
		'MenuBar content content' 280px
		'MenuBar content content' 1fr
		/ 200px 3fr 1fr;

	grid-template-areas:
		'ProfileImageBar Sidebar Sidebar'
		'MenuBar content content'
		'MenuBar content content ';
`;

const ProfileImageBar = styled.aside`
	grid-row: 1 / 4;
	grid-column: 1 / 1;
	background-color: #286db4;
	color: #fff;
	padding: 1.5rem;

	margin-top: 11rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 150px;
`;

const ProfileImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	//   margin-bottom: 1rem;
	//   margin-top: 1rem;
`;

const MenuBar = styled.aside`
	grid-row: 3 /4;
	grid-column: 1 / 2;
	background-color: #f9f9f9;
	color: black;
	padding: 1rem;
	margin-top: 5rem;
`;

const Sidebar = styled.div`
	grid-row: 2 / 4;
	grid-column: 2 / 3;
	// background-color: #82bce2;
	color: #fff;
	padding-left: 0.1rem;
	margin-top: 11rem;
	width: 110%;
	// height: 150px;
`;

const Content = styled.main`
	grid-row: 3 / 4;
	grid-column: 2 / 2;
	background-color: #fff;
	padding: 1rem;
	margin-top: 6rem;
	margin-left: 1rem;
	text-align: left;
	width: 100%;
`;

const ListItem = styled.div<{ addUnderline?: boolean }>`
	margin-bottom: 10px;
	${(props) =>
		props.addUnderline &&
		`
      border-bottom: 1px solid #ccc;
      padding-bottom: 2rem;
    `}

	// a 태그 스타일 추가
  a {
		text-decoration: none;
		color: inherit;
	}
`;

const SideBarInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	align-items: center;
	gap: 0.2rem;
	flex: 1;
	margin-right: 0.5rem;
	background-color: #ffff;
	font-size: 22.5px;
`;
const SideBarInfoItem = styled.div`
	cursor: pointer;
	color: white;
	text-align: left;
	// margin-right: 2px;
	// margin: 0px 0px 0px 20px;
	// border-right: 2px solid white;

	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	padding: 1rem;
	background-color: #82bce2;

	&:last-child {
		border-right: none;
	}

	.large-number {
		font-size: 3rem;
	}
`;
const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;

	&:hover {
		color: blue;
	}
	&.active {
		color: blue;
	}
`;

// const handleLoginClick = () => {

// };

// UserPage 컴포넌트
const UserPage: React.FC = () => {
	const profileImageUrl = 'https://via.placeholder.com/100';
	const navigate = useNavigate();

	const handleLoginClick = () => {
		const token = localStorage.getItem('token');

		if (token) {
			// 토큰이 있으면 이미 로그인된 상태
			alert('로그인 상태입니다.');
		} else {
			console.log('사용자가 로그인되지 않았습니다.');
			navigate('/login');
		}
	};

	const handleLogout = () => {
		console.log('로그아웃 되었습니다.');
	};

	return (
		<Container>
			<ProfileImageBar>
				<ProfileImage src={profileImageUrl} alt="프로필 이미지" />
				<h2>UserName 님</h2>
			</ProfileImageBar>
			<MenuBar>
				<ListItem>
					<h3>My 쇼핑</h3>
				</ListItem>
				<ListItem>
					<StyledLink to="cart">장바구니 목록</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink to="sales">판매 목록</StyledLink>
				</ListItem>
				<ListItem addUnderline>
					<StyledLink to="order">구매 목록</StyledLink>
				</ListItem>
				<ListItem>
					<h3>My 정보</h3>
				</ListItem>
				<ListItem>
					<StyledLink to="userinfo">개인정보확인</StyledLink>
				</ListItem>
				<ListItem addUnderline>
					<StyledLink to="bakepay">결제수단·페이관리</StyledLink>
				</ListItem>
				<ListItem>
					<button onClick={handleLoginClick}>로그인</button>
					<LogoutButton onLogout={handleLogout} />
				</ListItem>
			</MenuBar>
			<Sidebar>
				<SideBarInfo>
					<SideBarInfoItem>
						<h3>판매</h3>
						<div>
							<span className="large-number">0</span>건
						</div>
					</SideBarInfoItem>
					<SideBarInfoItem>
						<h3>구매</h3>
						<div>
							<span className="large-number">0</span>건
						</div>
					</SideBarInfoItem>
					<SideBarInfoItem>
						<h3>할인쿠폰</h3>
						<div>
							<span className="large-number">0</span>건
						</div>
					</SideBarInfoItem>
					<SideBarInfoItem>
						<h3>베이크 머니</h3>
						<div>
							<span className="large-number">0</span>원
						</div>
					</SideBarInfoItem>
				</SideBarInfo>
			</Sidebar>

			<Content>
				<Routes>
					<Route path="userinfo" element={<UserInfo />} />
					<Route path="bakepay" element={<PaymentManagement />} />
					<Route path="order" element={<PurchaseListPage />} />
					<Route path="sales" element={<SalesListPage />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Content>
		</Container>
	);
};

export default UserPage;
