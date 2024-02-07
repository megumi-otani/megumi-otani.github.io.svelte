<script lang="ts">
	import Section1 from './contents/Section1.svelte';
	import Section2 from './contents/Section2.svelte';
	import Section3 from './contents/Section3.svelte';
	import Section4 from './contents/Section4.svelte';
  import Pagenation from './components/Pagenation.svelte';
	import IntersectionObserver from './components/IntersectionObserver.svelte';

  let targetId = 1

  function moveToSection(event: any) {
    targetId = event.detail.targetId
    const target = document.getElementById(`section${event.detail.targetId}`)
    const container = document.getElementById('Container')
    if (target === null || container === null) return

    container.scrollTo({
      top: target.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }
  function changeSelectedSection(event: any) {
    // TO: スクロール中はreturn <= メニュークリックして移動時に差が大きいと反応するため
    targetId = event.detail.targetId
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<main>
  <div id="Container" class="fullPageScroll">
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={1}>
      <Section1 />
    </IntersectionObserver>
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={2}>
      <Section2 />
    </IntersectionObserver>
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={3}>
      <Section3 />
    </IntersectionObserver>
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={4}>
      <Section4 />
    </IntersectionObserver>
  </div>
  <Pagenation on:moveToSection={moveToSection} bind:targetId={targetId} />
</main>

<style lang="scss">
@use './assets/styles/configs/functions.scss' as *;
@use './assets/styles/configs/mediaqueries.scss' as *;
@use './assets/styles/configs/breakpoints.scss' as *;

.fullPageScroll {
  width: 100%;
  overflow-x: hidden;
  :global(.section) {
    width: 100%;
  }
}

@include mq-desktop() {
  .fullPageScroll {
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    :global(.section) {
      height: 100vh;
      scroll-snap-align: start;
      position: relative;
    }
  }
}
@include mq-mobile() {
  .scroll-up {
    position: fixed;
    bottom: calcvw(24, $sp-design-width);
    right: calcvw(24, $sp-design-width);
  }
}
</style>
