import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
    src: "./src" // set the website source directory
});

site.use(metas());
site.use(robots());
site.use(sass());
site.use(sitemap());

export default site;
