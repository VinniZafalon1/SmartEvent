<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { ref } from 'vue'

const nome = ref('')
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        v-model="nome"
        placeholder="Seu nome"
      />

      <p>Nome: {{ nome }}</p>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-input {
  margin-bottom: 20px;
}

p {
  font-weight: bold;
}
</style>