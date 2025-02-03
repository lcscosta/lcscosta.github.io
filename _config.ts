import lume from "lume/mod.ts";

const site = lume(
    {
        src: 'src/',
        server: {
            port: 5000,
        },
        includes: "_includes/",
    }
);

site.copy("_includes");

export default site;
