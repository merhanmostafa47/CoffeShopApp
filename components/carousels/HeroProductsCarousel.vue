<script setup>
const props = defineProps({
  swiperData: {
    type: Array,
    required: true,
  },
});

const swiperOptions = {
  modules: [SwiperAutoplay, SwiperNavigation],
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    // when window width is >= 640px
    340: {
      slidesPerView: 1,
    },
    1224: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
};
</script>

<template>
  <Swiper v-bind="swiperOptions">
    <SwiperSlide
      v-for="(item, idx) in swiperData"
      :key="item.id"
      class="lg:mx-8"
    >
      <div
        class="relative after:rounded-full after:-z-10 p-0 after:content-[''] after:absolute after:inset-0 after:w-[70%] after:h-[70%] after:top-1/2 after:-translate-y-1/2 after:translate-x-1/4 after:bg-gradient-to-r w-[28rem] h-[28rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center"
        data-aos="zoom-in"
        :data-aos-delay="idx * 400"
        :class="{
          'from-[#004876] to-[#1E71A6]': idx % 2 === 0,
          'from-[#6F4336] to-[#3B2F2F]': idx % 2 !== 0,
        }"
      >
        <NuxtImg
          :src="item.img"
          :alt="item.alt_img"
          width="495"
          height="495"
          loading="lazy"
          class="w-3/4 h-3/4 object-contain"
        />
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="swiper-navigation-buttons">
    <div class="swiper-button-next group">
      <Icon
        name="solar:arrow-left-linear"
        size="22"
        class="text-secondary-clr group-hover:text-white"
      />
    </div>
    <div class="swiper-button-prev group">
      <Icon
        name="solar:arrow-right-linear"
        size="22"
        class="text-secondary-clr group-hover:text-white"
      />
    </div>
  </div>
</template>

<style>
.swiper-slide-next {
  @apply !scale-50;
}

.swiper-slide-prev {
  @apply !scale-0;
}

.swiper-navigation-buttons {
  @apply items-center gap-3 absolute top-[35%] start-[92%] lg:flex hidden;

  .swiper-button-prev,
  .swiper-button-next {
    @apply border border-secondary-clr rounded-full p-1.5 h-9 w-9 flex items-center justify-center after:hidden transition-all duration-300  hover:bg-main-clr hover:border-main-clr;
  }
}
</style>
