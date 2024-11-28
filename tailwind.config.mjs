/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      colors: {
        "orange-950": "rgba(31, 11, 0, 1)",
        "orange-900": "rgba(61, 21, 0, 1)",
        "orange-800": "rgba(122, 43, 0, 1)",
        "orange-700": "rgba(184, 64, 0, 1)",
        "orange-600": "rgba(245, 86, 0, 1)",
        "orange-500": "rgba(255, 123, 51, 1)",
        "orange-400": "rgba(255, 149, 92, 1)",
        "orange-300": "rgba(255, 175, 133, 1)",
        "orange-200": "rgba(255, 202, 173, 1)",
        "orange-100": "rgba(255, 228, 214, 1)",
        "orange-50": "rgba(255, 243, 235, 1)",
        "blue-950": "rgba(7, 7, 9, 1)",
        "blue-900": "rgba(12, 11, 14, 1)",
        "blue-800": "rgba(24, 22, 28, 1)",
        "blue-700": "rgba(38, 36, 46, 1)",
        "blue-600": "rgba(49, 47, 60, 1)",
        "blue-500": "rgba(62, 58, 75, 1)",
        "blue-400": "rgba(97, 91, 118, 1)",
        "blue-300": "rgba(135, 128, 157, 1)",
        "blue-200": "rgba(173, 169, 189, 1)",
        "blue-100": "rgba(214, 212, 222, 1)",
        "blue-50": "rgba(236, 235, 239, 1)",
        "beige-950": "rgba(51, 39, 0, 1)",
        "beige-900": "rgba(102, 77, 0, 1)",
        "beige-800": "rgba(199, 149, 2, 1)",
        "beige-700": "rgba(255, 203, 45, 1)",
        "beige-600": "rgba(255, 228, 148, 1)",
        "beige-500": "rgba(255, 253, 247, 1)",
        "beige-400": "rgba(255, 254, 250, 1)",
        "beige-300": "rgba(255, 254, 250, 1)",
        "beige-200": "rgba(255, 254, 250, 1)",
        "beige-100": "rgba(255, 255, 255, 1)",
        "beige-50": "rgba(255, 255, 255, 1)",
        "beige-550": "rgba(251, 248, 239, 1)",
      },
      //     'white': '#fff',
      //     'black': '#000',
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "160px",
      "6xl": "208px",
      "7xl": "320px",
      "8xl": "360px",
      "9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Afacad", "sans-serif"],
      display: ["Bagel Fat One"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      paragraphmobile: ["1rem", { lineHeight: "1.875rem" }],
      header4mobile: ["1.0625rem", { lineHeight: "normal" }],
      header3mobile: ["1.25rem", { lineHeight: "normal" }],
      header2mobile: ["1.5625rem", { lineHeight: "normal" }],
      header1mobile: ["2.5rem", { lineHeight: "normal" }],

      header1: ["6.26rem", { lineHeight: "normal" }],
      header2: ["2.8125rem", { lineHeight: "normal" }],
      header3: ["1.875rem", { lineHeight: "normal" }],
      header4: ["1.625rem", { lineHeight: "normal" }],
      paragraph: ["1.3125rem", { lineHeight: "2.70625rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    borderRadius: {
      none: "0px",
      small: "1.25rem",
      large: "4.38rem",
      full: "10.875rem",
    },

    /* Box shadows herunder */
    boxShadow: {
      drop4: "0px 4px 4px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      drop6: "0px 4px 6px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      drop8: "0px 4px 8px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      inner6: "inset 0px 2px 6px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
    },

    extend: {
      
      /* Tilføj din egen farvepalette nedenfor */
      // colors: {
      //     transparent: 'transparent',
      //     current: 'currentColor',
      //     'farvenavn': {
      //         50: '#hexkode',
      //         100: '#hexkode',
      //         200: '#hexkode',
      //         300: '#hexkode',
      //         400: '#hexkode',
      //         500: '#hexkode',
      //         600: '#hexkode',
      //         700: '#hexkode',
      //         800: '#hexkode',
      //         900: '#hexkode',
      //     },
      //     'white': '#fff',
      //     'black': '#000',
      // },
      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },
      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },
      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },
      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },
      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
