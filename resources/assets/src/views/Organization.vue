<template>
  <div>
    <h4 class="py-3 mb-4">
      <select
        v-if="$store.state.user.level > 80"
        v-model="organization.status"
        class="custom-select float-right col-2"
        @change="save"
      >
        <option value="New">New</option>
        <option value="Approved">Approved</option>
        <option value="Documents requested">Documents requested</option>
        <option value="Agreement sent">Agreement sent</option>
        <option value="Declined">Declined</option>
      </select>
      <a
        v-if="organization.id"
        :href="$store.state.data.public_url + '/projects/' + organization.slug"
        target="_blank"
        class="float-right col-1 btn"
        ><i aria-hidden="true" class="ion ion-ios-eye"></i
      ></a>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <b-tabs class="nav-tabs-top nav-responsive-xl mb-10" v-model="tabIndex">
      <b-tab title="Dashboard" :active="organization.id != undefined">
        <organization-show :organization="organization"></organization-show>
      </b-tab>
      <b-tab title="Edit details" :active="organization.id == undefined">
        <organization-edit :organization="organization"></organization-edit>
      </b-tab>
      <b-tab title="Content">
        <organization-content
          :organization="organization"
        ></organization-content>
      </b-tab>
      <b-tab title="Media" lazy>
        <organization-media :organization="organization"></organization-media>
      </b-tab>
      <b-tab title="Donations" v-if="$store.state.user.level > 80">
        <div class="card">
          <div class="card-body">
            <donations-table
              :organization_id="organization.id"
              v-if="organization.id"
            />
          </div>
        </div>
      </b-tab>
      <b-tab title="Files">
        <div class="card">
          <div class="card-body">
            <b-card header="Upload Files" header-tag="h5" class="mb-4 mt-3">
              <b-form-group label="File Type " class="col-md-9">
                <b-select
                  v-model="file_type_id"
                  placeholder="Select file type"
                  :options="$store.state.data.file_types"
                  value-field="id"
                  text-field="name"
                />
              </b-form-group>
              <vue-dropzone
                v-if="file_type_id"
                id="my-dropzone"
                :options="dropzoneOptions"
                v-on:vdropzone-sending="sendingEvent"
                @vdropzone-complete="afterComplete"
                ref="dropzoneInstance"
              />
              <template v-else>
                Select the type of the file you want to upload
              </template>
            </b-card>
            <table
              class="table"
              v-if="organization.files && organization.files.length"
            >
              <tr v-for="file in organization.files" :key="file.id">
                <td>
                  <b-btn
                    @click="downloadFile(file.file_name)"
                    variant="link"
                    class="btn-xs p-0"
                    ><i aria-hidden="true" class="ion ion-ios-download"/> {{ file.file_name }}
                  </b-btn>
                    <div v-if="file.type" class="text-muted">
                      {{ file.type.name }}
                    </div></a
                  >
                </td>
              </tr>
            </table>
            <div v-else class="alert alert-secondary">No files</div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Embed Codes">
        <div class="card">
          <div class="card-body">
            <div class="form-group" v-if="organization.us_code">
              <label for="" class="w-100"
                >US
                <button
                  class="btn btn-primary btn-xs float-right"
                  @click="copyURL('us')"
                >
                  Click to copy
                </button>
                <button
                  class="btn btn-success btn-xs float-right mr-1"
                  @click="$refs['showUs'].toggle('#toggle-btn')"
                >
                  Preview
                </button>
              </label>
              <pre class="border p-3">{{ frame("us") }}</pre>
              <b-modal size="md" ref="showUs" id="show-us" hide-footer>
                <div v-html="frame('us')"></div>
              </b-modal>
            </div>
            <div class="form-group" v-if="organization.can_code">
              <label for="" class="w-100"
                >Canada
                <button
                  name=""
                  id=""
                  class="btn btn-primary btn-xs float-right"
                  href="#"
                  role="button"
                  @click="copyURL('can')"
                >
                  Click to copy
                </button>
                <button
                  class="btn btn-success btn-xs float-right mr-1"
                  @click="$refs['showCan'].toggle('#toggle-btn')"
                >
                  Preview
                </button>
              </label>
              <pre class="border p-3">{{ frame("can") }}</pre>
              <b-modal size="md" ref="showCan" id="show-us" hide-footer>
                <div v-html="frame('can')"></div>
              </b-modal>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Campaigns" v-if="$store.state.user.level > 80">
        <campaign
          class="card border-secondary m-4"
          v-for="campaign in organization.campaigns"
          :key="campaign.id"
          :campaign="campaign"
        />
        <div class="text-center my-5">
          <button
            type="button"
            @click="addCampaign"
            class="btn btn-outline-primary rounded-pill"
          >
            New Campaign
          </button>
        </div>
      </b-tab>
    </b-tabs>
    <nav
      class="layout-footer footer bg-footer-theme"
      v-if="tabIndex == 1 || tabIndex == 2 || tabIndex == 3"
    >
      <div class="container-fluid container-p-x p-3">
        <button @click="deleteOrganization" class="btn btn-danger">
          Delete
        </button>
        <ladda-btn
          :loading="processing"
          @click.native="save"
          class="btn btn-success btn-lg float-right"
        >
          <i
            aria-hidden="true"
            class="ion ion-ios-checkmark-circle-outline"
          ></i>
          Save
        </ladda-btn>
        <div class="clearfix"></div>
      </div>
    </nav>
  </div>
</template>
<style src="@/vendor/libs/vue-toasted/vue-toasted.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-dropzone/vue-dropzone.scss" lang="scss"></style>

<script>
import Vue from "vue";
import OrganizationShow from "../components/OrganizationShow";
import OrganizationEdit from "../components/OrganizationEdit";
import OrganizationContent from "../components/OrganizationContent";
import OrganizationMedia from "../components/OrganizationMedia";
import Campaign from "../components/Campaign";
import DonationsTable from "../components/DonationsTable";
import Toasted from "vue-toasted";
import vue2Dropzone from "vue2-dropzone";
Vue.use(Toasted);

export default {
  components: {
    OrganizationShow,
    OrganizationContent,
    OrganizationMedia,
    OrganizationEdit,
    Campaign,
    DonationsTable,
    Toasted,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      file_type_id: null,
      tabIndex: null,
      processing: false,
      editMode: false,
      projectPath: [
        { text: "Organizations", to: "/organizations" },
        { text: "", active: true },
      ],
      organization: {},
      dropzoneOptions: {
        url: "/public/upload_file",
        parallelUploads: 2,
        addRemoveLinks: true,
        uploadMultiple: false,
        previewTemplate: `<div class="dz-preview dz-file-preview"><div class="dz-details"><div class="dz-thumbnail"><img data-dz-thumbnail><span class="dz-nopreview">No preview</span><div class="dz-success-mark"></div><div class="dz-error-mark"></div><div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div></div></div><div class="dz-filename" data-dz-name></div><div class="dz-size" data-dz-size></div></div></div>`,
        init: function () {
          this.on("success", function (file, responseText) {
            console.log(responseText);
          });
        },
      },
    };
  },
  mounted() {
    if (this.$store.state.user.level == 50) {
      this.$router.push({
        path: "/organizations/" + this.$store.state.user.organization.id,
      });
    }

    this.getOrganization();
  },
  watch: {
    $route() {
      this.getOrganization();
    },
  },
  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("id", this.organization.id);
      formData.append("file_type_id", this.file_type_id);
    },
    downloadFile: function (file_name) {
      window.open("/api/get_file/" + file_name, "_blank");
    },
    afterComplete(file) {
      console.log(file);
      let self = this;
      if (file.status == "success")
        this.$refs.dropzoneInstance.dropzone.removeFile(file);
      this.getOrganization();
    },
    save() {
      let self = this;
      this.processing = true;
      axios
        .post("/api/organizations/" + this.$route.params.id, this.organization)
        .then(function (response) {
          if (response.data.status == "failed") {
            self.$toasted.show(response.data.message, {
              theme: "toasted-primary",
              position: "top-right",
              className: "border-success text-danger",
              duration: 2000,
            });
            this.processing = false;
          } else {
            self.$router.push({ path: "/organizations/" + response.data.id });
            self.$nextTick(function () {
              self.$route.params.id = response.data.id;
              self.getOrganization();
              this.processing = false;
            });
          }
        });
    },
    frame(country) {
      return (
        '<iframe style="border:0; max-width:500px; min-width:350px; height:690px;" src="' +
        this.$store.state.data.public_url +
        "/embed/" +
        this.organization.id +
        "/" +
        country +
        '"/>'
      );
    },
    copyURL(country) {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = this.frame(country);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.$toasted.show("Copied!", {
        theme: "toasted-primary",
        position: "top-right",
        className: "border-success text-${this.toastVariant}",
        duration: 2000,
      });
    },
    addCampaign() {
      this.organization.campaigns.push({
        new: true,
        organization_id: this.organization.id,
        sources: [{}],
      });
    },
    deleteOrganization() {
      let self = this;
      if (confirm("Are you sure you want to delete this organization?")) {
        axios
          .get("/api/organizations/" + this.$route.params.id + "/delete")
          .then(function (response) {
            self.$router.push({ path: "/organizations" });
          });
      } else {
        console.log("no");
      }
    },
    getOrganization() {
      let self = this;
      axios
        .get("/api/organizations/" + this.$route.params.id)
        .then(function (response) {
          self.organization = response.data;
          if (!self.organization.user) {
            self.organization.user = {
              name: "",
              l_name: "",
              email: "",
            };
          }
          self.projectPath[1].text = self.organization.name;
          if (!self.organization.actual_content) {
            self.organization.actual_content = {
              excerpt: "",
              content: "",
            };
          }
          if (self.organization.video == null) {
            self.organization.video = {
              url: "",
            };
          }
        });
    },
  },
};
</script>

<style lang="scss">
.list-group-item .label {
  min-width: 70px;
}
#show-us .modal-dialog.modal-md,
#show-can .modal-dialog.modal-md {
  width: 400px;
}
</style>