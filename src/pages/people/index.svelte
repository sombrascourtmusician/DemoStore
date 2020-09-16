<script lang="ts">
import VerticalCard from "../../components/VerticalCard.svelte";

const people = [
  { name: "Carlos Bonilla", title: "Joint CEO", portrait: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" },
  { name: "Joaquin A. Martinez", title: "Joint CEO", portrait: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" },
  { name: "Eden Ragsdale", title: "Chief Operations Officer", portrait: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" },
  { name: "Reid Ragsdale", title: "Chief Technology Officer", portrait: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" }
];
</script>

<div class="px-2 pt-2">
  <div class="flex justify-evenly flex-wrap -mx-2 ">
    {#each people as person }
    <a href={"/people/" + encodeURIComponent(person.name)}
     class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2">
      <VerticalCard title={person.name} text={person.title} image={person.portrait} />
    </a>
    {/each}
  </div>
</div>