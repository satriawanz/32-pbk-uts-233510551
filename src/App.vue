<script setup>
import { ref } from 'vue';

const list = ref([]);
const newList = ref('');

const addList = () => {
  if (newList.value !== '') {
    list.value.push({
      id: list.value.length + 1,
      name: newList.value,
      isDone: false,
    });
    newList.value = '';
  }
}
</script>

<template>
  <div>
    <input type="text" v-model="newList" />
    <button @click="addList">Add</button>

    <ul>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox" v-model="item.isDone" />
        <span :class="item.isDone ? 'line-through text-gray-400' : ''">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
