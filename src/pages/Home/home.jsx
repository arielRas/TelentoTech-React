import {ProductList} from "../../containers/ProductList/Productlist";
import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import "./home.css";

export const Home = () => {
    return(
        <MainLayout>
            <div className="home-central-section-container">
                {/* <img src="../../public/img/common/home-central-image.png" alt="" /> */}
            </div>
            <ProductList/>
        </MainLayout>
    );
}
export default Home;