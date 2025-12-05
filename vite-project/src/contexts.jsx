import { createContext, useEffect, useState, useContext } from "react";
import  supabase from './supabase-client.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(undefined);

    const signUpNewUser = async () => {
        const response = await supabase.auth.signUp({
            email: email.toLowerCase(),
            password: password,
        });

        const data = response.data;
        const error = response.error;

        if (error) {
            console.error("Error signing up:", error);
            return { success: false, error };
        }
        return { success: true, data };
    }

    return (
        <AuthContext.Provider value={{ session, signUpNewUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}