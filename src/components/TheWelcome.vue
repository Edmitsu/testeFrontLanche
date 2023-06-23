
<script setup>
import { ref, onMounted } from 'vue';
import { comboStore } from '../store/comboStore';

const store = comboStore();
const combos = ref([]);

onMounted(async () => {
  await store.fetchCombos();
  combos.value = store.combos;
}); 
</script>
<template>
  <div class="home">
    <h1 class="home_title">Combos de Hambúrguer</h1>
    <ul class="combo-grid">
      <li v-for="combo in combos" :key="combo._id" class="combo-item">
        <section>
          <div class="combo-content">
            <div class="image-row">
              <img class="combo_img" :src="`http://localhost:3000/${combo.src}`" :alt="combo.name" loading="lazy" />
              <div class="text-overlay">
                <p class="combo-name">{{ combo.name }}</p>
                <p class="combo-description">{{ combo.description }}</p>
              </div>
            </div>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #f1f1f1;
  font-weight: bolder;
  justify-items: center;
}

.home_title {
  margin-top: -5rem;
  padding: auto;
  margin: auto;
  font-size: 2.6rem;
}

.combo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
  list-style-type: none;
}

.combo-item {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.combo-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-row {
  height: 100%;
}

.combo_img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 3/4;
  object-position: center;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(247, 169, 1, 0.8);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.combo-item:hover .text-overlay {
  opacity: 1;
  /* Ao passar o mouse sobre o item, o overlay se torna visível */
  cursor: pointer;
}

.combo-name {
  font-size: 26px;
  font-weight: bolder;
  color: #f1f1f1;
  /* Define a cor do texto como preto */
  margin-bottom: 10px;
}

.combo-description {
  font-size: 16px;
  color: #f1f1f1;
  /* Define a cor do texto como preto */
  font-weight: bold;
}

@media (max-width: 768px) {
  ul {
    padding: 0;
    list-style-type: none;
  }

  .combo-grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  .combo-item {
    height: 700px;
    width: 90vw;
  }

  .combo-content {
    position: absolute;
    transition: opacity 0.3s;
    /* Adiciona uma transição suave */
    display: flex;
    flex-direction: column;
  }
}
</style>
