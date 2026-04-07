<script setup>
import { eventos } from '@/data/eventos'
import EventCard from '@/components/EventCard.vue'
import { useRouter } from 'vue-router'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';

const router = useRouter()

function favoritar(evento) {
  evento.favorito = !evento.favorito
}

function abrirDetalhe(id) {
  router.push(`/detalhe/${id}`)
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item
          v-for="evento in eventos"
          :key="evento.id"
          @click="abrirDetalhe(evento.id)"
        >
          {{ evento.titulo }}
        </ion-item>
      </ion-list>

      <EventCard
        v-for="evento in eventos"
        :key="evento.id"
        :evento="evento"
        @favoritar="favoritar"
      />
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-item {
  cursor: pointer;
}

ion-item:hover {
  background: #eeeeee;
}
</style>