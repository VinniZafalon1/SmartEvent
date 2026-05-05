<template>
  <ion-page>
    <ion-content class="ion-padding">

      <ion-button fill="clear" @click="$router.push('/login')">
        Voltar para Login
      </ion-button>

      <h2>Cadastro</h2>

      <ion-input v-model="nome" placeholder="Nome"></ion-input>

      <ion-input v-model="email" placeholder="E-mail"></ion-input>

      <ion-input v-model="senha" type="password" placeholder="Senha"></ion-input>

      <ion-input v-model="confirmarSenha" type="password" placeholder="Confirmar Senha"></ion-input>

      <p v-if="erroSenha" class="erro">As senhas não coincidem</p>

      <ion-button expand="full" @click="$router.push('/login')">
        Cadastrar
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue'

const router = useRouter()

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')

const tentouEnviar = ref(false)

const erroSenha = computed(() => {
  return tentouEnviar.value && senha.value !== confirmarSenha.value
})

const formValido = computed(() => {
  return (
    nome.value &&
    email.value &&
    senha.value &&
    confirmarSenha.value &&
    senha.value === confirmarSenha.value
  )
})

const cadastrar = () => {
  tentouEnviar.value = true
  if (formValido.value) {
    router.push('/login')
  }
}
</script>

<style scoped>
.erro {
  color: red;
  font-size: 14px;
  margin: 5px 0;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  color: #ffffff;
}

ion-input {
  margin-bottom: 12px;
  --padding-start: 10px;
  --background: #ffffff;
  border-radius: 8px;
}

ion-button {
  margin-top: 20px;
  --background: #3880ff;
  --color: rgb(255, 255, 255);
  border-radius: 10px;
  height: 45px;
  font-weight: bold;
}

.erro {
  color: #e74c3c;
  font-size: 13px;
  margin-top: -5px;
  margin-bottom: 10px;
  padding-left: 5px;
}

ion-content {
  --background: rgb(53, 53, 53);
}

</style>