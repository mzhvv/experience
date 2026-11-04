<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <main class="app">
    <header class="app-header">
      <div>
        <div class="eyebrow">INDEPENDENT APPLICATION / VUE</div>
        <h1>Vue workspace</h1>
        <p>Самостоятельный Vue-проект в monorepo.</p>
      </div>
      <span class="badge">Vue 3 · Vite</span>
    </header>

    <section class="workspace">
      <div class="workspace-heading">
        <div>
          <span class="section-label">VUE APPLICATION</span>
          <h2>Счётчик Vue</h2>
        </div>
        <span class="task-count">Реактивное состояние</span>
      </div>

      <p class="description">
        Это отдельный Vue 3 проект со своими зависимостями и сервером. Next.js
        отображает его в своей оболочке, не собирая Vue в свой bundle.
      </p>

      <div class="counter">
        <button
          aria-label="Уменьшить значение"
          class="counter-button"
          type="button"
          @click="count--"
        >
          −
        </button>
        <output class="counter-value">{{ count }}</output>
        <button
          aria-label="Увеличить значение"
          class="counter-button"
          type="button"
          @click="count++"
        >
          +
        </button>
      </div>
    </section>
  </main>
</template>
