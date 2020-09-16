<script lang="ts">
  export let title : string;
  export let text : string = "";
  export let image : string;
</script>

<div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
  <img class="w-full" src="{image}" alt="{title}">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      {text}
    </p>
  </div>
</div>