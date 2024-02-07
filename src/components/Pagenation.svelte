<script lang="ts">

  // 親のfunctionを呼ぶためのdispatch
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // props: 親から受け取る値
  export let targetId: number

  function clickNav(id: number) {
    console.log(id)
    if (id < 1) return
    targetId = id

    // 親側のmoveToSection関数を呼ぶ
    dispatch('moveToSection', { targetId: id });
  }
</script>

<nav class="nav-wrap">
  <button class="prev" class:is-show={targetId !== 1} on:click={() => clickNav(targetId - 1)}>
    ↑
  </button>
  
  <ul class="pagination {`section${targetId}`}"> 
    {#each Array(4) as _, i}
      <li><button on:click={() => clickNav(i + 1)}>0{i + 1}</button></li>
    {/each}
  </ul>

  <button class="next" class:is-show={targetId !== 4} on:click={() => clickNav(targetId + 1)}>
    ↓
  </button>
</nav>

<style lang="scss">
@use '../assets/styles/configs/mediaqueries.scss' as *;
.nav-wrap {
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;

  @include mq-mobile() {
    display: none;
  }
  .prev, .next {
    cursor: pointer;
    visibility: hidden;
    width: 1rem;

    &:hover {
      animation: swing 1s ease;
      animation-iteration-count: 1;
    }

    &.is-show {
      visibility: visible;
    }
  }

  ul.pagination {
    position: relative;
    list-style: none;

    button {
      display: block;
      margin: 3px 0;
      color: #fff;
      line-height: 20px;
      font-size: 15px;
      font-weight: 700;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 1px;
      left: -28px;
      background-color: #fff;
    }
    &.section1::before  {
      top: 13px;
    }
    &.section2::before  {
      top: 36px;
    }
    &.section3::before  {
      top: 59px;
    }
    &.section4::before  {
      top: 82px;
    }
  }
}

/*
  画面スライド用のナビゲーション
--------------------------------- */
// hover animation
@keyframes swing {
  15% {
    transform: translateY(5px);
  }
  30% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(3px);
  }
  65% {
    transform: translateY(-3px);
  }
  80% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>