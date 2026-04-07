<script setup>
import { computed } from 'vue'
import { eventos } from '@/data/eventos'
import EventCard from '@/components/EventCard.vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

const favoritos = computed(() =>
  eventos.value.filter(e => e.favorito)
)

function favoritar(evento) {
  evento.favorito = !evento.favorito
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p v-if="favoritos.length === 0">
        Nenhum evento favoritado
      </p>

      <EventCard
        v-for="evento in favoritos"
        :key="evento.id"
        :evento="evento"
        @favoritar="favoritar"
      />
    </ion-content>
  </ion-page>
</template>

<style scoped>
p {
  text-align: center;
  margin-top: 20px;
  color: gray;
}
</style>