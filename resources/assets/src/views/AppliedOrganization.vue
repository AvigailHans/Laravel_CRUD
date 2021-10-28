<template>
  <div v-if="organization.id">
    <b-nav tabs class="tabs-alt float-right">
      <b-nav-item
        :active="activeTab == 'Details'"
        @click="activeTab = 'Details'"
      >
        Details</b-nav-item
      >
      <b-nav-item :active="activeTab == 'Files'" @click="activeTab = 'Files'">
        Files
      </b-nav-item>
    </b-nav>
    <h4 class="font-weight-bold py-3 mb-4">
      {{ organization.name }}
    </h4>
    <div v-if="activeTab == 'Details'">
      <div class="row">
        <div class="col-sm-12 col-xl-6">
          <b-card header="Organization Details: " header-tag="h6" class="mb-4">
            <b-form-group label="Name" label-class="pr-md-4" :label-cols-md="2">
              <b-input
                :state="$v.organization.name.required"
                v-model="organization.name"
              />
            </b-form-group>
            <b-form-group
              label="Reg.Number"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="$v.organization.number.required"
                v-model="organization.number"
              />
            </b-form-group>
            <b-form-group
              label="Name of authorized signatory"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="$v.organization.authorized_signatory.required"
                v-model="organization.authorized_signatory"
              />
            </b-form-group>
            <b-form-group
              label="Address"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="$v.organization.address.required"
                v-model="organization.address"
              />
            </b-form-group>
            <b-form-group
              label="Phone"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="$v.organization.phone.required"
                v-model="organization.phone"
              />
            </b-form-group>
            <b-form-group
              label="Email"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="!$v.organization.email.$invalid"
                v-model="organization.email"
              />
            </b-form-group>
            <b-form-group
              label="Description"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-textarea
                :state="$v.organization.description.required"
                v-model="organization.description"
              />
            </b-form-group>
          </b-card>
        </div>
        <div class="col-sm-12 col-xl-6">
          <b-card header="User Details: " header-tag="h6" class="mb-4">
            <b-form-group
              label="First Name"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="$v.organization.user.name.required"
                v-model="organization.user.name"
              />
            </b-form-group>
            <b-form-group
              label="Last Name"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="$v.organization.user.l_name.required"
                v-model="organization.user.l_name"
              />
            </b-form-group>
            <b-form-group
              label="Email"
              label-class="pr-md-4"
              :label-cols-md="2"
            >
              <b-input
                :state="!$v.organization.user.email.$invalid"
                v-model="organization.user.email"
              />
            </b-form-group>
          </b-card>
        </div>
      </div>
    </div>
    <div v-if="activeTab == 'Files'">
      <b-card header="Files: " header-tag="h6" class="mb-4">
        <b-card
          bg-variant="transparent"
          border-variant="primary"
          v-for="file in organization.files"
          :key="file.id"
        >
          <div class="row justify-content-between no-gutters">
            {{ file.file_name }}
            <span>
              <b-btn
                @click="downloadFile(file.file_name)"
                variant="success"
                class="btn-xs"
                >Show</b-btn
              >
            </span>
          </div>
        </b-card>
      </b-card>
    </div>
    <b-modal id="modal-organization" header-tag="h2" hide-footer ref="myEngage">
      <div slot="modal-title">Enter Reason</div>
      <b-form>
        <b-form-group label="Reason">
          <b-textarea v-model="organization.reason" />
        </b-form-group>
      </b-form>
      <ladda-btn
        :loading="processing"
        @click.native="update_status()"
        data-style="expand-right"
        class="ml-2 btn btn-success btn-sm float-right"
        :disabled="organization.reason == '' || organization.reason == null"
      >
        <i aria-hidden="true" class="ion ion-ios-checkmark-circle-outline"></i>
        Send
      </ladda-btn>
      <b-btn
        @click="$bvModal.hide('modal-organization')"
        class="btn btn-danger btn-sm"
        >Cancel</b-btn
      >
    </b-modal>
    <form-action-bar>
      <ladda-btn
        :loading="processing"
        @click.native="update_status(true)"
        data-style="expand-right"
        class="btn btn-success float-right ml-2"
      >
        <i aria-hidden="true" class="ion ion-ios-checkmark-circle-outline"></i>
        Approve
      </ladda-btn>
      <b-btn
        style="float: right"
        v-b-modal.modal-organization
        @click="status = 'declined'"
        class="ml-2"
        variant="danger"
        ><i aria-hidden="true" class="ion ion-ios-close-circle-outline"></i>
        Decline
      </b-btn>
    </form-action-bar>
  </div>
</template>
<style src="@/vendor/libs/vue-dropzone/vue-dropzone.scss" lang="scss"></style>
<script>
import Vue from "vue";
import vue2Dropzone from "vue2-dropzone";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "OrganizationApply",
  metaInfo: {
    title: "OrganizationApply",
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  props: {},
  validations: {
    organization: {
      authorized_signatory: { required },
      name: { required },
      number: { required },
      description: { required },
      phone: { required },
      address: { required },
      email: { required, email },
      user: {
        name: { required },
        l_name: { required },
        email: { required, email },
      },
    },
  },
  mounted() {
    this.getOrganization();
  },
  data() {
    return {
      processing: false,
      status: null,
      activeTab: "Details",
      organization: {},
      delID: null,
    };
  },
  methods: {
    // apply() {
    //   axios
    //     .post(
    //       "/api/organizations/" + this.organization.id + "/apply",
    //       this.organization
    //     )
    //     .then(function (response) {
    //       console.log(response);
    //     });
    // },
    saveOrganization() {
      axios
        .post("/api/organizations/" + this.organization.id, this.organization)
        .then(function (response) {
          console.log(response);
        });
    },
    downloadFile: function (file_name) {
      window.open("/api/get_file/" + file_name, "_blank");
    },
    getOrganization() {
      let self = this;
      axios
        .get("/api/organizations/" + this.$route.params.id)
        .then(function (response) {
          console.log(response.data);
          self.organization = response.data;
        });
    },
    update_status(approved = false) {
      if (approved) {
        this.status = "Approved";
      }
      let self = this;
      this.processing = true;
      axios
        .post("/api/organizations/" + this.organization.id + "/update_status", {
          status: this.status,
          reason: this.organization.reason,
        })
        .then(function (response) {
          self.processing = false;
          self.$router.push({ path: "/organizations/" });
        });
    },
  },
};
</script>
