<script setup>
const footerLinks = ref([
  {
    id: 1,
    label: "Get inspired",
  },
  {
    id: 2,
    label: "Our products",
  },
  {
    id: 3,
    label: "For a better world",
  },
  {
    id: 4,
    label: "Contact",
  },
  {
    id: 5,
    label: "Blog",
  },
]);

const socials = ref([
  {
    label: "facebook",
    icon: "ei:sc-facebook",
    to: "https://facebook.com/",
  },
  {
    label: "instagram",
    icon: "mdi:instagram",
    to: "https://instagram.com/",
  },
  {
    label: "linkedin",
    icon: "flowbite:linkedin-solid",
    to: "https://linkedin.com/",
  },
]);
</script>

<template>
  <footer class="relative main-gardient py-20">
    <div class="absolute -top-2/3 end-0 z-10 xl:block hidden">
      <NuxtImg
        src="/images/footer_img.svg"
        alt="footer image"
        width="390"
        height="605"
        loading="lazy"
        class="w-full h-full object-contain"
      />
    </div>
    <UContainer class="max-w-2xl mx-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-14"
      >
        <div>
          <h3 class="title">menu</h3>
          <ul class="flex flex-col gap-4 items-start">
            <li v-for="route in footerLinks" :key="route.id">
              <NuxtLink to="/" class="item">
                {{ route.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="title">Cafe Locatotion</h3>
          <a href="https://www.google.com/maps/" target="_blank" class="item">
            lorem ipsum
          </a>
        </div>

        <div>
          <h3 class="title">Contact</h3>
          <p class="text-light-clr text-sm font-medium mb-5">
            Do you have a question? Send it to us!
          </p>
          <a href="tel:+000000000" class="item"> 000000000 </a>
        </div>
      </div>

      <div
        class="border-t border-light-clr pt-5 flex items-center justify-between"
      >
        <NuxtLink
          class="font-medium uppercase text-xs text-light-clr tracking-[2.5px] lg:hover:text-white cursor-pointer"
        >
          privacy policy
        </NuxtLink>

        <div class="flex items-center gap-2">
          <NuxtLink
            v-for="(social, idx) in socials"
            :key="idx"
            :href="social.to"
            target="_blank"
            :aria-label="social.label"
            class="flex items-center justify-center text-white h-9 w-9 rounded-full p-2 border-[1.5px] border-light-clr transition-all duration-300 lg:hover:bg-light-clr lg:hover:text-main-clr"
          >
            <Icon :name="social.icon" size="24" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped>
.title {
  @apply font-cormorant font-semibold text-lg text-white capitalize mb-5;
}

.item {
  @apply text-light-clr text-sm font-medium capitalize transition-none duration-300  lg:hover:text-white cursor-pointer;
}
</style>
