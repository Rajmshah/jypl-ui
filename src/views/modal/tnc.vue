<template>
  <div>
    <b-modal
      id="tnc"
      ref="tnc"
      title="Terms and Conditions"
      hide-footer
      size="lg"
      no-stacking
    >
      <div class="">
        <ol>
          <li class="mb-3">
            Registration will be done in 2 Phases. Phase1 will be only for
            Players who played last year (JYPL-3). Anyone else registering in
            Phase 1 will be rejected & won't be allowed to register in Phase 2.
          </li>
          <li class="mb-3">
            Only Manufacturers & Wholesalers Related to the Jewellery Industry
            Can Participate (Owners/Directors/Partners/1st Blood Relations).
          </li>
          <li class="mb-3">Only 2 Players from 1 Company Participate.</li>
          <li class="mb-3">Registration amount 5250.</li>
          <li class="mb-3">
            Documents required for registration:
            <ul type="disc">
              <li class="mb-1">Photo.</li>
              <li class="mb-1">I'd proof.</li>
              <li class="mb-1">
                Company Card with Address (size & format for upload).
              </li>
            </ul>
          </li>
          <li class="mb-3">
            Any player who is unable to attend 70% practise sessions will not be
            allowed to participate in the Tournament & Team owner will be given
            a suitable replacement.
          </li>
          <li>
            No Refunds to any player if forms rejected for any if the Above
            Reasons.
          </li>
        </ol>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "TNC",
  created() {
    // this.page = this.$route.params.page;
  },
  methods: {
    close() {
      this.$bvModal.hide("tnc");
    }
  }
};
</script>
<style lang="scss">
.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  text-align: left !important;
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
</style>
