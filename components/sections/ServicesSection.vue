<script setup>
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});

// Parallax Image Effect
import useParallax from "@/composables/parallax.js";
useParallax(".service-img");
</script>

<template>
  <section class="my-20 lg:my-40">
    <div
      class="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-8 md:px-14 lg:px-20"
    >
      <div
        class="after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[url('/images/shapes/service_shap.svg')] after:hidden lg:after:block after:bg-no-repeat after:bg-contain after:-z-10"
      >
        <NuxtImg
          :src="sectionData.img"
          width="495"
          height="695"
          loading="lazy"
          alt="service img"
          title="coffee"
          class="w-full h-auto lg:h-[36rem] object-cover service-img"
          data-speed="400"
        />
      </div>

      <div class="flex items-start justify-start gap-9 flex-col lg:!-ms-24">
        <div>
          <h2 class="font-bold lg:text-4xl text-2xl text-default-clr mb-2">
            {{ sectionData.title }}
          </h2>
          <p class="lg:text-2xl text-xl font-normal text-default-clr">
            {{ sectionData.desc }}
          </p>
        </div>
        <div class="flex items-start justify-start gap-4 flex-wrap">
          <div
            class="flex items-start justify-start gap-4 lg:w-[48%] w-full mb-4"
            v-for="(item, idx) in sectionData.items"
            data-aos="zoom-in"
            :data-aos-delay="idx * 400"
          >
            <div
              class="!w-20 !h-14 rounded-full bg-main-bg p-2 flex items-center"
            >
              <NuxtImg
                :src="item.img"
                width="52"
                height="46"
                loading="lazy"
                class="max-w-full max-h-full object-contain"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="capitalize font-bold text-base text-main-clr">
                {{ item.title }}
              </h3>
              <p class="text-dark-secondary-clr text-xs leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-end justify-end w-full lg:px-20 px-8 md:px-14">
      <NuxtImg
        src="/images/icons/loading_coffee.gif"
        height="200"
        width="200"
        loading="lazy"
        class="h-40 lg:h-56 w-auto"
      />
    </div>
  </section>
</template>
