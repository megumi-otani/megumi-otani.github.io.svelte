<script lang="ts">
  import Section1 from './lib/Section1.svelte';
  import Section2 from './lib/Section2.svelte';
  import Section3 from './lib/Section3.svelte';
  import Section4 from './lib/Section4.svelte';
  import Section5 from './lib/Section5.svelte';
  import Pagination from './lib/Pagination.svelte';
	import IntersectionObserver from './lib/IntersectionObserver.svelte';

  let selectedId: number = 1

      // Intersection Observer
      // const sectionsNodeList = document.querySelectorAll(".section");
      // const sections = Array.prototype.slice.call(sectionsNodeList, 0);
      // const observerRoot = document.querySelector(".fullPageScroll");
      // const observer = new IntersectionObserver(doWhenIntersect, {
      //   root: observerRoot,
      //   rootMargin: "-50% 0px",
      //   threshold: 0
      // });
      // sections.forEach(function(section) {
      //   observer.observe(section);
      // });

      /**
       * 交差したときに呼び出す関数
       * @param entriesNodeList - IntersectionObserverEntry IntersectionObserverが交差したときに渡されるオブジェクトです。
       */
       function doWhenIntersect(entriesNodeList: IntersectionObserverEntry[]) {
        const entries = Array.prototype.slice.call(entriesNodeList, 0);
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            activatePagination(entry.target);
          }
        });
      }

      /**
       * ページネーションの大きさを変える関数
       * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
       */
      function activatePagination(element: Element) {
        const currentActiveIndex = document.querySelector(
          "#pagination .active"
        );
        if (currentActiveIndex !== null) {
          currentActiveIndex.classList.remove("active");
        }
        const newActiveIndex = document.querySelector(
          "a[href='#" + element.id + "']"
        );
        if (newActiveIndex === null) return
        newActiveIndex.classList.add("active");
      }
</script>

<main>
  <div class="fullPageScroll">
    <IntersectionObserver let:intersecting top={400}>
      {#if intersecting}
        <section class="somesection even">
          <div class="content">
            <h3>
              This message will show if it is intersecting.
            </h3>
            <p>
              Obviously you won't see it if it isn't, so better open up the console to see the changes.
            </p>
          </div>
        </section>
      {:else}
        <section class="somesection">
          This message will show if the section isn't intersecting. Hello from the console! 👀
        </section>
      {/if}
    </IntersectionObserver>
    <IntersectionObserver>
      <Section1 />
    </IntersectionObserver>
    <IntersectionObserver>
      <Section2 />
    </IntersectionObserver>
    <IntersectionObserver>
      <Section3 />
    </IntersectionObserver>
    <IntersectionObserver>
      <Section4 />
    </IntersectionObserver>
    <IntersectionObserver>
      <Section5 />
    </IntersectionObserver>
  </div>
  <Pagination selectedId={selectedId} />
</main>

<style lang="scss">
.somesection {
  width:100%;
  height:100vh;
  display: flex;
align-items: center;
justify-content: center;
}

.somesection.even{
  background:#ccc;
}

.content{
text-align:center;
  width:350px;
}
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
  }
}
</style>
