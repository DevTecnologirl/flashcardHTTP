<template>
  <div class="screen">

    <div class="card-container" @click="flipCard">
        <div class="title">CÓDIGOS STATUS HTTP</div>
      <div class="card" :class="{ flipped: isFlipped }">

        <div class="face front">
          <h1>{{ current.code }}</h1>
        </div>

        <div class="face back">
          <h2>{{ current.title }}</h2>
        </div>

      </div>
    </div>
  <div class="bottom-area">
    <button class="lamp" @click.stop="toggleInfo">
      💡
    </button>

    <div v-if="showInfo" class="info">
      {{ current.description }}
    </div>

    <div class="buttons">
      <button class="nav-btn" @click="prevCard">Voltar</button>
      <button class="nav-btn" @click="nextCard">Continuar</button>
    </div>

  </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from "vue"
import { httpStatuses, type HttpStatus } from "../data/httpStatus"

const index = ref<number>(0)

const current = computed<HttpStatus>(() => {
  return httpStatuses[index.value]
})

const isFlipped = ref<boolean>(false)
const showInfo = ref<boolean>(false)

function flipCard(): void {
  isFlipped.value = !isFlipped.value
  showInfo.value = false
}

function toggleInfo(): void {
  showInfo.value = !showInfo.value
}

function nextCard(): void {
  if (index.value < httpStatuses.length - 1) {
    index.value++
    resetCard()
  }
}

function prevCard(): void {
  if (index.value > 0) {
    index.value--
    resetCard()
  }
}

function resetCard(): void {
  isFlipped.value = false
  showInfo.value = false
}
</script>

<style scoped>
.title{
    font-size: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 700;
    font-style: italic;
    font-display: auto;
}
.bottom-area {
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.screen {
  background: #5000aa;
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  font-family: Arial, sans-serif;
}

/* CARD */
.card-container {
  perspective: 1000px;
}

.card {
  width: 260px;
  height: 160px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.card.flipped {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.front h1 {
  font-size: 56px;
  color: #5000aa;
}

.back {
  transform: rotateY(180deg);
  padding: 20px;
  text-align: center;
  color: #5000aa;
}

/* LÂMPADA */
.lamp {
  font-size: 28px;
  border: none;
  background: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* INFO */
.info {
  color: #5000aa;
  background: white;
  padding: 14px 18px;
  border-radius: 10px;
  max-width: 320px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* BOTÕES */
.buttons {
  display: flex;
  gap: 16px;
}

.nav-btn {
  background: white;
  color: #5000aa;
  border: none;
  padding: 19px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}
</style>

