<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";

  import Tailwindcss from "./Tailwindcss.svelte";
</script>

<Tailwindcss />

<Router {routes} />