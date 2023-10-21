import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Bread from './pages/Category/Bread';
import Jam from './pages/Category/Jam';
import Cake from './pages/Category/Cake';
import LoginPage from './pages/LoginPage/LogIn';
import SignupPage from './pages/RegisterPage/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import InventoryList from './pages/Inventory/InventoryList';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import OrderResult from './pages/Order/OrderResult';
import UserInfo from './pages/UserInfo';
import User from './pages/User';
import LogoutButton from './pages/LoginPage/LogoutButton';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/product/detail/:productName"
						element={<ProductDetail />}
					/>
					<Route path="/Bread" element={<Bread />} />
					<Route path="/Jam" element={<Jam />} />
					<Route path="/Cake" element={<Cake />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/Inventory" element={<InventoryList />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order" element={<Order />} />
					<Route path="/order/result" element={<OrderResult />} />
					<Route path="/order/result" element={<OrderResult />} />
					<Route path="/userinfo" element={<UserInfo />} />
					<Route path="/user" element={<User />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
