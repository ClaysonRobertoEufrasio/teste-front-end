import { ReactNode, createContext } from "react"

interface IContexts {
    citys: { name: string }[]
}

interface IChindrenProps {
    chindren: ReactNode
}



export const AuthProvider = createContext<IContexts>({} as IContexts)

const citys = [{ 'name': 'Sorocaba' }, { 'name': 'Florianopolis-SC' }, { 'name': 'Campinas-SP' }]



const AuthContext = ({ chindren }: IChindrenProps) => {
    return (
        <AuthProvider.Provider
            value={{
                citys
            }}
        >
            {chindren}
        </AuthProvider.Provider>
    )
}

export default AuthContext