<template>
  <ion-page>
    <ion-content class="ion-padding">

      <h2>Login</h2>

      <ion-input 
        v-model="email" 
        placeholder="E-mail"
      ></ion-input>

      <ion-input 
        v-model="senha" 
        type="password" 
        placeholder="Senha"
      ></ion-input>

      <ion-button expand="full" @click="$router.push('/home')">
        Entrar
      </ion-button>

      <ion-button fill="clear" @click="$router.push('/cadastro')">
        Criar conta
      </ion-button>

      <ion-button fill="clear" @click="$router.push('/recuperar')">
        Esqueci a senha
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue'
const email = ref('')
const senha = ref('')

</script>

<style scoped>

ion-content {
  --background: rgb(53, 53, 53);
}

/* Título */
h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  color: #ffffff;
}

/* Inputs */
ion-input {
  margin-bottom: 15px;
  --background: #ffffff;
  --padding-start: 10px;
  border-radius: 10px;
}

/* Botão principal */
ion-button {
  margin-top: 15px;
  border-radius: 10px;
  height: 45px;
}

/* Botões secundários */
ion-button[fill="clear"] {
  margin-top: 5px;
  --color: #3880ff;
  font-size: 14px;
}

/* Container centralizado */
ion-content::part(scroll) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>