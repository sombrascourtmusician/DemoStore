<script lang="ts">
  let items = [
    { source: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80", description: "Put whatever descriptions you want here. I'm lazy."},
    { source: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80", description: "Still lazy." },
    { source: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1327&q=80", description: "Did you really expect any different?" }
  ]
  let currentItem = 0;

  function prev()
  {
    currentItem = currentItem == 0 ? items.length - 1 : (currentItem - 1) % items.length;
  }

  function next()
  {
    currentItem = (currentItem + 1) % items.length;
  }
</script>

<!-- Carousel Body -->
<div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style="min-height: 19rem;">
  <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style="min-height: 19rem;">
    <img class="absolute inset-0 w-full h-full object-cover object-center" src={items[currentItem].source} alt="">
  </div>
  <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
    <div class="p-12 md:pr-24 md:pl-16 md:py-12">
      <p class="text-gray-600">{items[currentItem].description}</p>
      <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="/people">
        <span>Learn more about our staff</span>
        <span class="text-xs ml-1">&#x279c;</span>
      </a>
    </div>
    <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
  </div>
  <button on:click={prev}
     class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
    <span class="block" style="transform: scale(-1);">&#x279c;</span>
  </button>
  <button on:click={next}
      class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
    <span class="block" style="transform: scale(1);">&#x279c;</span>
  </button>
</div>