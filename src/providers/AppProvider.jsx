import { ContextsProvider } from "./ContextsProvider";
import { RoutesProvider } from "./RoutesProvider";

export const AppProvider = () => {
    return(
        <ContextsProvider>
            <RoutesProvider />
        </ContextsProvider>
    );
};
export default AppProvider;