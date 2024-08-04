<script setup>
// Props
</script>

<template>
  <section
    class="py-8 clients_section_content_wrapper"
    data-aos="fade-up"
    data-aos-duration="400"
  >
    <NuxtMarquee :speed="20" :auto-fill="true" :pause-on-hover="true" dir="ltr">
      <div class="w-full h-7 mx-8 lg:mx-12">
        <NuxtImg
          src="/images/icons/coffee-opacity.svg"
          alt="coffe"
          title="coffe"
          class="w-full h-full object-contain opacity-30"
        />
      </div>
      <span
        class="text-xl lg:text-2xl font-bold text-light-secondary-clr capitalize"
      >
        coffee
      </span>
    </NuxtMarquee>
  </section>
</template>
