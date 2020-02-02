<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="text-right font-20 text-uppercase my-3">
            PLAYER Photograph
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-right my-3">
            <button class="btn btn-primary mr-3" v-on:click="redirectTo()">
              Attendance
            </button>
            <button class="btn btn-danger" v-on:click="logout()">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/service/global.js";
export default {
  methods: {
    logout() {
      global.removeUser();
      this.$router.push("/");
    },
    redirectTo() {
      this.$router.push("/player-attendance");
    }
  }
};
</script>

<style lang="scss"></style>
