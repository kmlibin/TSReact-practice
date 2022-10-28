import React, {createContext, useState} from 'React'

interface AppStateValue {
    cart: {
        items: {name: string; price: number}[];
    };
}

const defaultStateValue: AppStateValue = {
    cart: {
        items: [],
    },
}

interface AppStateProviderProps {
    children: React.ReactNode;
}


export const AppStateContext = createContext(defaultStateValue);
export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined >;

const AppStateProvider: React.FC = ({children}) => {
    const [state, setState] = useState(defaultStateValue)
    return (
    <AppStateContext.Provider value={state}>
        <AppSetStateContext.Provider value={setState}>
        {children}
        </AppSetStateContext.Provider>
    </AppStateContext.Provider>)
};

export default AppStateProvider