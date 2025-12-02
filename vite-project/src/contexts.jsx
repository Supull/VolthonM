import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from '../supabase-client.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(undefined);

    return (
        <AuthContext.Provider value={{ session}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}