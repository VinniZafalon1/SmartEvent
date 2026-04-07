<script setup>
defineProps({
  evento: Object
})
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/vue';

const emit = defineEmits(['favoritar'])
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ evento.titulo }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{ evento.descricao }}
      <ion-button @click="emit('favoritar', evento)">
        Favoritar
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
ion-card {
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

ion-card-title {
  font-size: 18px;
  font-weight: bold;
}

ion-button {
  margin-top: 10px;
}
</style>