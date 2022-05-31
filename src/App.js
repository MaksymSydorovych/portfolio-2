import Layout from "./components/Layout";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/style.scss";

function App() {
	return (
		<Router>
			<Layout />
		</Router>
	);
}

export default App;
