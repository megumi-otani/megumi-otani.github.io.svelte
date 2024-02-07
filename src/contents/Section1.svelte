<script lang="ts">
  // import "@lottiefiles/lottie-player";
  import { onMount } from "svelte";

	$: innerWidth = 0
	$: innerHeight = 0

  let isSE: boolean
  let isTablet: boolean
  let isMobileLandscape: boolean

  onMount(() => {
    function onResize() {
      isSE = Boolean(innerWidth/innerHeight >= 0.56)
      isTablet = Boolean(innerWidth/innerHeight >= 0.75)
      isMobileLandscape = Boolean(innerWidth/innerHeight >= 2)
      console.log('innerWidth', innerWidth)
      console.log('innerHeight', innerHeight)
      console.log('onResize')
    }
    onResize()
    // window.addEventListener('resize', onResize);
    // return () => window.removeEventListener('resize', onResize);
  })
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<section id="section1" class="section section1">
    <div class="sectionContainer isSP">
      <p>
        TEST
      </p>
      <figure class="feature">
        
      </figure>
      <p>
        TEST
      </p>
    </div>
</section>

<style lang="scss">
@use '../assets/styles/configs/functions.scss' as *;
@use '../assets/styles/configs/breakpoints.scss' as *;
@use '../assets/styles/configs/mediaqueries.scss' as *;

.section1 {
  background-color: #fa64b9;
  display: flex;
  align-items: center;
  justify-content: center;

  // SPのみ表示
  .sectionContainer {
    width: 100%;
    height: 100vh;
    padding: calcvw(32, $sp-design-width) 0 calcvw(48, $sp-design-width);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    p {
      font-size: calcvw(20, $sp-design-width);
      line-height: round-line-height(28, 20);
      font-weight: 700;
      padding: 0 calcvw(24, $sp-design-width);
    }
    .feature {
      flex: 1;
      width: 100vw;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;

    }
  }
}

</style>