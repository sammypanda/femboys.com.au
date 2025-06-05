import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import inline from "lume/plugins/inline.ts";

// create the lume instance
const site = lume({
  src: "./src", // set the website source directory
});

// use fonts
site.copy("font");

// CSS with extra stuff :D
site.use(sass());

// --- boring capitalist SEO and indexing stuff ---
site.use(metas()); // automatically adding SEO and social tags
site.use(sitemap()); // pages of the site search engines will crawl..
site.use(robots()); // ..pages for them 'not' to crawl

// the convenience of img svgs with the functionality of in-line svgs
site.use(inline());

// make images in /img accessible to the built site
site.copy("img");

// use the lume instance
export default site;
