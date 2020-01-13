<template>
  <div>
    <headerSection></headerSection>
    <div class="container">
      <div class="column">
        <div class="card inception">
          <div class="tab-heading inception main-head">
            <h3 class="text">Thank You</h3>
          </div>
          <div class="text-center main-form-section mt-3 mb-1 mx-5">
            Thank You for registering in
            <span class="titillium-web-semiBold"
              >Jewellers Youth Premier League Season 4</span
            >.
          </div>
          <div class="text-center main-form-section mt-1 mb-3 mx-5">
            You will receive a confirmation email within 24 hours.
          </div>
        </div>
      </div>
    </div>
    <footerSection></footerSection>
  </div>
</template>

<script>
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";

export default {
  components: {
    headerSection,
    footerSection
  }
};
</script>
<style lang="scss">
@import "src/assets/scss/main.scss";
.tab-heading.inception.main-head {
  color: #2c3e50;
  justify-content: center;
}
.mask-input {
  background-color: transparent;
  border: 1px solid $black !important;
  display: block;
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border-radius: 0.25rem;
}
.w-90 {
  width: 90%;
}
.error-txt {
  color: $red;
  text-transform: capitalize;
}

.main-form-section {
  color: $black !important;
}

*:focus {
  outline: 0;
}

.card {
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 3rem;
  margin-top: 7rem;
  padding: 0 0 1rem 0;
  width: 100%;
  box-shadow: 0.3rem 1.3rem 2rem 2px rgba(56, 65, 56, 0.41);
  background-color: $light-white;
  p {
    margin: 0 1rem 1rem 1rem;
    color: $light-black;
    font-size: 1.2rem;
    font-weight: 300;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.tab-heading {
  font-family: "Open Sans";
  font-weight: 600;
  border-top: 0.3rem solid rgba(34, 66, 128, 0.24);
  margin: 0 0 1rem 0;
  color: $fg-color;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;

  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    background-image: $inverted-corner;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -1px;
  }
  &:before {
    margin: 0 0 0 1rem;
  }
  &:after {
    transform: rotateZ(270deg);
  }
  .text {
    display: block;
    background-color: rgba(34, 66, 128, 0.24);
    padding: 0.2rem 1rem 0.5rem;
    border-color: rgba(34, 66, 128, 0.24);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    box-shadow: 0.1rem 0.4rem 0.5rem -3px $box-shadow-color;
    margin-top: -1px;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
    }
    &:before {
      bottom: 0.4rem;
      right: 0.9rem;
      width: 75%;
      height: 1.6rem;
      box-shadow: 0.8rem 0.4rem 1rem -0.9px $box-shadow-color2;
      transform: rotate(6deg);
      border-bottom-right-radius: 1rem;
    }
    &:after {
      top: -0.7rem;
      right: 0.65rem;
      transform: rotate(20deg);
      content: "(";
      color: transparent;
      font-size: 1.7rem;
      font-weight: 900;
      text-shadow: 1rem 0 0.4rem $black;
    }
  }
}
.btn-outline-primary:focus,
.btn-outline-primary.focus,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus,
.btn-outline-danger:focus,
.btn-outline-danger.focus,
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: unset;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-32%, -38%);
}

@media only screen and (max-width: 992px) {
  .multiselect.w-50.w-inc,
  .w-50.w-inc,
  .w-90.w-inc,
  .d-flex.w-50.w-inc,
  .multiselect.w-50.w-inc.multiselect--above {
    width: 100% !important;
  }
}

@media only screen and (max-width: 768px) {
  .tab-heading .text {
    font-size: 1.45rem;
  }
  .ml-4.w-50.w-inc,
  .w-90.ml-4.w-inc {
    margin-left: 0 !important;
  }
  .multiselect.w-50.w-inc,
  .w-50.w-inc,
  .w-90.w-inc,
  .d-flex.w-50.w-inc,
  .multiselect.w-50.w-inc.multiselect--above {
    width: 100% !important;
  }
  .d-flex.w-50.w-inc,
  .d-flex.company-width,
  .d-flex.other-details {
    display: block !important;
  }
}
</style>
