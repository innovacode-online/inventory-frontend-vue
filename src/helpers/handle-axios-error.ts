import axios from "axios"
import { useToastStore } from "@/stores/toast";

export const handleAxiosError = (error: unknown) => {

    const toastStore = useToastStore();
    
    if( axios.isAxiosError( error ) ){
        // MOSTRAR TOAST
        toastStore.showToast('error', error.response?.data.message);
    }

    return null;
}