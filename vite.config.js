
import cfb from "cfb.js";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      "/api": { // localhost:3000/api
        bypass: function (req, res, proxyOptions) {
          const defaultClient = cfb.ApiClient.instance;
          const ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
          ApiKeyAuth.apiKey = req.headers["authorization"];
          const apiInstance = new cfb.TeamsApi();
          apiInstance.getTeams({}).then(
            function (data) {
              console.log("API called successfully. ");
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(data));
            },
            function (error) {
              console.error(error);
              res.statusMessage = "Internal Server Error";
            }
          );
        },
      },
    },
  },
});

