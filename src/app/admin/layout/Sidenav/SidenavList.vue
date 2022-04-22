<template>
  <div
    id="sidenav-collapse-main "
    class="w-auto h-auto collapse navbar-collapse overflow-hidden max-height-vh-100 h-100"
  >
    <ul class="navbar-nav h-100 overflow-auto">
      <li v-for="link in navigationLinks" :key="link.path" class="nav-item">
        <sidenav-collapse :nav-text="link.title" :to="link.path">
          <template #icon>
            <unicon class="svg-gray" :name="link.icon"></unicon>
          </template>
        </sidenav-collapse>
      </li>

      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          PAGES
        </h6>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import { navigationLinks } from "@/app/admin/navigation";
export default {
  name: "SidenavList",
  components: {
    SidenavCollapse,
  },
  props: {
    cardBg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: "Elkood",
      controls: "dashboardsExamples",
      isActive: "active",
      navigationLinks,
    };
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  svg {
    fill: #fff !important;
  }
}
</style>
