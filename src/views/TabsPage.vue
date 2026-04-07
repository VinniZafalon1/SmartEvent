<script setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';
import { homeOutline, calendarOutline, heartOutline, personOutline } from 'ionicons/icons';
</script>

<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/eventos">
          <ion-icon :icon="calendarOutline" />
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favoritos" href="/favoritos">
          <ion-icon :icon="heartOutline" />
          <ion-label>Favoritos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/perfil">
          <ion-icon :icon="personOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>

      </ion-tab-bar>

    </ion-tabs>
  </ion-page>
</template>

