import styled from "styled-components";
import 평점 from "../../assets/mainImg/평점.png";
import 로켓 from "../../assets/mainImg/로켓배송.png";
import ItemCard from "./ItemCard";

interface propsType {
  // id: number;
  // name: string;
  // price: number | string;

  // categoryName: string;
  // img1: string;
  sort: any;
  products: any;
  search: any;
}

const ItemList = (props: propsType) => {
  const searched = props.products.filter((item: { name: string }) =>
    item.name.includes(props.search)
  );

  console.log(props);

  return (
    <>
      {/* 검색 */}
      {props.sort === undefined &&
        searched.map((item: any) => <ItemCard {...item} />)}

      {/* 낮은가격순 */}
      {props.sort === "lowPrice" &&
        props.products
          .sort(function compare(a: any, b: any) {
            return a.price - b.price;
          })
          .filter((item: { name: string }) => item.name.includes(props.search))
          .map((product: any) => <ItemCard {...product} />)}

      {/* 높은가격순 */}
      {props.sort === "highPrice" &&
        props.products
          .sort(function compare(a: any, b: any) {
            return b.price - a.price;
          })
          .filter((item: { name: string }) => item.name.includes(props.search))
          .map((product: any) => <ItemCard {...product} />)}

      {/* 최신순 */}
      {props.sort === "new" &&
        props.products
          .sort(function (
            a: { registerDate: Date },
            b: { registerDate: Date }
          ) {
            return (
              +new Date(b.registerDate).getTime() -
              +new Date(a.registerDate).getTime()
            );
          })
          .filter((item: { name: string }) => item.name.includes(props.search))
          .map((product: any) => <ItemCard {...product} />)}

      {/* 조회수 */}
      {props.sort === "click" &&
        props.products
          .sort(function compare(a: any, b: any) {
            return b.click - a.click;
          })
          .filter((item: { name: string }) => item.name.includes(props.search))
          .map((product: any) => <ItemCard {...product} />)}

      {/* {검색에러} */}
    </>
  );
};

export default ItemList;
