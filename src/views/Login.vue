<template>
  <div>
    <headerSection></headerSection>
    <section class="login-section auth-content fill-height">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="login-content d-flex col-lg-6 mx-auto fill-height">
            <div class="login-box card align-self-center">
              <b-form class="card-body">
                <!-- <div class="login-image login-box align-self-center mt-3">
                  <img
                    src="https://storage.googleapis.com/jypl/jypl-logo.png"
                    alt="JYPL"
                    class="img-fluid"
                  />
                </div> -->
                <!-- <div class="text-center mt-2 mb-4 text-uppercase font-size-lg">
                  Login
                </div> -->
                <div class="tab-heading inception main-head">
                  <h3 class="text">Login</h3>
                </div>
                <b-form-group
                  class="form-group floating-label-form-group controls"
                >
                  <b-form-input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder="Email"
                    required="required"
                    v-model="formData.email"
                  ></b-form-input>
                  <div
                    class="text-danger small error-txt"
                    v-if="$v.formData.email.$error"
                  >
                    Email required
                  </div>
                </b-form-group>
                <b-form-group
                  class="form-group floating-label-form-group controls"
                >
                  <b-form-input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                    required="required"
                    v-model="formData.password"
                  ></b-form-input>
                  <div
                    class="text-danger small error-txt"
                    v-if="$v.formData.password.$error"
                  >
                    password required
                  </div>
                </b-form-group>
                <div class="login-button mt-4 text-center">
                  <b-button
                    v-on:click="login(formData)"
                    variant="primary"
                    class="text-uppercase"
                    >Login</b-button
                  >
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footerSection></footerSection>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { constant } from "crypto";
import service from "@/service/apiservice.js";
import global from "@/service/global.js";
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";

export default {
  name: "login",
  components: {
    headerSection,
    footerSection
  },
  data() {
    return {
      error: [],
      formData: {
        email: "",
        password: ""
      },
      textHeader: "Welcome!",
      textEmail: "Email",
      textPassword: "Password",
      createAccount: "Create account"
    };
  },
  validations: {
    formData: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  created() {
    if (localStorage.getItem("playerInfo")) {
      this.$router.push("/player-attendance");
    }
  },
  methods: {
    login(formData) {
      const obj = {
        email: formData.email,
        password: formData.password
      };
      this.$v.formData.$touch();
      // console.log(formData);
      if (this.$v.formData.$error) {
      } else if (
        obj.email === "info.jyf@gmail.com" &&
        obj.password === "playerattendance@2020"
      ) {
        global.setUser({
          isLoggedIn: true
        });
        this.$toasted.success("Login Successfully.", {
          duration: 800
        });
        this.$router.push("/player-attendance");
      } else {
        this.$toasted.error("Please Enter Valid Data.", {
          timeout: 2000
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@/scss/import";
.login-image {
  max-width: 120px;
  margin: 0 auto;
}

.login-box {
  width: 360px;
  margin: 0 auto;
  background: $white;
  .card-body {
    padding: 0 1.25rem 1.25rem;
  }
}
</style>
