<script lang="ts">
import { url } from "@sveltech/routify";

export let name : string;
</script>
<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-2" role="alert">
  <p class="font-bold">This page is currently under construction</p>
  <p class="text-sm">Please check in later for more details on {decodeURIComponent(name)}.</p>
</div>

<a href={$url('../')} class="font-bold text-blue-700">&#129044; Back</a>