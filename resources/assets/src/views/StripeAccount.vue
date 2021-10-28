<template>
  <div>
    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <b-form-row>
          <b-form-group label="account Name" class="col-md-6">
            <b-input v-model="account.name" />
          </b-form-group>
          <b-form-group label="Stripe Id" class="col-md-4">
            <b-input v-model="account.stripe_id" />
          </b-form-group>
          <b-form-group label="Country" class="col-md-2">
            <select v-model="account.country" class="custom-select">
              <option value="US">USA</option>
              <option value="CAN">Canada</option>
            </select>
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Live Api Key" class="col-md-6">
            <b-input
              v-model="account.updated_live_api_key"
              :placeholder="account.show_live_api_key"
            />
          </b-form-group>
          <b-form-group label="Test Api Key" class="col-md-6">
            <b-input v-model="account.test_api_key" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Combix Platform Name" class="col-md-4">
            <b-input v-model="account.combix_platform_name" />
          </b-form-group>
          <b-form-group label="Combix campaign #" class="col-md-2">
            <b-input v-model="account.combix_default_campaign_id" />
          </b-form-group>
          <b-form-group label="Ne'eman fee" class="col-md-3">
            <b-input v-model="account.fee" />
          </b-form-group>
          <b-form-group label="Upload to API" class="col-md-3">
            <b-check
              value="1"
              class="mt-2"
              unchecked-value="0"
              v-model="account.upload_to_api"
              >Upload to combix?</b-check
            >
          </b-form-group>
        </b-form-row>

        <ladda-btn
          :loading="processing"
          @click.native="saveAccount"
          data-style="expand-right"
          class="btn btn-success btn-lg float-right"
        >
          <i
            aria-hidden="true"
            class="ion ion-ios-checkmark-circle-outline"
          ></i>
          Save
        </ladda-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      account: {},
      processing: false,
      projectPath: [
        { text: "Stripe Accounts", to: "/stripe_accounts" },
        { text: "", active: true },
      ],
    };
  },
  mounted() {
    this.getAccount();
  },
  methods: {
    saveAccount() {
      let self = this;
      self.processing = true;
      axios.post("/api/stripe_accounts/" + this.account.id, this.account).then(
        function (response) {
          console.log(response.data);
          self.account = response.data;
          self.projectPath[1].text = response.data.name;
          self.$router.push({ path: "/stripe_accounts/" + response.data.id });
          self.processing = false;
        },
        function (error) {
          self.processing = false;
        }
      );
    },
    getAccount() {
      let self = this;
      axios
        .get("/api/stripe_accounts/" + this.$route.params.id)
        .then(function (response) {
          self.account = response.data;
          self.projectPath[1].text = self.account.name;
          self.processing = false;
        });
    },
  },
};
</script>