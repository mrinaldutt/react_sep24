import { useNavigate } from "react-router-dom";
export default function Title(props) {
    const navigate = useNavigate();

    const goToAddProduct = () => {
        navigate("/addproduct");
    }

    console.log("Title functional component props is", props);
    return <>
        <h1>Title Functional component</h1>
        <button className="btn btn-primary" onClick={goToAddProduct}>Navigate to Add Product Page</button>
    </>
}