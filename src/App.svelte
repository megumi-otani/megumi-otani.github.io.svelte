<script lang="ts">
  import viteLogo from '/vite.svg'
  import Pagenation from './lib/Pagenation.svelte';
	import IntersectionObserver from './lib/IntersectionObserver.svelte';
  import { beforeUpdate, onMount, onDestroy, afterUpdate } from 'svelte';

  onMount(() => {
    console.log('onMount');
  });
  beforeUpdate(() => {
    console.log('beforeUpdate');
  });
  afterUpdate(() => {
    console.log('afterUpdate');
  });
  onDestroy(() => {
    console.log('onDestroy');
  });
  console.log('script');

  let selectedSection = "section1"

  function moveToSection(event: any) {
    selectedSection = event.detail.targetId
    const target = document.getElementById(event.detail.targetId)
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
    selectedSection = `section${event.detail.targetId}`
  }
</script>

<main>
  <div id="Container" class="fullPageScroll">
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={1}>
        <section id="section1" class="section section1">
          <h1>Section 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
            ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
          </p>
        </section>
    </IntersectionObserver>
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={2}>
      <section id="section2" class="section section2">
        <div class="imageWrapper">
          <img src={viteLogo} alt="" height="534" />
        </div>
        <h1>Tokyo Gate Bridge by SONY a7R3</h1>
      </section>
    </IntersectionObserver>
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={3}>
      <section id="section3" class="section section3">
        <h1>Section 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
          ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
        </p>
      </section>
    </IntersectionObserver>
    <IntersectionObserver on:moveToSection={changeSelectedSection} sessionNum={4}>
      <section id="section4" class="section section4">
        <h1>Section 4</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
          ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
        </p>
      </section>
    </IntersectionObserver>
  </div>
  <Pagenation on:moveToSection={moveToSection} bind:selectedSection={selectedSection} />
</main>

<style lang="scss">
.fullPageScroll {
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  .section {
    width: 100%;
    height: 100vh;
    padding: 10%;
    scroll-snap-align: start;
      position: relative;

    &.section1 {
      background-color: #5151FC;
    }

    &.section2 {
      background-color: #00ECFF;

      .imageWrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        img {
          display: block;
          position: absolute;
          width: 100%;
          height: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      h1 {
        position: absolute;
        left: 0;
        top: 88%;
        width: 100%;
        color: #ffffff;
        text-align: center;
      }
    }
    &.section3 {
      background-color: #5151FC;
    }
    &.section4 {
      background-color: #00ECFF;
    }
  }

}

</style>
