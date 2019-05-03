import Upload from "./Upload";

var dashRoutes = [
  {
    path: "/dashboard-page",
    name: "Upload",
    icon: "arrows-1_cloud-upload-94",
    component: Upload
  },
  { redirect: true, path: "/", pathTo: "/dashboard-page", name: "Dashboard" }
];
export default dashRoutes;
