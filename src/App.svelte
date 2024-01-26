<script lang="ts">
  import Section1 from './lib/Section1.svelte';
  import Section2 from './lib/Section2.svelte';
  import Section3 from './lib/Section3.svelte';
  import Section4 from './lib/Section4.svelte';
  import Section5 from './lib/Section5.svelte';
  import Pagenation from './lib/Pagenation.svelte';
</script>

<main>
  <div class="fullPageScroll">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </div>
  <Pagenation />
</main>

<style lang="scss">
.fullPageScroll {
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  :global(.section) {
    width: 100%;
    height: 100vh;
    padding: 10%;
    scroll-snap-align: start;
  }

}

</style>
