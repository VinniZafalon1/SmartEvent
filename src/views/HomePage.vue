<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>SmartEvent</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Bem-vindo!</h2>
      <ion-button router-link="/eventos">
        Ver Eventos
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

ion-button {
  display: block;
  margin: 0 auto;
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>