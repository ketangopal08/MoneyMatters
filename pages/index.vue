

<template>
  <div class="relative min-h-screen w-full">
    <!-- Fullscreen Hero Background -->
    <div class="absolute inset-0 w-full h-full bg-cover bg-center" style="background-image: url('/landing.jpg');"></div>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
<div>
<div class="fixed top-4 left-1/2 transform -translate-x-1/2 w-[70%] max-w-6xl z-50 bg-white/20 backdrop-blur-md border border-white/10 rounded-lg shadow-md">
  <div class="px-2 py-2 flex items-center justify-between">
    <!-- Left Menu -->
    <div class="flex items-center space-x-6">
      <span class="dark:text-primary font-bold text-sm" style="margin-left: 6px;margin-right: 20px;">MoneyMatters</span>
    </div>

    
    <!-- Right Menu -->
    <div class="flex items-center space-x-4">
       <a href="#" class="dark:text-dark font-normal text-sm">Components</a>
      <a href="#" class="dark:text-dark font-normal text-sm">Docs</a>
      <a href="#" class="dark:text-dark font-normal text-sm">About</a>
      <!-- <a href="#" class=" rounded py-1.5 px-3 text-sm font-normal text-white shadow-sm flex"><div class="flex-initial"> <Github style="transform: translateY(2px);" class="w-4 h-4 mr-1" /></div> Contribute on GitHub</a> -->
      <a href="#" class="rounded-md bg-primary py-1.5 px-3 text-sm font-semibold text-white shadow-sm ">
        <NuxtLink >Buy</NuxtLink></a>
    </div>
  </div>
</div>
</div>
         

    <!-- Hero Content (centered) -->
    <section id="welcome" class="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">
      <h1 class="text-4xl md:text-8xl lg:text-8xl text-white secondary-font font-extrabold text-center mb-6 drop-shadow-lg">notes & thoughts</h1>
      <p class="text-lg md:text-1xl font-light text-gray-200 text-center max-w-2xl mb-8 drop-shadow">Capture your thoughts, set your goals, and track your journey with our beautifully crafted journal book. Start writing your story today!</p>
      <!-- <a href="#buy" class="bg-white hover:bg-secondary text-primary font-bold py-4 px-10 rounded-full text-xl shadow-lg transition">Buy Now</a> -->
    </section>
  </div>

  <!-- Section 2: Features (below hero) -->
  <section id="features" class="py-20 bg-white flex flex-col items-center" style="height: 3000px;">
    <h2 class="text-4xl font-bold text-primary mb-8">Why Choose Our Journal?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full px-4">
      <div class="bg-gray-100 rounded-lg p-8 shadow hover:shadow-lg transition flex flex-col items-center">
        <h3 class="text-2xl font-semibold mb-2">Premium Quality</h3>
        <p class="text-gray-600 text-center">Hardcover, thick paper, and elegant design for a luxurious writing experience.</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-8 shadow hover:shadow-lg transition flex flex-col items-center">
        <h3 class="text-2xl font-semibold mb-2">Goal-Oriented Layout</h3>
        <p class="text-gray-600 text-center">Structured pages to help you set, track, and achieve your goals.</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-8 shadow hover:shadow-lg transition flex flex-col items-center">
        <h3 class="text-2xl font-semibold mb-2">Inspire Creativity</h3>
        <p class="text-gray-600 text-center">Plenty of space for notes, sketches, and reflections to spark your creativity.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style>
/* Add any custom styles here if needed */
</style>