import React from 'react';
import styled from 'styled-components';

const CategoryFilter = () => {
	return (
		<div>
			<FilterWrap>
				<FilterContainer>
					<div className="filter bar">낮은가격순</div>
					<div className="filter bar">높은가격순</div>
					<div className="filter bar">판매량순</div>
					<div className="filter">최신순</div>
				</FilterContainer>
			</FilterWrap>
		</div>
	);
};

export default CategoryFilter;

const FilterWrap = styled.div`
	/* margin: auto; */

	height: 1.6rem;
	background-color: #fafafa;
	display: flex;
	align-items: center;
	margin-top: 30px;
`;

const FilterContainer = styled.div`
	display: flex;
	gap: 10px;
	cursor: pointer;
	> .filter {
		color: black;
		font-size: 0.8rem;
		margin-left: 10px;
		padding-right: 10px;
	}
	.bar {
		border-right: 1px solid #d2d0d0;
	}
`;
