<script lang="ts">
</script>

<section id="section2" class="section section2">
  <div class="sectionContainer">
    <figure class="feature">
      
    </figure>
    <div class="detail">
      <h2 class="title mb24">テスト</h2>
    </div>
  </div>
</section>

<style lang="scss">
@use '../assets/styles/configs/functions.scss' as *;
@use '../assets/styles/configs/mediaqueries.scss' as *;
@use '../assets/styles/configs/breakpoints.scss' as *;

.section2 {
  background-color: #21a717;
  color: #212121;

  .sectionContainer {
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    width: calcvw(1100, $pc-design-width);
    max-width: 1100px;
    // mobile&tablet
    @include mq-mobile() {
      width: 100%;
      padding-top: calcvw(48, $sp-design-width);
      padding-bottom: calcvw(48, $sp-design-width);
      flex-direction: column;
    }
  }

  .feature{
    position: relative;

    // desktop
    width: calcvw(550, $pc-design-width);
    height: 100%;
    @include mq($from: wide) {
      width: 550px;
    }
    // mobile&tablet
    @include mq-mobile() {
      margin-bottom: calcvw(32, $sp-design-width);
      width: calcvw(312, $sp-design-width);
      height: calcvw(192, $sp-design-width);
    }

  }

  .detail {
    // desktop
    @include mq-desktop() {
      width: calcvw(480, $pc-design-width);
      max-width: 480px;
    }
    // mobile&tablet
    @include mq-mobile() {
      width: 100%;
      padding: 0 calcvw(24, $sp-design-width) calcvw(16, $sp-design-width);
    }
    h2.title {
      font-weight: 700;

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
}
</style>