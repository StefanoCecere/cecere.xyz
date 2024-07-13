import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Stefano Cecere",
  description: "un giocatore multo",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
