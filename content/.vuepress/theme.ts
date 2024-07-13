import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://cece.re",
  author: {
    name: "Stefano Cecere",
    url: "https://cece.re",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  repo: "StefanoCecere/cecere.xyz",
  docsDir: "content",
  // navbar
  navbar,
  // sidebar
  sidebar,
  footer: "Stefano Cecere",
  pageInfo: ["Category", "Tag"],
  displayFooter: true,
  encrypt: {
    config: {
      "/xyz/bubolibro_142.html": ["1234"],
    },
  },

  blog: {
    description: "Play well, Die Happy",
    intro: "/intro.html",
    articleInfo: ["Date", "Category", "Tag"],
    medias: {
      Discord: "https://example.com",
      Email: "mailto:info@example.com",
      Facebook: "https://example.com",
      GitHub: "https://example.com",
      Instagram: "https://example.com",
      Linkedin: "https://example.com",
      Twitter: "https://example.com",
      Youtube: "https://example.com",
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,
    
    readingTime: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/components/src/.vuepress/theme.ts

    components: {
      components: [
        "Badge", 
        "VPCard",
        "YouTube",
      ],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
