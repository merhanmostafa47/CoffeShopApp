<script setup>
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="my-20 lg:my-40">
    <UContainer>
      <div class="flex items-center gap-8 flex-col">
        <div
          class="flex items-center justify-center flex-col w-full gap-3"
          data-aos="fade-up"
          data-aos-dely="200"
        >
          <h2 class="lg:text-2xl text-xl font-normal text-default-clr">
            {{ sectionData.title }}
          </h2>
          <p class="font-bold lg:text-4xl text-2xl text-default-clr">
            {{ sectionData.desc }}
          </p>
        </div>

        <!-- Filter Buttons -->
        <ProductsFilteButtons
          :categories="sectionData.categories"
          :initialSelectedCategoryId="sectionData.categories[0].id"
          data-aos="fade-up"
          data-aos-dely="400"
        />

        <!-- Products -->
        <div
          class="flex items-center justify-center gap-8 lg:gap-4 flex-wrap"
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-dely="600"
        >
          <div
            v-for="(product, idx) in sectionData.products"
            :key="product.id"
            data-aos="zoom-out"
            data-aos-duration="400"
            :data-aos-delay="idx * 400"
            class="flex items-center justify-center flex-col"
          >
            <div
              class="relative mb-[14px] bg-main-clr border-r-[8px] border-b-[8px] rounded-tr-3xl rounded-tl-3xl border-main-clr rounded-b-[64px]"
              data-aos="fade-up "
              data-aos-duration="200"
            >
              <div
                class="h-56 lg:h-72 overflow-hidden bg-white border-t-[10px] border-l-[8px] rounded-tr-[32px] border-border-clr rounded-tl-[64px] rounded-b-[64px]"
              >
                <NuxtImg
                  :src="product.img"
                  width="300"
                  height="300"
                  loading="lazy"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <h4
              class="capitalize text-lg lg:text-[22px] font-medium text-default-clr"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              {{ product.title }}
            </h4>
            <p
              class="capitalize mt-2 mb-3 text-grey-clr font-normal text-base"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              {{ product.subtitle }}
            </p>
            <div
              class="flex items-center justify-center gap-1"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <NuxtImg
                src="/images/icons/star.svg"
                alt="star"
                width="22"
                height="22"
                loading="lazy"
                v-for="(i, idx) in product.rating"
                :key="i"
                data-aos="zoom-in"
                data-aos-duration="200"
                :data-aos-delay="idx * 200"
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
