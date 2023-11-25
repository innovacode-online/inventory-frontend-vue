import authService from "@/services/authService";
import { defineStore } from "pinia";
import { useToastStore } from "./toast";
import { onMounted, ref } from "vue";
import type { IUser } from "@/interface";
import router from "@/router";
import { handleAxiosError } from "@/helpers/handle-axios-error";


export const useAuthStore = defineStore('auth', () => {
    const toastStore = useToastStore();

    // VARIABLES
    const isLoading = ref(false);
    const user = ref<IUser | null>(null);
    const token = ref<string | null>(null);


    // METODOS
    async function loginUser(email: string, password: string) {
        isLoading.value = true;
        const data = await authService.login(email, password);

        if( !data ){
            isLoading.value = false;
            return;
        }

        user.value = data.user;
        token.value = data.token;

        localStorage.setItem('AUTH_TOKEN_INVENTORY',data.token );
        
        toastStore.showToast('success', "Inicio de sesion correcto");
        router.push('/profile');
        isLoading.value = false;
        console.log(user.value);

    }
    
    async function logout() {
        try {
            const token = localStorage.getItem('AUTH_TOKEN_INVENTORY');
            console.log(token);
            await authService.logout(token!);
            localStorage.removeItem('AUTH_TOKEN_INVENTORY');
            router.push('/auth/login')
        } catch (error) {
            handleAxiosError(error);
        }
    }


    async function validateToken() {
        isLoading.value = true;
        const token = localStorage.getItem('AUTH_TOKEN_INVENTORY');

        if( !token ){
            isLoading.value = false;
            router.push('/auth/login');
            return;
        }

        const data = await authService.validate(token);

        if( !data ){
            isLoading.value = false;
            return;
        }

        user.value = data;
        isLoading.value = false;
    }

    onMounted(() => {
        validateToken();
    })


    return {
        user,
        token,
        logout,
        isLoading,
        loginUser,
    }
})