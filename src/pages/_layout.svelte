<script lang="ts">
  import Navbar from "../components/Navbar.svelte";

  const links = [
    { description: "About Us", route: "/about" },
    { description: "Our Staff", route: "/people" },
    { description: "Services", route: "/services" }
  ];
</script>

<Navbar {links} />

<slot />