<template>
  <sidenav
    v-if="$store.state.showSidenav"
    :custom_class="$store.state.mcolor"
    :class="[
      $store.state.isTransparent,
      $store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    :style="$store.state.isRTL ? 'overflow-x: hidden' : ''"
  >
    <!-- nav -->

    <navbar
      v-if="$store.state.showNavbar"
      :class="[navClasses]"
      :text-white="$store.state.isAbsolute ? 'text-white opacity-8' : ''"
      :min-nav="navbarMinimize"
    />

    <router-view></router-view>
    <app-footer v-show="$store.state.showFooter" />
  </main>
</template>

<script>
import Navbar from "@/app/admin/layout/Navbars/Navbar.vue";
import { mapMutations } from "vuex";
import AppFooter from "@/app/admin/layout/Footer.vue";
import Sidenav from "@/app/admin/layout/Sidenav/index.vue";
export default {
  components: {
    Sidenav,
    AppFooter,
    Navbar,
  },

  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": true,
        // "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state.isAbsolute,
        // "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
};
</script>

<style></style>
