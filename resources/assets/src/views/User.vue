<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link to="/users/new" class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <b-form-row>
          <b-form-group label="User name" class="col-md-6">
            <b-input v-model="user.name" />
          </b-form-group>
          <b-form-group label="User last name" class="col-md-6">
            <b-input v-model="user.l_name" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Email" class="col-md-6">
            <b-input v-model="user.email" />
          </b-form-group>
          <b-form-group label="Password" class="col-md-6">
            <b-input v-model="user.password" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Level" class="col-md-6">
            <select
              v-if="$store.state.user.level > 80"
              v-model="user.level"
              class="custom-select"
            >
              <option value="100">Manager</option>
              <option value="80">Boardman</option>
              <option value="50">Organization Manager</option>
            </select>
          </b-form-group>
          <b-form-group
            label="Country"
            class="col-md-6"
            v-if="$store.state.user.level > 80 && user.level == 80"
          >
            <select v-model="user.country" class="custom-select">
              <option value="can">Canada</option>
              <option value="us">USA</option>
            </select>
          </b-form-group>
        </b-form-row>
      </div>
    </div>
    <nav class="layout-footer footer bg-footer-theme">
      <div class="container-fluid container-p-x p-3">
        <ladda-btn
          :loading="processing"
          @click.native="save"
          data-style="expand-right"
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
  mounted() {
    this.getUser();
  },
  watch: {
    $route() {
      this.getUser();
    },
  },
  data() {
    return {
      projectPath: [
        { text: "Users", to: "/users" },
        { text: "", active: true },
      ],
      processing: false,
      user: {},
    };
  },
  methods: {
    getUser() {
      let self = this;
      if (this.$route.params.id == "new") {
        self.projectPath[1].text = "New user";
        self.user = {};
        self.processing = false;
      } else {
        self.processing = true;
        axios
          .get("/api/users/" + this.$route.params.id)
          .then(function (response) {
            if (response.data.id) {
              self.user = response.data;
              self.projectPath[1].text = response.data.name;
              self.$router.push({ path: "/users/" + response.data.id });
              self.processing = false;
            }
          });
      }
    },
    save() {
      let self = this;
      self.processing = true;
      axios
        .post("/api/users/" + this.$route.params.id, self.user)
        .then(function (response) {
          self.user = response.data;
          self.projectPath[1].text = response.data.name;
          self.processing = false;
          self.$router.push({ path: "/users/" + response.data.id });
        });
    },
  },
};
</script>