<template>
  <div>
    <headerSection></headerSection>
    <div class="container">
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <div class="text-right mt-5 mb-3">
            <button class="btn btn-primary mr-3" v-on:click="redirectTo()">
              Photograph
            </button>
            <button class="btn btn-danger" v-on:click="logout()">Logout</button>
          </div>
        </div>
      </div>
      <div class="column">
        <b-form name="formShow" @submit="updatePlayerInfo" @reset="onReset()">
          <!-- Search Player -->
          <div class="card inception">
            <div class="tab-heading inception main-head">
              <h3 class="text">Player Attendance</h3>
            </div>
            <div class="text-left main-form-section my-3 mx-5">
              <!-- Team -->
              <b-form-group label="Select Player:" label-for="player">
                <multiselect
                  v-model="formShow.playerDetail"
                  :options="playerOptions"
                  :searchable="true"
                  :close-on-select="true"
                  :clear-on-select="false"
                  placeholder="Search and Select a Player"
                  :custom-label="customLabel"
                  :value="name"
                  class="w-50 w-inc"
                  track-by="_id"
                  @search-change="playerChange"
                  @select="onSelectedPlayer"
                ></multiselect>
              </b-form-group>
            </div>
          </div>
          <!-- Player Static Info -->
          <div class="card inception" v-if="showForm">
            <div class="tab-heading inception">
              <h3 class="text">Personal Details</h3>
            </div>
            <!--  -->
            <div class="text-left main-form-section mx-5">
              <!-- first name -->
              <b-form-group label="Player ID:" label-for="playerId">
                <div class="form-control bg-color w-75">
                  {{ form.playerId }}
                </div>
              </b-form-group>

              <!-- middle name -->
              <b-form-group label="Name:" label-for="fullname">
                <div class="form-control bg-color w-75">
                  {{ form.fullName }}
                </div>
              </b-form-group>

              <!-- last name -->
              <b-form-group label="Company Name:" label-for="companyName">
                <div class="form-control bg-color w-75">
                  {{ form.company.name }}
                </div>
              </b-form-group>
            </div>
          </div>

          <!-- 3rd section Other Details -->
          <div class="card inception" v-if="showForm">
            <div class="tab-heading inception">
              <h3 class="text">Additional Details</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <!-- Key Role -->

              <b-form-group label="Present:" label-for="present">
                <div class="w-50 w-inc">
                  <b-form-select
                    id="present"
                    v-model="form.attendance"
                    label="text"
                    :value="value"
                    :options="booleanOptions"
                  ></b-form-select>
                </div>
              </b-form-group>

              <b-form-group>
                <div class="d-flex other-details">
                  <div class="w-50 w-inc">
                    <!-- Batting Style -->
                    <b-form-group label="Batting Style:" label-for="bat">
                      <b-form-select
                        id="bat"
                        v-model="form.battingType"
                        label="text"
                        :value="value"
                        :options="battingOptions"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                  <div class="w-50 ml-4 w-inc">
                    <!-- Bowling Style -->
                    <b-form-group label="Bowling Style:" label-for="bowl">
                      <b-form-select
                        id="bowl"
                        v-model="form.bowlingType"
                        label="text"
                        :value="value"
                        :options="bowlingOptions"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>

              <b-form-group>
                <div class="d-flex other-details">
                  <div class="w-90 w-inc">
                    <!-- Batting Grade -->
                    <b-form-group
                      label="Batting Grade"
                      label-for="battingGrade"
                    >
                      <b-form-input
                        id="battingGrade"
                        type="number"
                        min="0"
                        v-model="form.battingRate"
                        placeholder="Enter Batting Grade"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="w-90 ml-4 w-inc">
                    <!-- Bowling Grade -->
                    <b-form-group
                      label="Bowling Grade"
                      label-for="bowlingGrade"
                    >
                      <b-form-input
                        id="bowlingGrade"
                        type="number"
                        min="0"
                        v-model="form.bowlingRate"
                        placeholder="Enter Bowling Grade"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="w-90 ml-4 w-inc">
                    <!-- Fielding Grade-->
                    <b-form-group label="Fielding Grade" label-for="fielding">
                      <b-form-input
                        id="fieldingGrade"
                        type="number"
                        min="0"
                        v-model="form.fieldingRate"
                        placeholder="Enter Fielding Grade"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>

              <b-form-group>
                <div class="d-flex other-details">
                  <div class="w-50 w-inc">
                    <!-- Fitness Time -->
                    <b-form-group label="Fitness Time" label-for="fitnessTime">
                      <b-form-input
                        id="fitnessTime"
                        type="text"
                        v-model="form.fitnessTime"
                        placeholder="Enter Fitness Time"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="w-50 w-inc ml-4">
                    <!-- Remark -->
                    <b-form-group label="Remark" label-for="remark">
                      <b-form-input
                        id="remark"
                        type="text"
                        v-model="form.remark"
                        placeholder="Enter Remark"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>
            </div>
          </div>

          <!-- submit and reset button -->
          <div class="mb-5 text-center" v-if="showForm">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button class="ml-4" type="reset" variant="danger"
              >Cancel</b-button
            >
          </div>
        </b-form>
      </div>
    </div>
    <footerSection></footerSection>
  </div>
</template>

<script>
import global from "@/service/global.js";
import { Multiselect } from "vue-multiselect";
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";

import service from "@/service/apiservice.js";
export default {
  components: {
    Multiselect,
    headerSection,
    footerSection
  },
  data() {
    return {
      name: "",
      show: true,
      showForm: false,
      showError: false,
      search: {},
      playerOptions: [],
      formShow: {
        playerDetail: ""
      },
      form: {
        company: {
          name: ""
        }
      },
      value: "",

      removeText: "true",

      booleanOptions: [
        { value: true, text: "Yes" },
        { value: false, text: "No" }
      ],

      battingOptions: [
        { value: "Left Hand", text: "Left Hand" },
        { value: "Right Hand", text: "Right Hand" }
      ],

      bowlingOptions: [
        { value: "Right Arm Medium Pace", text: "Right Arm Medium Pace" },
        { value: "Left Arm Medium Pace", text: "Left Arm Medium Pace" },
        { value: "Left Arm Spin", text: "Left Arm Spin" },
        { value: "Right Arm Off Spin", text: "Right Arm Off Spin" },
        { value: "Right Arm Leg Spin", text: "Right Arm Leg Spin" },
        { value: "None", text: "None" }
      ],
      showMessage: false,
      message: ""
    };
  },
  created() {
    if (localStorage.getItem("playerInfo")) {
      this.getPlayerList();
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    getPlayerList() {
      service.searchPlayer(this.search, playerList => {
        this.playerOptions = playerList.data.result;
      });
    },
    playerChange(query) {
      if (query == "") {
        this.search = {};
        this.getPlayerList();
      } else {
        this.search.name = query;
        this.getPlayerList();
      }
    },
    customLabel({ fullName, playerId }) {
      if (playerId) {
        return `${playerId} – ${fullName}`;
      } else {
        return `${fullName}`;
      }
    },
    onSelectedPlayer(form) {
      if (form == null || form == "") {
        this.showForm = false;
        this.$toasted.error("Please Search and Select Player Again");
      } else {
        this.showForm = true;
        this.form = form;
      }
    },
    updatePlayerInfo(e) {
      e.preventDefault();
      service.updatePlayer(this.form._id, this.form, result => {
        if (result.data) {
          this.removeText = false;
          this.formShow = {
            playerDetail: ""
          };
          this.form = {
            company: {
              name: ""
            }
          };
          this.showForm = false;
          this.$toasted.success("Player is updated successfully");
          //   this.$router.go(0);
        } else {
          this.$toasted.error("Retry updating the player.");
        }
      });
    },

    onReset() {
      this.removeText = false;
      this.formShow = {
        playerDetail: ""
      };
      this.form = {
        company: {
          name: ""
        }
      };
      this.showForm = false;
    },

    ResetBtn() {
      this.removeText = false;
    },

    logout() {
      global.removeUser();
      this.$router.push("/");
    },
    redirectTo() {
      this.$router.push("/player-photograph");
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";
.tab-heading.inception.main-head {
  color: #2c3e50;
  justify-content: center;
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
  box-shadow: none !important;
}

.card {
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 3rem;
  margin-top: 2rem !important;
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

.form-control.bg-color {
  background-color: rgba(203, 207, 244, 0.55);
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
  .form-control.bg-color.w-75,
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
  .form-control.bg-color.w-75,
  .multiselect.w-50.w-inc.multiselect--above {
    width: 100% !important;
  }
  .d-flex.w-50.w-inc,
  .d-flex.company-width,
  .d-flex.other-details {
    display: block !important;
  }
}

@media only screen and (max-width: 360px) {
  .form-control,
  .custom-select,
  .multiselect,
  .multiselect__input,
  .multiselect__single,
  .btn {
    font-size: 0.892rem !important;
  }
  label {
    font-size: 1rem;
  }
  .tab-heading .text {
    font-size: 1.25rem;
  }
}
</style>
