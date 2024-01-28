<script lang="ts">
export let selectedId = 1
function clickNav(id: number) {
  const target = document.querySelector(`#section${id}`);
  if (target === null) return
  selectedId = id
  target.scrollIntoView({ behavior: "smooth" });
}
</script>

<nav id="pagination" class="pagination">
  {#each Array(5) as _, i}
    <a id="pagination{i+1}" href="#section{i+1}" on:click={() => clickNav(i+1)} class:active={selectedId === i+1}>・</a>
  {/each}
</nav>


<style lang="scss">
.pagination {
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  a {
    display: block;
    width: 12px;
    height: 12px;
    margin: 24px 0;
    border-radius: 50%;
    background-color: #fcfcfc;
    transition: transform 0.2s;
    text-indent: -9999em;
    &.active {
      transform: scale(1.8);
    }
  }
}
</style>