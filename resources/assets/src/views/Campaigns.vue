<template>
  <div>
    <h4 class="py-3 mb-4">
      <button @click="addCampaign" class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </button>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <campaign
          class="card border-secondary mb-4"
          v-for="campaign in campaigns"
          :campaign="campaign"
          :key="campaign.id"
        />
        <div
          class="btn btn-pill btn-success"
          @click="getCampaigns"
          v-if="loadLink"
        >
          Load More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Campaign from "../components/Campaign";
export default {
  components: { Campaign },
  data() {
    return {
      projectPath: [{ text: "Campaigns", to: "/campaigns" }],
      campaigns: [],
      loadLink: null,
    };
  },
  mounted() {
    this.getCampaigns();
  },
  methods: {
    addCampaign() {
      this.campaigns.unshift({
        id: "new",
        new: true,
        sources: [{}],
      });
    },
    getCampaigns() {
      let self = this;
      let url = "";
      if (!self.loadLink) {
        url = "/api/campaigns";
      } else {
        url = self.loadLink;
      }
      axios.get(url).then(function (response) {
        self.campaigns = self.campaigns.concat(response.data.data);
        self.loadLink = response.data.next_page_url;
      });
    },
  },
};
</script>