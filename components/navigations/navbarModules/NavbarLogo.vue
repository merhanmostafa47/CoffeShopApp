<template>
  <div class="logo_wrapper">
    <NuxtLink to="/">
      <NuxtImg
        :placeholder="[60, 8]"
        src="/images/logo.svg"
        width="47"
        height="35"
        fit="contain"
        quality="80"
        alt="logo"
        title="Coffee shop logo"
      />
    </NuxtLink>
  </div>
</template>
