import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "echarts";

Vue.use(Vuetify);

export default new Vuetify({
  Icons: {
    iconfont: "fa" || "md",
  },
  theme: {
    themes: {
      dark: {
        background: "#eeeeee",
      },
    },
  },
});
