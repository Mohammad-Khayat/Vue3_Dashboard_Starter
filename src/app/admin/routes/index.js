import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
let AdminRoutes = [
  {
    path: "",
    redirect: "/dashboard/home",
  },
  {
    path: "/dashboard/lab",
    name: "Lab",
    component: () => import("@/app/admin/services/lab/Lab.vue"),
  },
  {
    path: "/dashboard/home",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/dashboard/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/dashboard/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/dashboard/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/dashboard/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
];
export { AdminRoutes };
