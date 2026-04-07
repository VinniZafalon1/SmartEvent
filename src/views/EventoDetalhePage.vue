<script setup>
import { useRoute } from 'vue-router'
import { eventos } from '@/data/eventos'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

const route = useRoute()

const evento = eventos.value.find(
  e => e.id == route.params.id
)

function favoritar() {
  evento.favorito = !evento.favorito
}
</script>

<template>
  <ion-page v-if="evento">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ evento.titulo }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>{{ evento.descricao }}</p>

      <ion-button @click="favoritar">
        {{ evento.favorito ? "Desfavoritar" : "Favoritar" }}
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<style scoped>
p {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>