import { Link, Outlet } from 'react-router-dom';
function Nav() {
    return (<>
        <nav>
            <Link to="/title">Title</Link>|
            <Link to="/addproduct">Add Product</Link>|
            <Link to="/productsclass">Product Class</Link>|
            <Link to="/productsfunctional">Product Functional</Link>|
        </nav>
        <div>
            <Outlet />
        </div>
    </>);
}

export default Nav;