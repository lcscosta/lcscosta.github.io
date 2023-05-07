import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
    src: './src',
    server: {
    port: 3030,
  },
});

site.use(sass());

export default site;
