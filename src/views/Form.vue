<template>
  <div>
    <headerSection></headerSection>
    <div class="container">
      <div class="column">
        <b-form name="formShow" @submit="onSelectedPlayer">
          <!-- 3rd section Other Details -->
          <div class="card inception">
            <div class="tab-heading inception main-head">
              <h3 class="text">Player Registration</h3>
            </div>
            <!-- <div
              class="text-center main-form-section my-3 mx-5"
              v-if="showMessage"
            >
              {{ message }}
            </div> -->
            <div class="text-center main-form-section my-3 mx-5">
              In case you have played JYPL Season 3, please search and select
              your name here.
            </div>
            <div class="text-left main-form-section my-3 mx-5">
              <!-- Team -->
              <b-form-group label="Select Player:" label-for="player">
                <multiselect
                  v-model="formShow.selectedPlayer"
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
                ></multiselect>
                <div v-if="showError" class="error-txt">
                  player selection is required
                </div>
              </b-form-group>
            </div>
            <div class="mb-5 text-center">
              <b-button type="submit" variant="primary">Go</b-button>
            </div>
          </div>
        </b-form>
      </div>
      <div class="column">
        <b-form name="form" @submit="onSubmit" @reset="onReset()" v-if="show">
          <!-- 1st section personmal detail -->
          <div class="card inception">
            <div class="tab-heading inception">
              <h3 class="text">Personal Details</h3>
            </div>
            <!--  -->
            <div class="text-left main-form-section mx-5">
              <!-- first name -->
              <b-form-group label="First Name:" label-for="firstName">
                <b-form-input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  placeholder="Enter First Name"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.firstName.$error &&
                      !$v.form.firstName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  first name is required
                </div>
              </b-form-group>

              <!-- middle name -->
              <b-form-group label="Middle Name:" label-for="middleName">
                <b-form-input
                  id="middleName"
                  type="text"
                  v-model="form.middleName"
                  placeholder="Enter Middle Name"
                ></b-form-input>
              </b-form-group>

              <!-- last name -->
              <b-form-group label="Surname:" label-for="surname">
                <b-form-input
                  id="surname"
                  type="text"
                  v-model="form.surname"
                  required
                  placeholder="Enter Surname"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.surname.$error &&
                      !$v.form.surname.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  Surname is required
                </div>
              </b-form-group>

              <!-- email and mobile -->
              <b-form-group>
                <div class="d-flex w-50 w-inc">
                  <!-- email -->
                  <div class="w-50 w-inc">
                    <b-form-group label="Email" label-for="email">
                      <b-form-input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Enter Email"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.email.$error &&
                            !$v.form.email.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        gmail is required
                      </div>
                    </b-form-group>
                  </div>
                  <!-- mobile no -->
                  <div class="ml-4 w-50 w-inc">
                    <b-form-group label="Mobile No" label-for="mobile">
                      <!-- <vue-tel-input
                        id="mobile"
                        type="number"
                        v-model="form.mobile"
                        required
                        :maxLen="max"
                        placeholder="Enter Mobile No"
                        class=""
                      ></vue-tel-input> -->
                      <b-form-input
                        id="mobile"
                        type="tel"
                        v-model="form.mobile"
                        required
                        :maxlength="max"
                        placeholder="Enter Mobile No"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.mobile.$error &&
                            !$v.form.mobile.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        mobile no is required
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>

              <!-- address -->

              <b-form-group label="Address:" label-for>
                <b-form-textarea
                  id="textarea"
                  v-model="form.address"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
                <div
                  v-if="
                    $v.form.address.$error &&
                      !$v.form.address.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  Address is required
                </div>
              </b-form-group>

              <!-- date -->
              <b-form-group>
                <div class="d-flex w-50 w-inc">
                  <div class="w-50 w-inc">
                    <b-form-group
                      class
                      id="calendar"
                      name="calendar"
                      label="Date Of Birth"
                      required
                    >
                      <date-picker
                        v-model="form.dob"
                        v-on:change="selectDate(form.dob)"
                        type="number"
                        :lang="'en'"
                        :first-day-of-week="1"
                        :format="'DD-MM-YYYY'"
                        class
                        :placeholder="'Select Date'"
                      ></date-picker>
                    </b-form-group>
                  </div>
                  <div class="ml-4 w-50 w-inc">
                    <b-form-group label="Age" label-for="age">
                      <b-form-input
                        id="age"
                        type="text"
                        v-model="form.age"
                        required
                        placeholder="age"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div
                  v-if="
                    $v.form.dob.$error && !$v.form.dob.required && removeText
                  "
                  class="error-txt"
                >
                  Select the date and age will be auto generated.
                </div>
              </b-form-group>
            </div>
          </div>

          <!-- 4th section Company Details -->
          <div class="card inception">
            <div class="tab-heading inception">
              <h3 class="text">Company Details</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <b-form-group>
                <div class="d-flex company-width">
                  <div class="w-50 w-inc">
                    <!-- Company Name -->
                    <b-form-group label="Name:" label-for="companyName">
                      <b-form-input
                        id="companyName"
                        v-model="form.company.name"
                        type="text"
                        required
                        placeholder="Enter Name"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.company.name.$error &&
                            !$v.form.company.name.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        name is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="w-50 w-inc ml-4">
                    <!-- Type of Business -->
                    <b-form-group
                      label="Type of Business:"
                      label-for="businessType"
                    >
                      <b-form-input
                        id="businessType"
                        v-model="form.company.businessType"
                        type="text"
                        required
                        placeholder="Enter Type of Business"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.company.businessType.$error &&
                            !$v.form.company.businessType.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        type of business is required
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="d-flex company-width">
                  <div class="w-50 w-inc">
                    <!-- Designation -->
                    <b-form-group label="Designation:" label-for="designation">
                      <b-form-input
                        id="designation"
                        v-model="form.company.designation"
                        type="text"
                        required
                        placeholder="Enter Designation"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.company.designation.$error &&
                            !$v.form.company.designation.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        designation is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="w-50 w-inc ml-4">
                    <!-- Your Relationship -->
                    <b-form-group
                      label="Your Relationship:"
                      label-for="relationship"
                    >
                      <b-form-input
                        id="relationship"
                        v-model="form.company.relationship"
                        type="text"
                        placeholder="Enter Your Relationship"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>
              <!-- Office Address -->
              <b-form-group label="Address:" label-for="officeAddress">
                <b-form-textarea
                  id="officeAddress"
                  v-model="form.company.address"
                  type="text"
                  required
                  rows="3"
                  max-rows="6"
                  placeholder="Enter Office Address"
                ></b-form-textarea>
                <div
                  v-if="
                    $v.form.company.address.$error &&
                      !$v.form.company.address.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  office address is required
                </div>
              </b-form-group>
            </div>
          </div>

          <!-- 3rd section Other Details -->
          <div class="card inception">
            <div class="tab-heading inception">
              <h3 class="text">Other Details</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <!-- Key Role -->

              <b-form-group label="Key Role:" label-for="role">
                <div class="w-50 w-inc">
                  <b-form-select
                    id="role"
                    v-model="form.keyRole"
                    label="text"
                    :value="value"
                    :options="keyRoleOptions"
                  ></b-form-select>
                  <div
                    v-if="
                      $v.form.keyRole.$error &&
                        !$v.form.keyRole.required &&
                        removeText
                    "
                    class="error-txt"
                  >
                    Key Role is required
                  </div>
                </div>
              </b-form-group>

              <b-form-group>
                <div class="d-flex other-details">
                  <div class="w-90 w-inc">
                    <!-- Batting Style -->
                    <b-form-group label="Batting Style:" label-for="bat">
                      <b-form-select
                        id="bat"
                        v-model="form.battingType"
                        label="text"
                        :value="value"
                        :options="battingOptions"
                      ></b-form-select>
                      <div
                        v-if="
                          $v.form.battingType.$error &&
                            !$v.form.battingType.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Batting Style is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="w-90 ml-4 w-inc">
                    <!-- Bowling Style -->
                    <b-form-group label="Bowling Style:" label-for="bowl">
                      <b-form-select
                        id="bowl"
                        v-model="form.bowlingType"
                        label="text"
                        :value="value"
                        :options="bowlingOptions"
                      ></b-form-select>
                      <div
                        v-if="
                          $v.form.bowlingType.$error &&
                            !$v.form.bowlingType.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Bowling Style is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="w-90 ml-4 w-inc">
                    <!-- Wicket Keeper -->
                    <b-form-group label="Wicket Keeper:" label-for="wk">
                      <b-form-select
                        id="wk"
                        v-model="form.isWicketkeeper"
                        label="text"
                        :value="value"
                        :options="booleanOptions"
                      ></b-form-select>
                      <div
                        v-if="
                          $v.form.isWicketkeeper.$error &&
                            !$v.form.isWicketkeeper.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Wicket Keeper is required
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>

              <b-form-group>
                <div class="d-flex other-details">
                  <div class="w-50 w-inc">
                    <!-- Played Last Year -->
                    <b-form-group label="Played Last Year:" label-for="played">
                      <b-form-select
                        id="played"
                        v-model="form.hasPlayed"
                        label="text"
                        :value="value"
                        :options="booleanOptions"
                      ></b-form-select>
                      <div
                        v-if="
                          $v.form.hasPlayed.$error &&
                            !$v.form.hasPlayed.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Played last year is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="w-50 w-inc ml-4">
                    <!-- Team -->
                    <b-form-group label="Team:" label-for="team">
                      <multiselect
                        id="team"
                        v-model="form.team"
                        placeholder="Search and Select a team"
                        label="name"
                        track-by="name"
                        class="w-50 w-inc"
                        :options="teamOptions"
                      ></multiselect>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>

              <!-- Jersey Name -->
              <b-form-group label="Jersey Name:" label-for="jerseyName">
                <b-form-input
                  id="jerseyName"
                  v-model="form.jerseyName"
                  type="text"
                  required
                  placeholder="Enter Jersey Name"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.jerseyName.$error &&
                      !$v.form.jerseyName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  jersey name is required
                </div>
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
                      <div
                        v-if="
                          $v.form.shirtSize.$error &&
                            !$v.form.shirtSize.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        shirt size is required
                      </div>
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
                      <div
                        v-if="
                          $v.form.trouserSize.$error &&
                            !$v.form.trouserSize.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        trouser size is required
                      </div>
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
                      <div
                        v-if="
                          $v.form.trackLength.$error &&
                            !$v.form.trackLength.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        track length is required
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>

              <b-form-group>
                <div class="d-flex w-50 w-inc">
                  <div class="w-50 w-inc">
                    <!-- Owner -->
                    <b-form-group label="Owner" label-for="owner">
                      <b-form-select
                        id="owner"
                        v-model="form.beOwner"
                        label="text"
                        :value="value"
                        :options="booleanOptions"
                      ></b-form-select>
                      <div
                        v-if="
                          $v.form.beOwner.$error &&
                            !$v.form.beOwner.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Owner is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="w-50 w-inc ml-4">
                    <!-- Sponsor -->
                    <b-form-group label="Sponsor" label-for="sponsor">
                      <b-form-select
                        id="sponsor"
                        v-model="form.beSponsor"
                        label="text"
                        :value="value"
                        :options="booleanOptions"
                      ></b-form-select>
                      <div
                        v-if="
                          $v.form.beSponsor.$error &&
                            !$v.form.beSponsor.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Sponsor is required
                      </div>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>
            </div>
          </div>

          <!-- 2nd section file upload -->
          <div class="card inception">
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
              <b-form-group label="Business Card:" label-for="businessCard">
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
              </b-form-group>
            </div>
          </div>

          <!-- 6th section terms and condition -->
          <div class="card inception">
            <div class="tab-heading inception">
              <h3 class="text">Terms & Conditions</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <!-- term checkbox -->
              <b-form-group
                label="Please consult our Privacy Policy , which includes important information."
              >
                <!-- <b-form-checkbox-group
                  placeholder="Enter First Name"
                  class="font-size-sm m-4"
                  v-model="form.condition"
                  :options="conditionOptions"
                  stacked
                ></b-form-checkbox-group> -->
                <b-form-checkbox
                  v-for="option in conditionOptions"
                  :key="option.value"
                  :value="[option.value]"
                  v-model="form.condition"
                  class="font-size-sm my-4 d-inline"
                  name="flavour-4a"
                >
                  {{ option.text }}
                </b-form-checkbox>
                <span v-b-modal.tnc class="pointer">
                  Terms and Conditions.
                </span>
                <tncView></tncView>
              </b-form-group>
            </div>
          </div>

          <!-- submit and reset button -->
          <div class="mb-5 text-center">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button class="ml-4" type="reset" variant="danger"
              >Reset</b-button
            >
          </div>
        </b-form>
      </div>
      <b-modal
        id="'paynow'"
        ref="paynow-button"
        title="Payment Process"
        hide-footer
        size="sm"
        no-stacking
        no-close-on-backdrop
      >
        <div class="m-auto">
          <b-embed
            type="iframe"
            :src="
              `https://storage.googleapis.com/jypl/paynow-button-small.html`
            "
            allowfullscreen
          ></b-embed>
        </div>
      </b-modal>
    </div>
    <footerSection></footerSection>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import tncView from "@/views/modal/tnc.vue";
import DatePicker from "vue2-datepicker";
import { Multiselect } from "vue-multiselect";
import { VueTelInput } from "vue-tel-input";
import moment from "moment";
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";
import service from "@/service/apiservice.js";

export default {
  components: {
    DatePicker,
    Multiselect,
    VueTelInput,
    headerSection,
    footerSection,
    tncView
  },
  data() {
    return {
      name: "",
      show: true,
      showError: false,
      showPhotograph: false,
      showBusinessCard: false,
      showIdProof: false,
      search: {},
      playerOptions: [],
      teamOptions: [
        {
          name: ""
        }
      ],
      errors: [],
      formShow: {
        selectedPlayer: ""
      },
      max: 10,
      bootstrapBtnPromise: "",
      submitStatus: "true",
      removeText: "true",

      conditionOptions: [
        {
          text: "I have read and accept the ",
          value: "two",
          showModal: true
        }
      ],

      booleanOptions: [
        { value: true, text: "Yes" },
        { value: false, text: "No" }
      ],

      keyRoleOptions: [
        { value: "Batsman", text: "Batsman" },
        { value: "Bowler", text: "Bowler" },
        { value: "All Rounder", text: "All Rounder" }
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
      message: "",
      form: {
        firstName: "",
        middleName: "",
        surname: "",
        email: "",
        dob: "",
        age: "",
        mobile: "",
        photograph: "",
        idProof: "",
        businessCard: "",
        team: "",
        address: "",
        company: {
          name: "",
          businessType: "",
          designation: "",
          relationship: "",
          address: ""
        },
        jerseyName: "",
        keyRole: "",
        hasPlayed: false,
        bowlingType: "",
        battingType: "",
        isWicketkeeper: false,
        beOwner: false,
        beSponsor: false,
        paymentStatus: "Pending",
        paymentMethod: "Online",
        shirtSize: "",
        trouserSize: "",
        trackLength: "",
        condition: [],
        checked: [],
        specialRegistration: true
      },

      // date picker script
      selectedGender: "",
      value: "",
      time1: "",
      time2: "",
      time3: "",
      // custom lang
      lang: {
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        pickers: [
          "next 7 days",
          // "next 30 days",
          "previous 7 days",
          "previous 30 days"
        ]
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: "Today",
          onClick: () => {
            this.time3 = [new Date(), new Date()];
          }
        }
      ]
    };
  },

  validations: {
    formShow: {
      selectedPlayer: {
        required
      }
    },
    form: {
      firstName: {
        required
      },
      surname: {
        required
      },
      email: {
        required
      },
      dob: {
        required
      },
      mobile: {
        required
      },
      address: {
        required
      },
      company: {
        name: {
          required
        },
        businessType: {
          required
        },
        designation: {
          required
        },
        address: {
          required
        }
      },
      jerseyName: {
        required
      },
      keyRole: {
        required
      },
      hasPlayed: {
        required
      },
      bowlingType: {
        required
      },
      battingType: {
        required
      },
      isWicketkeeper: {
        required
      },
      beOwner: {
        required
      },
      beSponsor: {
        required
      },
      shirtSize: {
        required
      },
      trouserSize: {
        required
      },
      trackLength: {
        required
      }
    }
  },
  created() {
    this.getSettings();
  },
  methods: {
    getSettings() {
      service.searchSettings({}, setting => {
        if (setting.data.length > 0) {
          if (setting.data[0].message) {
            this.showMessage = true;
            this.message = setting.data[0].message;
            this.getPlayerList();
            this.getTeamList();
          } else {
            this.showMessage = false;
            this.getPlayerList();
            this.getTeamList();
          }
        } else {
          this.showMessage = false;
          this.getPlayerList();
          this.getTeamList();
        }
      });
    },
    getPlayerList() {
      service.searchPlayerList(this.search, playerList => {
        this.playerOptions = playerList.data.result;
      });
    },
    getTeamList() {
      service.searchTeamList({}, teamList => {
        this.teamOptions = teamList.data;
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
    customLabel({ fullName, team }) {
      if (team) {
        return `${fullName} – ${team}`;
      } else {
        return `${fullName}`;
      }
    },
    onSelectedPlayer(e) {
      e.preventDefault();
      if (
        this.formShow.selectedPlayer == "" ||
        this.formShow.selectedPlayer == null ||
        this.formShow.selectedPlayer == undefined
      ) {
        this.showError = true;
      } else {
        this.showError = false;
        service.checkPlayerRegisteredOrNot(
          this.formShow.selectedPlayer,
          playerAvailable => {
            if (playerAvailable.status == 204) {
              this.form = _.cloneDeep(this.formShow.selectedPlayer);
              delete this.form.invoiceId;
              delete this.form.playerId;
              delete this.form._id;
              delete this.form.__v;
              delete this.form.updatedAt;
              delete this.form.createdAt;
              delete this.form.fullName;
              delete this.form.registrationDate;
              this.form.paymentStatus = "Pending";
              this.form.paymentMethod = "Online";
              if (this.formShow.selectedPlayer.company) {
                this.form.company = this.formShow.selectedPlayer.company;
              } else {
                this.form.company = {};
              }
              if (this.formShow.selectedPlayer.mobile) {
                this.form.mobile = this.formShow.selectedPlayer.mobile.toString();
              } else {
                this.form.mobile = "";
              }
              this.selectDate(this.formShow.selectedPlayer.dob);
              if (this.formShow.selectedPlayer.team) {
                this.form.team = { name: this.formShow.selectedPlayer.team };
              }
              this.form.hasPlayed = true;
            } else {
              this.$toasted.error(
                "You have already registered for JYPL Season 4"
              );
              this.form = {
                firstName: "",
                middleName: "",
                surname: "",
                email: "",
                dob: "",
                age: "",
                mobile: "",
                photograph: "",
                idProof: "",
                businessCard: "",
                team: "",
                address: "",
                company: {
                  name: "",
                  businessType: "",
                  designation: "",
                  relationship: "",
                  address: ""
                },
                jerseyName: "",
                keyRole: "",
                hasPlayed: false,
                bowlingType: "",
                battingType: "",
                isWicketkeeper: false,
                beOwner: false,
                beSponsor: false,
                shirtSize: "",
                trouserSize: "",
                trackLength: "",
                condition: [],
                checked: [],
                specialRegistration: true
              };
            }
          }
        );
      }
    },

    ResetBtn() {
      this.removeText = false;
    },

    onSubmit(e) {
      e.preventDefault();
      if (this.form.photograph && this.form.idProof && this.form.businessCard) {
        if (this.form.condition && this.form.condition.length == 1) {
          var obj = _.cloneDeep(this.form);
          if (obj.team) {
            obj.team = obj.team.name;
          }
          obj.registrationDate = moment();
          obj.mobile = parseInt(obj.mobile);
          delete obj.condition;
          this.removeText = true;
          this.$v.form.$touch();
          if (this.$v.form.$error) {
             this.$toasted.error("All fields are mandatory except Team & Your Relationship with Company");
            return;
          } else {
            service.savePlayer(obj, result => {
              if (result.data == "Player Already Exist") {
                this.$toasted.error("Player Already Exist");
              } else if (result.data) {
                this.removeText = false;
                this.formShow = {
                  selectedPlayer: ""
                };
                this.form = {
                  firstName: "",
                  middleName: "",
                  surname: "",
                  email: "",
                  dob: "",
                  age: "",
                  mobile: "",
                  photograph: "",
                  idProof: "",
                  businessCard: "",
                  team: "",
                  address: "",
                  company: {
                    name: "",
                    businessType: "",
                    designation: "",
                    relationship: "",
                    address: ""
                  },
                  jerseyName: "",
                  keyRole: "",
                  hasPlayed: false,
                  bowlingType: "",
                  battingType: "",
                  isWicketkeeper: false,
                  beOwner: false,
                  beSponsor: false,
                  shirtSize: "",
                  trouserSize: "",
                  trackLength: "",
                  condition: [],
                  checked: [],
                  specialRegistration: true
                };
                this.$toasted.success("Player is added successfully");
                // this.$router.go(0);
                   this.$router.push({ path: "/thank-you" });
                // this.$bvModal._vm.$refs["paynow-button"].show("paynow");
                // setTimeout(() => {
                //   this.$router.go(0);
                // }, 15000);
              } else {
                this.$toasted.error("Retry adding the player.");
              }
            });
          }
        } else {
          this.$toasted.error("Accept Terms and Conditions");
        }
      } else {
        this.$toasted.error("All three images are mandatory");
      }
    },

    onReset() {
      this.form.firstName = "";
      this.form.middleName = "";
      this.form.surname = "";
      this.form.email = "";
      this.form.dob = "";
      this.form.age = "";
      this.form.mobile = "";
      this.form.photograph = "";
      this.form.address = "";
      this.form.businessCard = "";
      this.showBusinessCard = false;
      this.showIdProof = false;
      this.showPhotograph = false;
      this.showError = false;
      this.showForm = false;
      this.formShow = {
        selectedPlayer: ""
      };
      this.form.idProof = "";
      this.form.company.name = "";
      this.form.company.businessType = "";
      this.form.company.designation = "";
      this.form.company.relationship = "";
      this.form.company.address = "";
      this.form.company = {};
      this.form.condition = [];
      this.form.checked = [];
      this.form.keyRole = "";
      this.form.hasPlayed = false;
      this.form.team = "";
      this.form.battingType = "";
      this.form.isWicketkeeper = false;
      this.form.beOwner = false;
      this.form.beSponsor = false;
      this.form.shirtSize = "";
      this.form.trouserSize = "";
      this.form.trackLength = "";
      this.form.paymentStatus = "Pending";
      this.form.paymentMethod = "Online";
      this.form.bowlingType = "";
      this.form.specialRegistration = true;

      // Trick to reset/clear native browser form validation state
      this.show = true;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    selectDate: function(value) {
      this.form.age =
        moment(new Date()).format("YYYY") - moment(value).format("YYYY");
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
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          var formData = new FormData();
          formData.append("file", this.image);
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
    onClickIdentityFile() {
      this.$refs.fileInputIdentity.click();
    },
    onFileIdentityPicked() {
      var files = this.$refs.fileInputIdentity.files;
      if (files && files.length > 0 && files[0].name) {
        var filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          var formData = new FormData();
          formData.append("file", this.image);
          service.upload(formData, data => {
            if (data.data.data) {
              this.$toasted.success("Identity Image Uploaded Successfully");
              this.showIdProof = true;
              this.form.idProof = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Image");
      }
    },
    onClickCardFile() {
      this.$refs.fileInputCard.click();
    },
    onFileCardPicked() {
      var files = this.$refs.fileInputCard.files;
      if (files && files.length > 0 && files[0].name) {
        var filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          var formData = new FormData();
          formData.append("file", this.image);
          service.upload(formData, data => {
            if (data.data.data) {
              this.$toasted.success(
                "Business Card Image Uploaded Successfully"
              );
              this.showBusinessCard = true;
              this.form.businessCard = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Image");
      }
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
