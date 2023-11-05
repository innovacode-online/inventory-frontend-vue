import authService from "@/services/authService";
import { defineStore } from "pinia";
import { useToastStore } from "./toast";


export const useAuthStore = defineStore('auth', () => {
    const toastStore = useToastStore();

    // VARIABLES


    // METODOS
    async function loginUser(email: string, password: string) {
        const data = await authService.login(email, password);
        toastStore.showToast('success', "Inicio de sesion correcto")
    }
    

    return {
        loginUser
    }
})