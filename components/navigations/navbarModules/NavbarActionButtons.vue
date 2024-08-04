<template>
  <div class="flex items-center gap-4">
    <button
      class="rounded-full bg-main-clr h-9 w-9 flex items-center justify-center transition-all duration-300 hover:bg-main-bg"
    >
      <NuxtImg
        src="/images/icons/shopping-bag.svg"
        width="20"
        height="20"
        loading="lazy"
      />
    </button>

    <NuxtLink>
      <NuxtImg
        src="/images/icons/menu-icon.svg"
        width="28"
        height="28"
        loading="lazy"
      />
    </NuxtLink>
  </div>
</template>
