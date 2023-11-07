<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from "@/stores/auth";


const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleShowPassword = () => {
    showPassword.value = !showPassword.value;
}

const handleSubmit = () => {
    
    authStore.loginUser(email.value, password.value)
}

</script>

<template>
    <form @submit.prevent="handleSubmit" class="w-full max-w-md">
        <div class="form-control">
            <label for="email">Correo electronico: </label>
            <input v-model="email" type="email" name="email">
        </div>


        <div class="form-password">
            <label for="password">Contraseña: </label>
            <div class="form-control-password">
                <input 
                    v-model="password" 
                    :type="showPassword ? 'text' : 'password' "
                >
                    
                    
                <i @click="handleShowPassword" v-if="showPassword" class="uil uil-eye"></i>
                <i @click="handleShowPassword" v-else class="uil uil-eye-slash"></i>
            </div>
        </div>

        <button type="submit" class="btn-primary" :aria-disabled="authStore.isLoading">
            {{ authStore.isLoading ? "Cargando..." : "Iniciar Sesion" }}
        </button>

    </form>
</template>
