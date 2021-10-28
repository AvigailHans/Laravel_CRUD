<template>
  <div>
    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <b-form-row>
          <b-form-group label="Application Name" class="col-md-6">
            <b-input v-model="application.name" />
          </b-form-group>
          <b-form-group label="Stripe ID" class="col-md-6">
            <b-input v-model="application.stripe_id" />
          </b-form-group>
        </b-form-row>
        <ladda-btn
          :loading="processing"
          @click.native="saveApplication"
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
      application: {},
      processing: false,
      projectPath: [
        { text: "Applications", to: "/applications" },
        { text: "", active: true },
      ],
    };
  },
  mounted() {
    this.getApplication();
  },
  methods: {
    saveApplication() {
      console.log(this.application);
      let self = this;
      self.processing = true;
      axios
        .post("/api/applications/" + this.$route.params.id, this.application)
        .then(
          function (response) {
            self.application = response.data;
            self.projectPath[1].text = response.data.name;
            self.$router.push({ path: "/applications/" + response.data.id });
            self.processing = false;
          },
          function (error) {
            self.processing = false;
          }
        );
    },
    getApplication() {
      let self = this;
      axios
        .get("/api/applications/" + this.$route.params.id)
        .then(function (response) {
          if (response.data && response.data.id) {
            self.application = response.data;
            self.projectPath[1].text = self.application.name;
            self.processing = false;
          }
        });
    },
  },
};
</script>