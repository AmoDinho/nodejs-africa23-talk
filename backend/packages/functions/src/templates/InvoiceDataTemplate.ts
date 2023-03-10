import { ICustomer } from '../types';
const head = `
<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
    <title>Load confirmation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    tailwind.config = {
      theme: {
        colors: {
          transparent: 'transparent',
    
          black: '#22292f',
          'grey-darker': '#434343',
          'grey-dark': '#52524E',
          grey: '#9A9B94',
          'grey-light': '#D4D6C8',
          'grey-lighter': '#E9E9E5',
          'white-full': '#FFFFFF',
          white: '#FAF9F9',
          'white-lighter': '#FCF5EE',
    
          'red-dark': '#D12737',
          red: '#F45B69',
          'red-light': '#E39DA4',
          'red-darkest': '#B60414',
          'red-lightest': '#FDD0D4',
    
          'yellow-darkest': '#C3A50B',
          'yellow-dark': '#D2B62B',
          yellow: '#FCD307',
          'yellow-light': '#FDDF4A',
          'yellow-lightest': '#FFEFA0',
    
          'green-darker': '#158A05',
          'green-dark': '#26D30D',
          green: '#4EF037',
          'green-light': '#80FF6F',
          'green-lightest': '#B9FFAF',
    
          'blue-darkest': '#0E749C',
          'blue-dark': '#26A5D7',
          blue: '#56CBF9',
          'blue-light': '#9DE3FF',
          'blue-lightest': '#A6E5FE',
        },
        screens: {
          s: '320px',
          's-max': [{ max: '411px' }],
          sl: '375px',
          sm: '575px',
          'sm-600': '600px',
          'sm-land': [{ min: '667px' }],
          md: '768px',
          lg: '992px',
          x: [{ max: '1024px' }],
          lapie: [{ min: '1280px', max: '1366px' }],
          xl: [{ min: '1500px' }],
        },
        fontFamily: {
          display: ['Saira'],
        },
        fontSize: {
          xs: '.75rem', // 12px
          sm: '.875rem', // 14px
          base: '1rem', // 16px
          lg: '1.125rem', // 18px
          xl: '1.25rem', // 20px
          '2xl': '1.5rem', // 24px
          '3xl': '1.875rem', // 30px
          '4xl': '2.25rem', // 36px
          '5xl': '3rem',
          '7xl': '5rem', // 48px
        },
        fontWeight: {
          hairline: 100,
          thin: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
        },
        leading: {
          none: 1,
          tight: 1.25,
          normal: 1.5,
          loose: 2,
        },
        textColors: (theme) => theme('colors'),
        backgroundColors: (theme) => theme('colors'),
        backgroundSize: {
          auto: 'auto',
          cover: 'cover',
          contain: 'contain',
        },
        borderWidths: {
          default: '1px',
          0: '0',
          2: '2px',
          4: '4px',
          8: '8px',
        },
        // borderColors: global.Object.assign(
        //   { default: theme => theme(colors["grey-light"]) },
        //   theme => theme("colors")
        // ),
        borderRadius: {
          none: '0',
          img: '10%',
          px: '5px',
          sm: '.125rem',
          default: '.25rem',
          lg: '25px',
          full: '9999px',
          'header-border': '0px 0px 220px 220px',
          'header-border-sm': '0px 0px 120px 120px',
        },
        width: {
          auto: 'auto',
          px: '1px',
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          24: '6rem',
          32: '8rem',
          48: '12rem',
          64: '16rem',
          '1/2': '50%',
          '1/3': '33.33333%',
          '2/3': '66.66667%',
          '1/4': '25%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '1/6': '16.66667%',
          '5/6': '83.33333%',
          full: '100%',
          screen: '100vw',
          300: '300px',
          320: '320px',
          350: '350px',
          400: '400px',
          500: '500px',
          img: '600px',
          700: '700px',
          750: '750px',
          800: '800px',
          card: '264px',
        },
        height: {
          card: '364px',
          auto: 'auto',
          px: '1px',
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          24: '6rem',
          32: '8rem',
          48: '12rem',
          64: '16rem',
          86: '20rem',
          full: '100%',
          screen: '100vh',
          img: '500px',
          90: '90px',
          150: '150px',
          200: '200px',
          250: '250px',
          350: '350px',
          400: '400px',
          450: '450px',
          490: '490px',
          500: '500px',
          550: '550px',
          600: '600px',
          650: '650px',
          750: '750px',
          800: '800px',
          imgHeader: '570px',
        },
        padding: {
          px: '1px',
          0: '0',
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          32: '8rem',
          38: '16rem',
          44: '20rem',
        },
        margin: {
          auto: 'auto',
          px: '1px',
          0: '0',
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          32: '8rem',
          40: '40%',
          imgHeader: '-85px',
        },
        boxShadow: {
          default: '0px 4px 4px  rgba(0,0,0,0.25)',
          md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
          lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
          inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
          outline: '0 0 0 3px rgba(52,144,220,0.5)',
          'lg-card': '0px 6px 12px rgba(0, 0, 0, 0.1);',
          none: 'none',
        },
        cursor: {
          auto: 'auto',
          default: 'default',
          pointer: 'pointer',
          wait: 'wait',
          text: 'text',
          move: 'move',
          'not-allowed': 'not-allowed',
        },
        zIndex: {
          100: 100,
        },
        backgroundPosition: {
          center: 'center center',
        },
        maxWidth: (theme, { breakpoints }) => ({
          none: 'none',
          xxs: '12rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '60%',
          full: '100%',
    
          ...breakpoints(theme('screens')),
        }),
      },
      variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        border: ['hover'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
      },
      plugins: [
        function ({ addComponents }) {
          const border = {
            '.border-top': {
              borderTop: '#F45B69  8px solid',
            },
          }
          const borderBottom = {
            '.border-bottom': {
              borderBottom: '#F45B69  8px solid',
            },
          }
    
          addComponents(borderBottom)
          addComponents(border)
        },
      ],
    }
  </script>
    </head>
    `;

export const InvoiceDataTemplate = (customerInfo: ICustomer) => `
<html>
${head}
<body>
<div class="bg-gray-50 min-h-screen flex-col overflow-hidden py-6 sm:py-12">
  <div class="p-10 flex justify-between">
    <h1 class="text-4xl font-bold text-grey-dark">My Invoices</h1>
    <h1 class="text-smal font-bold text-grey-dark">21 February 2430</h1>
  </div>
  <div class="p-5">
    <hr class="border-red" />
  </div>

  <div class="flex flex-row gap-5 p-10">
    <span class="flex flex-col">
      <h2 class="text-xl underline">Item</h2>
      <p>${customerInfo.tripName}</p>
    </span>

    <span class="flex flex-col">
      <h2 class="text-xl underline">Price</h2>
      <p>${customerInfo.price}</p>
    </span>

    <span class="flex flex-col">
      <h2 class="text-xl underline">Your Guide</h2>
      <p>${customerInfo.guide}</p>
    </span>
  </div>

  <div class="mt-16 flex p-4">
    <h2 class="text-2xl">Total:</h2>
    <p class="ml-3 text-2xl italic">${customerInfo.price}</p>
  </div>

  <div class="mt-16 flex p-4">
    <h2 class="text-2xl">Account holder:</h2>
    <p class="ml-3 text-2xl italic">${customerInfo.name}</p>
  </div>
</div>

</body>
</html>
`;
