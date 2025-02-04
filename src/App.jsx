import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import Footer from './components/footer/Footer'
import './App.css'
import Mylinks from './components/mylinks/Mylinks'
import About from './components/about/About'
// import Premium from './components/premium/Premium'
import Signup from './components/signup/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isUser, setIsUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
		<Router>
			<>
				<Navbar
					isUser={isUser}
					setIsUser={setIsUser}
					showLogin={showLogin}
					setShowLogin={setShowLogin}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Homepage isUser={isUser} setShowLogin={setShowLogin} />
								<About />
							</>
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/mylinks" element={<Mylinks />} />
					<Route path="/premium" element={<Premium />} />
					{/* <Route
						path="/signup"
						element={
							<Signup
								onClose={() => setShowSignup(false)}
								setShowLogin={setShowLogin}
								setIsUser={setIsUser}
							/>
						}
					/> */}
				</Routes>
				<Footer />
			</>
		</Router>
	);
}

export default App
