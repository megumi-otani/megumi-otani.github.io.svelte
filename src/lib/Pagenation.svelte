<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let selectedSection: string

  function clickNav(event: { preventDefault: () => void; currentTarget: any; }) {
    event.preventDefault()
    const link = event.currentTarget
    const targetId = new URL(link.href).hash.replace('#', '')
    console.log('clickNav')
    selectedSection = targetId
    dispatch('moveToSection', { targetId });
  }
</script>

<nav class="pagination {selectedSection}">
  <ul> 
    {#each Array(4) as _, i}
      <li><a href="#section{i+1}" on:click={clickNav}>0{i + 1}</a></li>
    {/each}
  </ul>
</nav>


<style lang="scss">
.pagination {
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  ul {
    position: relative;
    list-style: none;
  }
  a {
    display: block;
    margin: 3px 0;
    color: #fff;
    line-height: 20px;
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
</style>