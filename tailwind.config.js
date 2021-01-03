module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#24283b",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.gray.600"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.blue.600"),
                textDecoration: "underline",
              },
            },
            figcaption: {
              textAlign: 'center',
            },
            img : {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.gray.500"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.gray.500"),
                textDecoration: "underline",
              },
            },
            blockquote: {
              color: theme('colors.gray.200'),
            },
            h2 : {
              color: theme('colors.gray.200'),
            },
            h3 : {
              color: theme('colors.gray.200'),
            },
            h4 : {
              color: theme('colors.gray.200'),
            },
            strong : {
              color: theme('colors.gray.100'),
              fontWeight: "bold",
            },
            code : {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["responsive", "dark"],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
