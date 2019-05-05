import Upload from "./Upload/Upload";
import Profile from "./Profile/Profile";
import Data from "./Data/Data";
var dashRoutes = [
  {
    path: "/dashboard-page/upload",
    name: "Upload",
    icon: "arrows-1_cloud-upload-94",
    component: Upload
  },
  {
    path: "/dashboard-page/data",
    name: "Your Data",
    icon: "files_single-copy-04",
    component: Data
  },
  {
    path: "/dashboard-page/profile",
    name: "Your profile",
    icon: "users_single-02",
    component: Profile
  },


  { redirect: true, path: "/", pathTo: "/dashboard-page/upload", name: "Dashboard" }
];
export default dashRoutes;
