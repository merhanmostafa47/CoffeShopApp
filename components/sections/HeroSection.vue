<script setup>
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});

// Parallax Image Effect
import useParallax from "@/composables/parallax.js";
useParallax(".coffee-img");
</script>

<template>
  <section class="min-h-[calc(100vh-90px)] flex items-center">
    <div class="fixed bottom-0 start-0 h-[18rem] lg:h-[35rem]">
      <NuxtImg
        src="/images/shapes/page_shape.svg"
        width="300"
        height="500"
        loading="lazy"
        class="w-auto"
      />
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:mt-0 mt-12"
    >
      <UContainer>
        <div class="flex flex-col lg:items-start items-center lg:ps-24">
          <h1
            class="relative font-bold capitalize text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-main-clr tracking-[8px] mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ sectionData.title }}
            <NuxtImg
              src="/images/icons/coffee.svg"
              width="28"
              height="28"
              loading="lazy"
              class="coffee-img absolute top-9 left-6 lg:block hidden"
              data-speed="700"
            />
          </h1>

          <p
            class="text-base text-dark-secondary-clr font-normal w-full lg:w-1/2 lg:text-start text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {{ sectionData.desc }}
          </p>

          <div
            class="flex items-center gap-3 mt-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <NuxtLink
              class="relative group border border-border-clr py-3 px-8 rounded-2xl flex items-center justify-center gap-4 overflow-hidden text-base font-medium text-light-secondary-clr uppercase after:content-[''] after:w-0 after:h-full after:absolute after:top-0 after:start-0 after:bg-light-secondary-clr after:transition-all after:duration-300 lg:hover:after:w-full lg:hover:text-white after:z-0 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-delay="700"
            >
              <span class="z-10"> {{ sectionData.btn_text }} </span>
              <Icon
                name="fluent:arrow-up-32-filled"
                class="text-light-secondary-clr rotate-[120deg] z-10 group-hover:!text-white"
              />
            </NuxtLink>

            <button
              class="rounded-full bg-main-clr h-9 w-9 flex items-center justify-center transition-all duration-300 hover:bg-main-bg"
              data-aos="zoom-in-up"
              data-aos-delay="700"
            >
              <NuxtImg
                src="/images/icons/shopping-bag.svg"
                width="20"
                height="20"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </UContainer>
      <div>
        <div class="absolute top-0 end-0 h-[35rem] -z-10">
          <NuxtImg
            src="/images/shapes/hero_gradient_shape.svg"
            width="300"
            height="500"
            loading="lazy"
            class="w-auto"
          />
        </div>
        <HeroProductsCarousel
          :swiper-data="sectionData.products"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        />
      </div>
    </div>
  </section>
</template>
