import React from 'react';
import mycoupang from '../../assets/headerImg/myPage.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyCoupang = () => {
	return (
		<>
			<MypageBox>
				<IconWrapper>
					<Link to={'/userinfo'}>
						<img src={mycoupang} />
						<p>마이페이지</p>
					</Link>
				</IconWrapper>
				<MypageWrap className="mypageWrap">
					<MypageDrop>
						<Contents>
							<li>
								<Link to={'/user'}>주문목록</Link>
							</li>
							<li>
								<a href="#">취소/반품</a>
							</li>
							<li>
								<a href="#">찜 리스트</a>
							</li>
						</Contents>
					</MypageDrop>
				</MypageWrap>
			</MypageBox>
		</>
	);
};

export default MyCoupang;

const MypageBox = styled.div`
	position: relative;
	display: inline-block;
	cursor: pointer;
	margin-left: 10px;

	&:hover {
		.mypageWrap {
			display: block;
		}
	}
`;

const IconWrapper = styled.div`
	/* position: absolute; */

	img {
		width: 50px;
		height: 30px;
		padding-bottom: 5px;
		@media screen and (max-width: 768px) {
			width: 30px;
			height: 20px;
			margin-left: 0px;
			margin: 0;
		}
	}
	p {
		font-size: 0.6rem;
		text-align: center;
		@media screen and (max-width: 768px) {
			font-size: 0.3rem;
		}
	}
`;

const MypageWrap = styled.div`
	display: none;
	position: absolute;

	top: 100%;
	left: 0%;
	z-index: 1;
`;
const MypageDrop = styled.div`
	position: fixed;
	background-color: #ffffffef;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
		rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Contents = styled.ul`
	width: 60px;
	height: 60px;

	border-radius: 3%;
	padding: 10px;
	li {
		list-style: none;
		opacity: 0.8;
		margin-bottom: 5px;
		text-align: left;
		img {
			width: 15px;
		}
		a {
			text-decoration: none;
			color: #545353;
			font-size: 12px;
			margin-left: 5px;
			margin-bottom: 10px;
		}
		&:hover {
			transition: 0;
			text-decoration: underline;
			font-weight: bold;
			opacity: 1;
		}
	}
`;
