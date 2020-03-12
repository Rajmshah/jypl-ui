<template>
  <div>
    <headerSection></headerSection>
    <div class="container">
      <div class="column">
        <b-form name="form" @submit="onSubmit" @reset="onReset()" v-if="show">
          <!-- 1st section Company Details -->
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
                  <div class="w-50 w-inc ml-4"></div>
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

          <!-- 2nd section personal detail -->
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
                <div class="d-flex w-inc">
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

                  <div class="ml-4 w-50 w-inc">
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
                  <div
                    v-if="
                      $v.form.dob.$error && !$v.form.dob.required && removeText
                    "
                    class="error-txt"
                  >
                    Select the date of birth.
                  </div>
                </div>
              </b-form-group>
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

          <!-- 4th section spouse detail -->
          <div class="card inception">
            <div class="tab-heading inception">
              <h3 class="text">Spouse Details</h3>
            </div>
            <!--  -->
            <div class="text-left main-form-section mx-5">
              <!-- first name -->
              <b-form-group label="First Name:" label-for="spouseFirstName">
                <b-form-input
                  id="spouseFirstName"
                  v-model="form.spouse.firstName"
                  type="text"
                  required
                  placeholder="Enter Spouse First Name"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.spouse.firstName.$error &&
                      !$v.form.spouse.firstName.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  Spouse first name is required
                </div>
              </b-form-group>

              <!-- middle name -->
              <b-form-group label="Middle Name:" label-for="spouseMiddleName">
                <b-form-input
                  id="spouseMiddleName"
                  type="text"
                  v-model="form.spouse.middleName"
                  placeholder="Enter Spouse Middle Name"
                ></b-form-input>
              </b-form-group>

              <!-- last name -->
              <b-form-group label="Surname:" label-for="spouseSurname">
                <b-form-input
                  id="spouseSurname"
                  type="text"
                  v-model="form.spouse.surname"
                  required
                  placeholder="Enter Spouse Surname"
                ></b-form-input>
                <div
                  v-if="
                    $v.form.spouse.surname.$error &&
                      !$v.form.spouse.surname.required &&
                      removeText
                  "
                  class="error-txt"
                >
                  Spouse Surname is required
                </div>
              </b-form-group>

              <!-- email and mobile -->
              <b-form-group>
                <div class="d-flex w-inc">
                  <!-- email -->
                  <div class="w-50 w-inc">
                    <b-form-group label="Email" label-for="spouse-email">
                      <b-form-input
                        id="spouse-email"
                        type="email"
                        v-model="form.spouse.email"
                        required
                        placeholder="Enter Spouse Email"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.spouse.email.$error &&
                            !$v.form.spouse.email.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Spouse email is required
                      </div>
                    </b-form-group>
                  </div>
                  <!-- mobile no -->
                  <div class="ml-4 w-50 w-inc">
                    <b-form-group label="Mobile No" label-for="spouse-mobile">
                      <b-form-input
                        id="spouse-mobile"
                        type="tel"
                        v-model="form.spouse.mobile"
                        required
                        :maxlength="max"
                        placeholder="Enter Spouse Mobile No"
                      ></b-form-input>
                      <div
                        v-if="
                          $v.form.spouse.mobile.$error &&
                            !$v.form.spouse.mobile.required &&
                            removeText
                        "
                        class="error-txt"
                      >
                        Spouse mobile no is required
                      </div>
                    </b-form-group>
                  </div>
                  <div class="ml-4 w-50 w-inc">
                    <b-form-group
                      class
                      id="spouse-calendar"
                      name="spouse-calendar"
                      label="Date Of Birth"
                      required
                    >
                      <date-picker
                        v-model="form.spouse.dob"
                        type="number"
                        :lang="'en'"
                        :first-day-of-week="1"
                        :format="'DD-MM-YYYY'"
                        class
                        :placeholder="'Select Spouse Date'"
                      ></date-picker>
                    </b-form-group>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="text-left main-form-section mx-5">
                  <b-form-group
                    label="Profile Picture:"
                    label-for="spouse-profile"
                  >
                    <b-button
                      id="spouse-profile"
                      raised
                      @click="onClickSpouseProfileFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="profile"
                      style="display:none"
                      ref="fileInputSpouseProfile"
                      accept="image/*"
                      @input="onFileSpouseProfilePicked()"
                    />
                    <div class="my-1" v-if="showSpousePhotograph">
                      <img
                        :src="form.spouse.photograph | serverimage"
                        width="100"
                        height="auto"
                        alt
                      />
                    </div>
                  </b-form-group>
                  <b-form-group
                    label="Identity Proof:"
                    label-for="spouse-identityProof"
                  >
                    <b-button
                      id="spouse-identityProof"
                      raised
                      @click="onClickSpouseIdentityFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="spouse-identity"
                      style="display:none"
                      ref="fileInputSpouseIdentity"
                      accept="image/*"
                      @input="onFileSpouseIdentityPicked()"
                    />
                    <div class="my-1" v-if="showSpouseIdProof">
                      <img
                        :src="form.spouse.idProof | serverimage"
                        width="100"
                        height="auto"
                        alt
                      />
                    </div>
                  </b-form-group>
                </div>
              </b-form-group>
            </div>
          </div>

          <!-- 5th section spouse file upload -->
          <!-- <div class="card inception">
            <div class="tab-heading inception">
              <h3 class="text">Upload Documents</h3>
            </div>
            <div class="text-left main-form-section mx-5">
              <b-form-group label="Profile Picture:" label-for="spouse-profile">
                <b-button
                  id="spouse-profile"
                  raised
                  @click="onClickSpouseProfileFile()"
                  variant="primary"
                  type="button"
                  >Upload</b-button
                >
                <input
                  type="file"
                  name="profile"
                  style="display:none"
                  ref="fileInputSpouseProfile"
                  accept="image/*"
                  @input="onFileSpouseProfilePicked()"
                />
                <div class="my-1" v-if="showSpousePhotograph">
                  <img
                    :src="form.spouse.photograph | serverimage"
                    width="100"
                    height="auto"
                    alt
                  />
                </div>
              </b-form-group>
              <b-form-group
                label="Identity Proof:"
                label-for="spouse-identityProof"
              >
                <b-button
                  id="spouse-identityProof"
                  raised
                  @click="onClickSpouseIdentityFile()"
                  variant="primary"
                  type="button"
                  >Upload</b-button
                >
                <input
                  type="file"
                  name="spouse-identity"
                  style="display:none"
                  ref="fileInputSpouseIdentity"
                  accept="image/*"
                  @input="onFileSpouseIdentityPicked()"
                />
                <div class="my-1" v-if="showSpouseIdProof">
                  <img
                    :src="form.spouse.idProof | serverimage"
                    width="100"
                    height="auto"
                    alt
                  />
                </div>
              </b-form-group>
            </div>
          </div> -->

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
      <!-- <b-modal
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
      </b-modal> -->
    </div>
    <footerSection></footerSection>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import tncView from "@/views/modal/tnc.vue";
import DatePicker from "vue2-datepicker";
import { Multiselect } from "vue-multiselect";
import moment from "moment";
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";
import service from "@/service/apiservice.js";

export default {
  components: {
    DatePicker,
    Multiselect,
    headerSection,
    footerSection,
    tncView
  },
  data() {
    return {
      requestData: [],
      name: "",
      show: true,
      showError: false,
      showPhotograph: false,
      showIdProof: false,
      showSpousePhotograph: false,
      showSpouseIdProof: false,
      search: {},
      errors: [],
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
      showMessage: false,
      message: "",
      form: {
        firstName: "",
        middleName: "",
        surname: "",
        email: "",
        dob: "",
        mobile: "",
        photograph: "",
        idProof: "",
        spouse: {
          firstName: "",
          middleName: "",
          surname: "",
          email: "",
          dob: "",
          mobile: "",
          photograph: "",
          idProof: ""
        },
        company: {
          name: "",
          address: ""
        },
        paymentStatus: "Pending",
        paymentMethod: "Online",
        condition: [],
        checked: [],
        specialRegistration: false
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
      spouse: {
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
        }
      },
      company: {
        name: {
          required
        },
        address: {
          required
        }
      }
    }
  },
  methods: {
    ResetBtn() {
      this.removeText = false;
    },
    onSubmit(e) {
      e.preventDefault();
      //   if (this.form.photograph && this.form.idProof) {
      if (this.form.condition && this.form.condition.length == 1) {
        var obj = _.cloneDeep(this.form);
        obj.registrationDate = moment();
        obj.mobile = parseInt(obj.mobile);
        delete obj.condition;
        this.removeText = true;
        this.$v.form.$touch();
        if (this.$v.form.$error) {
          this.$toasted.error("All fields are mandatory.");
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
                specialRegistration: false
              };
              this.$toasted.success("Player is added successfully");
              // this.$router.go(0);
              this.$router.push({ path: "/thank-you" });
              // this.$bvModal._vm.$refs["paynow-button"].show("paynow");
              // setTimeout(() => {
              // this.$router.go(0);
              // }, 15000);
            } else {
              this.$toasted.error("Retry adding the player.");
            }
          });
        }
      } else {
        this.$toasted.error("Accept Terms and Conditions");
      }
      //   } else {
      //     this.$toasted.error("All three images are mandatory");
      //   }
    },

    onReset() {
      this.form.firstName = "";
      this.form.middleName = "";
      this.form.surname = "";
      this.form.email = "";
      this.form.dob = "";
      this.form.mobile = "";
      this.form.photograph = "";
      this.form.idProof = "";
      this.showIdProof = false;
      this.showPhotograph = false;
      this.showSpouseIdProof = false;
      this.showSpousePhotograph = false;
      this.showError = false;
      this.showForm = false;
      this.form.spouse = {};
      this.form.spouse.firstName = "";
      this.form.spouse.middleName = "";
      this.form.spouse.surname = "";
      this.form.spouse.email = "";
      this.form.spouse.dob = "";
      this.form.spouse.mobile = "";
      this.form.spouse.photograph = "";
      this.form.spouse.idProof = "";
      this.form.company = {};
      this.form.company.name = "";
      this.form.company.address = "";
      this.form.condition = [];
      this.form.checked = [];
      this.form.paymentStatus = "Pending";
      this.form.paymentMethod = "Online";
      this.form.specialRegistration = false;

      // Trick to reset/clear native browser form validation state
      this.show = true;
      this.$nextTick(() => {
        this.show = true;
      });
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
    onClickSpouseProfileFile() {
      this.$refs.fileInputSpouseProfile.click();
    },
    onFileSpouseProfilePicked() {
      var files = this.$refs.fileInputSpouseProfile.files;
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
                "Spouse Profile Image Uploaded Successfully"
              );
              this.showSpousePhotograph = true;
              this.form.spouse.photograph = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Spouse Profile Image");
      }
    },
    onClickSpouseIdentityFile() {
      this.$refs.fileInputSpouseIdentity.click();
    },
    onFileSpouseIdentityPicked() {
      var files = this.$refs.fileInputSpouseIdentity.files;
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
                "Spouse Identity Image Uploaded Successfully"
              );
              this.showSpouseIdProof = true;
              this.form.spouse.idProof = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Spouse Image");
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
