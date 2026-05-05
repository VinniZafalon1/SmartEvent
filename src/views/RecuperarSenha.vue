<template>
  <ion-page>
    <ion-content class="ion-padding">

      <ion-button fill="clear" @click="$router.push('/login')">
        Voltar para Login
      </ion-button>

      <h2>Recuperar Senha</h2>

      <ion-input v-model="email" placeholder="E-mail"></ion-input>

      <ion-button expand="full">Recuperar Senha</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonButton } from '@ionic/vue'
import { IonPage, IonContent, IonInput } from '@ionic/vue'
const email = ref('')
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

/* Input */
ion-input {
  margin-bottom: 15px;
  --background: #ffffff;
  --padding-start: 10px;
  border-radius: 10px;
}

/* Botão */
ion-button {
  margin-top: 20px;
  --background: #3880ff;
  --color: white;
  border-radius: 10px;
  height: 45px;
  font-weight: bold;
}

/* Centraliza na tela */
ion-content::part(scroll) {
  background-color: rgb(53, 53, 53);
}

</style>