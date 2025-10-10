import Header from "../../components/Header/Header";
import "./MainLayout.css";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
            <main className>
                {children}
            </main>
        </>
    );
}
export default MainLayout;