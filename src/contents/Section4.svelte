<script lang="ts">
</script>

<section id="section4" class="section section4">
  <div class="sectionContainer">
    <figure class="feature">
    </figure>
    <div class="detail">
    </div>
  </div>
</section>

<style lang="scss">
@use '../assets/styles/configs/functions.scss' as *;
@use '../assets/styles/configs/mediaqueries.scss' as *;
@use '../assets/styles/configs/breakpoints.scss' as *;

.section4 {
  background-color: #b3bf47;
  color: #212121;

  .sectionContainer {
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: calcvw(1100, $pc-design-width);
    max-width: 1100px;
    // mobile&tablet
    @include mq-mobile() {
      width: 100%;
      padding: calcvw(48, $sp-design-width) calcvw(24, $sp-design-width);
    }
  }

  .feature{
    overflow: hidden;
    position: relative;

    // desktop
    width: calcvw(805, $pc-design-width);
    height: calcvw(160, $pc-design-width);
    margin-bottom: calcvw(16, $pc-design-width);
    @include mq($from: wide) {
      width: 805px;
      height: 160px;
      margin-bottom: 16px;
    }
    // mobile&tablet
    @include mq-mobile() {
      width: calcvw(284, $sp-design-width);
      height: calcvw(56, $sp-design-width);
      margin-bottom: calcvw(32, $sp-design-width);
    }
  }
  .detail {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mq-mobile() {
      flex-direction: column;
    }
  }

}
</style>