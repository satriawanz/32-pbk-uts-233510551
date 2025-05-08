<script setup>
import { ref, computed } from 'vue';

const list = ref([]);
const newList = ref('');
const filter = ref('all');

const addList = () => {
  if (newList.value.trim() !== '') {
    list.value.push({
      id: Date.now(),
      name: newList.value,
      isDone: false,
    });
    newList.value = '';
  }
};

const removeList = (id) => {
  list.value = list.value.filter((item) => item.id !== id);
};

const filterList = computed(() => {
  if (filter.value === 'all') {
    return list.value;
  } else if (filter.value === 'done') {
    return list.value.filter((item) => item.isDone);
  } else {
    return list.value.filter((item) => !item.isDone);
  }
});
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 p-6">
    <div class="max-w-4xl mx-auto bg-white/80 rounded-xl shadow-xl p-6 space-y-6">
      <h1 class="text-3xl font-bold text-center text-purple-600">Task List</h1>

      <!-- Input + Filter -->
      <div class="flex flex-col md:flex-row justify-between gap-4">
        <div class="flex flex-1 gap-3">
          <input
            type="text"
            v-model="newList"
            placeholder="What's your next task?"
            class="w-full px-4 py-2 rounded-md border-2 border-pink-300 bg-pink-50 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            @click="addList"
            class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md shadow"
          >
            Add
          </button>
        </div>

        <select
          v-model="filter"
          class="w-full md:w-48 px-3 py-2 border-2 border-blue-300 bg-blue-50 rounded-md text-blue-700 shadow focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="not-done">Not Done</option>
        </select>
      </div>

      <!-- List -->
      <ul class="space-y-3 h-90 overflow-y-auto pr-2">
        <li
          v-for="item in filterList"
          :key="item.id"
          class="flex justify-between items-center bg-mint p-4 rounded-lg shadow border-l-4"
          :class="item.isDone ? 'border-green-400' : 'border-yellow-400'"
        >
          <div class="flex items-center gap-3">
            <input type="checkbox" v-model="item.isDone" class="accent-green-500 scale-125" />
            <span
              :class="item.isDone ? 'line-through text-gray-400' : 'text-gray-800 font-semibold'"
            >
              {{ item.name }}
            </span>
          </div>
          <button
            @click="removeList(item.id)"
            class="text-sm text-red-400 hover:text-red-600 font-semibold"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bg-mint {
  background-color: #c1f0dc;
}

ul::-webkit-scrollbar {
  width: 8px;
}
ul::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  border-radius: 6px;
}
</style>
