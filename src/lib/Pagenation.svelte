<nav id="pagination" class="pagination">
  <a id="pagination1" href="#section1" />
  <a id="pagination2" href="#section2" />
  <a id="pagination3" href="#section3" />
  <a id="pagination4" href="#section4" />
  <a id="pagination5" href="#section5" />
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
    &.active {
      transform: scale(1.8);
    }
  }
}
</style>