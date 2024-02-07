<script lang="ts">

  let isClosed = false
</script>

<section id="section3" class="section section3">
  <div class="sectionContainer">
    <figure class="feature" class:closed={isClosed}>
    </figure>

    <div class="headline">
      <h2 class="title" class:closed={isClosed}>
      </h2>
    </div>
    <div class="detail">
    </div>
  </div>
</section>


<style lang="scss">
@use '../assets/styles/configs/functions.scss' as *;
@use '../assets/styles/configs/mediaqueries.scss' as *;
@use '../assets/styles/configs/breakpoints.scss' as *;

.section3 {
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
    width: calcvw(924, $pc-design-width);
    margin-bottom: calcvw(8, $pc-design-width);
    @include mq($from: wide) {
      width: 924px;
      margin-bottom: 8px;
    }
    // mobile&tablet
    @include mq-mobile() {
      width: calcvw(300, $sp-design-width);
      height: calcvw(56, $sp-design-width);
      margin-bottom: calcvw(32, $sp-design-width);
    }

    &.closed {
      opacity: 16%;
    }
  }

  .headline {
    display: flex;
    align-items: center;
    justify-content: space-between;

    // desktop
    margin-bottom: calcvw(40, $pc-design-width);
    height: calcvw(160, $pc-design-width);
    @include mq($from: wide) {
      margin-bottom: 40px;
      height: 160px;
    }
    // mobile&tablet
    @include mq-mobile() {
      margin-bottom: calcvw(24, $sp-design-width);
      height: calcvw(128, $sp-design-width);
    }

    h2.title {
      font-weight: 700;
      color: #00ECFF;

      // desktop
      font-size: calcvw(40, $pc-design-width);
      line-height: round-line-height(48, 40);
      @include mq($from: wide) {
        font-size: 40px;
        line-height: 48px;
      }
      // mobile&tablet
      @include mq-mobile() {
        font-size: calcvw(26, $sp-design-width);
        line-height: round-line-height(32, 26);
      }
    }
  }

  .detail {
    display: flex;
    align-items: start;
    justify-content: space-between;

    @include mq-mobile() {
      flex-direction: column;
    }
  }

}
</style>