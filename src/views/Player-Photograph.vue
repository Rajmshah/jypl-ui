<template>
  <div>
    <headerSection></headerSection>
    <div class="container">
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <div class="text-right mt-5 mb-3">
            <button class="btn btn-primary mr-3" v-on:click="redirectTo()">
              Attendance
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
              <h3 class="text">Player Photograph</h3>
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
          <!-- Other Details -->
          <div class="card inception" v-if="showForm">
            <div class="tab-heading inception">
              <h3 class="text">Additional Details</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <!-- Jersey Name -->
              <b-form-group label="Jersey Name:" label-for="jerseyName">
                <b-form-input
                  id="jerseyName"
                  v-model="form.jerseyName"
                  type="text"
                  placeholder="Enter Jersey Name"
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <div class="d-flex other-details">
                  <div class="w-90 w-inc">
                    <!-- Shirt Size -->
                    <b-form-group label="T-Shirt Size" label-for="shirt">
                      <b-form-select
                        id="shirt"
                        v-model="form.shirtSize"
                        label="text"
                        :value="value"
                        :options="shirtOptions"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                  <div class="w-90 ml-4 w-inc">
                    <!-- Trouser Size -->
                    <b-form-group label="Trouser Size" label-for="trouser">
                      <b-form-select
                        id="trouser"
                        v-model="form.trouserSize"
                        label="text"
                        :value="value"
                        :options="trouserOptions"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                  <div class="w-90 ml-4 w-inc">
                    <!-- Track Length -->
                    <b-form-group label="Track Length" label-for="track">
                      <b-form-select
                        id="track"
                        v-model="form.trackLength"
                        label="text"
                        :value="value"
                        :options="trackOptions"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>
            </div>
          </div>
          <!-- 2nd section file upload -->
          <div class="card inception" v-if="showForm">
            <div class="tab-heading inception">
              <h3 class="text">Upload Documents</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <b-form-group label="Profile Picture:" label-for="profile">
                <b-button
                  id="profile"
                  raised
                  @click="onClickProfileFile()"
                  variant="primary"
                  type="button"
                  >Upload</b-button
                >
                <input
                  type="file"
                  name="profile"
                  style="display:none"
                  ref="fileInputProfile"
                  accept="image/*"
                  @input="onFileProfilePicked()"
                />
                <div class="my-1" v-if="showPhotograph">
                  <img
                    :src="form.photograph | serverimage"
                    width="100"
                    height="auto"
                    alt
                  />
                </div>
              </b-form-group>
              <!-- <b-form-group label="Business Card:" label-for="businessCard">
                <b-button
                  id="businessCard"
                  raised
                  @click="onClickCardFile()"
                  variant="primary"
                  type="button"
                  >Upload</b-button
                >
                <input
                  type="file"
                  name="businessCard"
                  style="display:none"
                  ref="fileInputCard"
                  accept="image/*"
                  @input="onFileCardPicked()"
                />
                <div class="my-1" v-if="showBusinessCard">
                  <img
                    :src="form.businessCard | serverimage"
                    width="100"
                    height="auto"
                    alt
                  />
                </div>
              </b-form-group>
              <b-form-group label="Identity Proof:" label-for="identityProof">
                <b-button
                  id="identity"
                  raised
                  @click="onClickIdentityFile()"
                  variant="primary"
                  type="button"
                  >Upload</b-button
                >
                <input
                  type="file"
                  name="identity"
                  style="display:none"
                  ref="fileInputIdentity"
                  accept="image/*"
                  @input="onFileIdentityPicked()"
                />
                <div class="my-1" v-if="showIdProof">
                  <img
                    :src="form.idProof | serverimage"
                    width="100"
                    height="auto"
                    alt
                  />
                </div>
              </b-form-group> -->
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
      showPhotograph: false,
      // showBusinessCard: false,
      // showIdProof: false,
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
      trackOptions: [
        { value: "37", text: "37" },
        { value: "38", text: "38" },
        { value: "39", text: "39" },
        { value: "40", text: "40" },
        { value: "41", text: "41" },
        { value: "42", text: "42" },
        { value: "43", text: "43" },
        { value: "44", text: "44" },
        { value: "45", text: "45" },
        { value: "46", text: "46" },
        { value: "47", text: "47" }
      ],

      trouserOptions: [
        { value: "26", text: "26" },
        { value: "28", text: "28" },
        { value: "30", text: "30" },
        { value: "32", text: "32" },
        { value: "34", text: "34" },
        { value: "36", text: "36" },
        { value: "38", text: "38" },
        { value: "40", text: "40" },
        { value: "42", text: "42" },
        { value: "44", text: "44" }
      ],

      shirtOptions: [
        { value: "30", text: "30" },
        { value: "32", text: "32" },
        { value: "34", text: "34" },
        { value: "36", text: "36" },
        { value: "38", text: "38" },
        { value: "40", text: "40" },
        { value: "42", text: "42" },
        { value: "44", text: "44" },
        { value: "46", text: "46" },
        { value: "48", text: "48" }
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
        if (form.photograph) {
          this.showPhotograph = true;
        }
        // if (form.businessCard) {
        //   this.showBusinessCard = true;
        // }
        // if (form.idProof) {
        //   this.showIdProof = true;
        // }
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
            photograph: "",
            company: {
              name: ""
            }
          };
          this.showForm = false;
          this.$toasted.success("Player is updated successfully");
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
        photograph: "",
        company: {
          name: ""
        }
      };
      this.showForm = false;
    },

    ResetBtn() {
      this.removeText = false;
    },

    onClickProfileFile() {
      this.$refs.fileInputProfile.click();
    },

    onFileProfilePicked() {
      var files = this.$refs.fileInputProfile.files;
      if (files && files.length > 0 && files[0].name) {
        var filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        }
        // else if (files[0].size > 1024 * 1024) {
        //   this.$toasted.error("Image size is greater than 1 MB");
        // }
        else {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          console.log("image", files[0]);
          var formData = new FormData();
          formData.append("file", this.image);
          console.log(formData);
          service.upload(formData, data => {
            if (data.data.data) {
              this.$toasted.success("Profile Image Uploaded Successfully");
              this.showPhotograph = true;
              this.form.photograph = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Profile Image");
      }
    },

    // onClickIdentityFile() {
    //   this.$refs.fileInputIdentity.click();
    // },

    // onFileIdentityPicked() {
    //   var files = this.$refs.fileInputIdentity.files;
    //   if (files && files.length > 0 && files[0].name) {
    //     var filename = files[0].name;
    //     if (filename.lastIndexOf(".") <= 0) {
    //       this.$toasted.error("Please Add Valid File!");
    //     } else if (files[0].size > 1024 * 1024) {
    //       this.$toasted.error("Image size is greater than 1 MB");
    //     } else {
    //       var fileReader = new FileReader();
    //       fileReader.addEventListener("load", () => {
    //         this.imageUrl = fileReader.result;
    //       });
    //       fileReader.readAsDataURL(files[0]);
    //       this.image = files[0];
    //       var formData = new FormData();
    //       formData.append("file", this.image);
    //       service.upload(formData, data => {
    //         if (data.data.data) {
    //           this.$toasted.success("Identity Image Uploaded Successfully");
    //           this.showIdProof = true;
    //           this.form.idProof = data.data.data[0];
    //         }
    //       });
    //     }
    //   } else {
    //     this.$toasted.error("Select Image");
    //   }
    // },

    // onClickCardFile() {
    //   this.$refs.fileInputCard.click();
    // },

    // onFileCardPicked() {
    //   var files = this.$refs.fileInputCard.files;
    //   if (files && files.length > 0 && files[0].name) {
    //     var filename = files[0].name;
    //     if (filename.lastIndexOf(".") <= 0) {
    //       this.$toasted.error("Please Add Valid File!");
    //     } else if (files[0].size > 1024 * 1024) {
    //       this.$toasted.error("Image size is greater than 1 MB");
    //     } else {
    //       var fileReader = new FileReader();
    //       fileReader.addEventListener("load", () => {
    //         this.imageUrl = fileReader.result;
    //       });
    //       fileReader.readAsDataURL(files[0]);
    //       this.image = files[0];
    //       var formData = new FormData();
    //       formData.append("file", this.image);
    //       service.upload(formData, data => {
    //         if (data.data.data) {
    //           this.$toasted.success(
    //             "Business Card Image Uploaded Successfully"
    //           );
    //           this.showBusinessCard = true;
    //           this.form.businessCard = data.data.data[0];
    //         }
    //       });
    //     }
    //   } else {
    //     this.$toasted.error("Select Image");
    //   }
    // },

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
.form-control {
  border: 1px solid #ced4da !important;
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
