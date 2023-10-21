import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #373b3f;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-top: 2px solid #cecece;
  font-size: 0.875rem;
  tr {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  th {
    width: 120px;
    font-weight: bold;
    text-align: right;
    padding: 14px 10px;
    border-right: 1px solid #ebebeb;
    background-color: #f4f4f4;
  }
  td {
    text-align: left;
    padding: 14px 10px;
  }
`;

export { Wrap, Title, Table };
