import Layout from "./components/Layout";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<Layout />
		</Router>
	);
}

export default App;
