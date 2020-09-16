<script lang="ts">
  import { slide } from 'svelte/transition';
  
  export let links : { description: string, route: string }[];
  let collapsed = false;
</script>

<nav class="bg-blue-700 p-4">
  <div class="container mx-auto flex items-center justify-between flex-wrap">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="/" class="font-semibold text-xl tracking-tight">DemoSite</a>
    </div>
    <div class="block md:hidden" on:click={() => collapsed = !collapsed}>
      <button class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
      <div class="text-sm md:flex-grow">
        {#if !collapsed}
          {#each links as link}
            <a href="{link.route}" class="block mt-4 md:inline-block md:mt-0 text-blue-200 hover:text-white mr-4"  transition:slide>
              {link.description}
            </a>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</nav>