<script lang="ts">
  import viteLogo from '/vite.svg'
</script>

<section id="section2" class="section section2">
  <div class="imageWrapper">
    <img src={viteLogo} alt="" height="534" />
  </div>
  <h1>Tokyo Gate Bridge by SONY a7R3</h1>
</section>

<style lang="scss">
.section2 {
  background-color: #212124;
  position: relative;

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

</style>