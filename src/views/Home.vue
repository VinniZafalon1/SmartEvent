<template>
  <ion-page>
    <ion-content class="ion-padding">

      <ion-button fill="clear" @click="$router.push('/login')">
        Voltar para Login
      </ion-button>

      <h2>Livros Favoritos</h2>

      <ion-list>
        <ion-item 
          v-for="livro in livros" 
          :key="livro.id"
          button
          @click="abrirDetalhes(livro.id)"
        >
          <ion-label>
            <h2>{{ livro.titulo }}</h2>
            <p>{{ livro.autor }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage, IonContent } from '@ionic/vue'

const router = useRouter()

const livros = ref([
  { id: 1, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling' },
  { id: 2, titulo: 'Harry Potter e a Câmara Secreta', autor: 'J.K. Rowling' },
  { id: 3, titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'J.K. Rowling' },
  { id: 4, titulo: 'Harry Potter e o Cálice de Fogo', autor: 'J.K. Rowling' },
  { id: 5, titulo: 'Harry Potter e a Ordem da Fênix', autor: 'J.K. Rowling' },
  { id: 6, titulo: 'Harry Potter e o Enigma do Príncipe', autor: 'J.K. Rowling' },
  { id: 7, titulo: 'Harry Potter e as Relíquias da Morte', autor: 'J.K. Rowling' }
])

const abrirDetalhes = (id) => {
  router.push(`/detalhes/${id}`)
}
</script>

<style scoped>

ion-content {
  --background: rgb(53, 53, 53);
}

/* Título */
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #ffffff;
}

/* Lista */
ion-list {
  background: transparent;
}

/* Cada item */
ion-item {
  margin-bottom: 10px;
  border-radius: 10px;
  --background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Título do livro */
ion-label h2 {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

/* Autor */
ion-label p {
  font-size: 13px;
  color: #000000;
}

/* Efeito ao clicar */
ion-item:active {
  transform: scale(0.98);
  transition: 0.1s;
}

</style>