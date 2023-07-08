import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
    src: 'src/',
});

site.use(sass());
site.copy("CNAME");
site.copy("assets");

export default site;
