<script setup>
import { ref, computed } from 'vue';

const list = ref([]);
const newList = ref('');
const filter = ref('all');

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

const removeList = (id) => {
  list.value = list.value.filter((item) => item.id !== id);
}

const filterList = computed(() => {
  if (filter.value === 'all') {
    return list.value;
  } else if (filter.value === 'done') {
    return list.value.filter((item) => item.isDone);
  } else {
    return list.value.filter((item) => !item.isDone);
  }
})

</script>

<template>
  <div>
    <input type="text" v-model="newList" />
    <button @click="addList">Add</button>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="not-done">Not Done</option>
    </select>

    <ul>
      <li v-for="item in filterList" :key="item.id">
        <input type="checkbox" v-model="item.isDone" />
        <span :class="item.isDone ? 'line-through text-gray-400' : ''">
          {{ item.name }}
        </span>
        <button @click="removeList(item.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
