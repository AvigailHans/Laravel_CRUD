<template>
  <div>
    <b-card header="Update Your Profile: " header-tag="h6" v-if="user">
      <b-form-row>
        <b-form-group label="First Name" class="col-6">
          <b-input v-model="user.name" />
        </b-form-group>
        <b-form-group label="Last Name" class="col-6">
          <b-input v-model="user.l_name" />
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-form-group label="Email" class="col-6">
          <b-input v-model="user.email" />
        </b-form-group>
        <b-form-group label="Password" class="col-6">
          <b-input v-model="user.password" />
        </b-form-group>
      </b-form-row>
    </b-card>
    <nav class="layout-footer footer bg-footer-theme">
      <div class="container-fluid container-p-x p-3">
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
<script>
export default {
  data() {
    return {
      processing: false,
      user: {},
    };
  },
  mounted() {
    let self = this;
    axios.get("/api/profile/").then(function (response) {
      self.user = response.data;
    });
  },
  methods: {
    save() {
      this.processing = true;
      let self = this;
      axios.post("/api/profile/", this.user).then(function (response) {
        self.user = response.data;
        self.processing = false;
      });
    },
  },
};
</script>