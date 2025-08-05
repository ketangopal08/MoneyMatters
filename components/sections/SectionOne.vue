<template>
  <!-- Shrunk Navbar -->
  <nav class="w-full flex items-center justify-between px-6 py-2 bg-white/80 backdrop-blur-md border-b border-white/10 shadow-sm fixed top-0 left-0 z-30">
    <span class="font-bold text-base secondary-font text-primary">money matters</span>
    <div class="flex items-center space-x-3">
      <a href="#" class="text-dark text-xs">Components</a>
      <a href="#" class="text-dark text-xs">Docs</a>
      <a href="#" class="text-dark text-xs">About</a>
      <a href="#" class="rounded bg-primary py-1 px-3 text-xs font-semibold text-white shadow-sm">
        <NuxtLink>Buy</NuxtLink>
      </a>
    </div>
  </nav>

  <!-- Hero Section with Centered Image and Headline -->

  <!-- Hero Section with Centered Image and Headline -->
  <section class="relative flex flex-col items-center justify-center min-h-screen w-full px-4 pt-5">
    <div class="w-full flex flex-col items-center">
      <img src="/landing3.jpg" alt="Journal Hero" class="object-cover rounded-2xl shadow mb-8 mt-3" style="height:500px;width:95%;" />
      <h1 class="text-3xl md:text-5xl font-extrabold text-center text-primary mb-4 leading-tight">Up your productivity<br>like never before.</h1>
      <div class="flex flex-col md:flex-row gap-4 mt-4">
        <a href="#buy" class="bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full text-base shadow transition">Buy now</a>
        <a href="#download" class="bg-gray-200 hover:bg-gray-300 text-primary font-semibold py-2 px-6 rounded-full text-base shadow transition">Contact</a>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'SectionOne',
}
</script>

<style scoped>
</style>
