<template>
  <ion-page>
    <ion-content class="ion-padding">

            <ion-button fill="clear" @click="$router.push('/home')">
        Voltar para Home
      </ion-button>

      <ion-card v-if="livro">
        <img :src="livro.imagem" />

        <ion-card-header>
          <ion-card-title>{{ livro.titulo }}</ion-card-title>
          <ion-card-subtitle>{{ livro.autor }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ livro.descricao }}
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

// 👇 IMPORTANTE
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue'

const route = useRoute()

const livros = [
  {
    id: 1,
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    descricao: 'Harry descobre que é um bruxo e inicia sua jornada em Hogwarts.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg'
  },
  {
    id: 2,
    titulo: 'Harry Potter e a Câmara Secreta',
    autor: 'J.K. Rowling',
    descricao: 'Uma força misteriosa aterroriza Hogwarts.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780439064873-L.jpg'
  },
  {
    id: 3,
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'J.K. Rowling',
    descricao: 'Um prisioneiro perigoso escapa e parece estar atrás de Harry.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg'
  },
  {
    id: 4,
    titulo: 'Harry Potter e o Cálice de Fogo',
    autor: 'J.K. Rowling',
    descricao: 'Harry participa de um torneio mágico cheio de desafios.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780439139601-L.jpg'
  },
  {
    id: 5,
    titulo: 'Harry Potter e a Ordem da Fênix',
    autor: 'J.K. Rowling',
    descricao: 'Uma ameaça cresce enquanto Harry enfrenta dificuldades.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780439358071-L.jpg'
  },
  {
    id: 6,
    titulo: 'Harry Potter e o Enigma do Príncipe',
    autor: 'J.K. Rowling',
    descricao: 'Segredos sobre Voldemort são revelados.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780439785969-L.jpg'
  },
  {
    id: 7,
    titulo: 'Harry Potter e as Relíquias da Morte',
    autor: 'J.K. Rowling',
    descricao: 'A batalha final contra Voldemort.',
    imagem: 'https://covers.openlibrary.org/b/isbn/9780545010221-L.jpg'
  }
]

const livro = ref(null)

// 👇 FUNÇÃO PRA ATUALIZAR
const carregarLivro = () => {
  livro.value = livros.find(l => l.id == route.params.id)
}

// 👇 EXECUTA AO ENTRAR
carregarLivro()

// 👇 EXECUTA SEMPRE QUE TROCAR DE ROTA
watch(() => route.params.id, () => {
  carregarLivro()
})
</script>

<style scoped>

ion-content {
  --background: rgb(53, 53, 53);
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Card principal */
ion-card {
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Imagem do livro */
img {
  width: 100%;
  height: 700px;
  object-fit: cover;
}

/* Título */
ion-card-title {
  font-size: 20px;
  font-weight: bold;
  color: #222;
}

/* Autor */
ion-card-subtitle {
  font-size: 14px;
  color: #666;
}

/* Descrição */
ion-card-content {
  font-size: 15px;
  line-height: 1.5;
  color: #333;
}

/* Espaçamento geral */
ion-card-header {
  padding-bottom: 5px;
}

ion-card-content {
  padding-top: 5px;
}

</style>