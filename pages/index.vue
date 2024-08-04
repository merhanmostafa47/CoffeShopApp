<script setup>
import { dummyData } from "~/helpers/dummyData";
</script>

<template>
  <main>
    <!-- =================== Start:: Hero Section ===================-->
    <HeroSection :section-data="dummyData.hero" />
    <!-- =================== End:: Hero Section ===================-->

    <!-- =================== Start:: Clients Section ===================-->
    <ClientsSection />
    <!-- =================== End:: Clients Section ===================-->

    <!-- =================== Start:: products Section ===================-->
    <productsSection :section-data="dummyData.products" />
    <!-- =================== End:: products Section ===================-->

    <!-- =================== Start:: Services Section ===================-->
    <ServicesSection :section-data="dummyData.services" />
    <!-- =================== End:: Services Section ===================-->
  </main>
</template>
