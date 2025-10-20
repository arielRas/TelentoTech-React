import ContextsProvider from "./ContextsProvider";
import RoutesProvider from "./RoutesProvider";

const AppProvider = () => {
    return(
        <ContextsProvider>
            <RoutesProvider />
        </ContextsProvider>
    );
};
export default AppProvider;