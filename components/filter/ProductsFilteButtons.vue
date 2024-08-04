<script setup>
// Props
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  initialSelectedCategoryId: {
    type: Number,
    required: true,
  },
});

// Emits
const emit = defineEmits(["selectCategory"]);

const selectedCategoryId = ref(props.initialSelectedCategoryId || null);
const handelCategorySelection = (categoryId) => {
  // Set Selected Category Id To Toggle Category Button Active Class Using It
  selectedCategoryId.value = categoryId;
  // Pass Selected Category Id To Parent Component To Get The Data Using It
  emit("selectCategory", categoryId);
};
</script>

<template>
  <div
    class="flex items-center justify-center gap-4 flex-wrap lg:gap-10 w-full my-4 lg:my-8"
  >
    <button
      v-for="item in categories"
      :key="item.id"
      :class="{ active: selectedCategoryId === item.id }"
      class="w-fit !capitalize pb-[10px] text-default-clr font-medium text-lg lg:text-xl [&.active]:text-main-clr [&.active]:border-b [&.active]:border-main-clr"
      @click="handelCategorySelection(item.id)"
    >
      {{ item.title }}
    </button>
  </div>
</template>
