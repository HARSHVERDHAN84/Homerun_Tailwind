/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      backgroundColor: {
        'body-bg-color': 'rgba(238, 233, 223, 1)',
        'btn-bg-color': 'rgb(79, 117, 254)',
        'btn-bg-color-hover': 'rgb(37, 76, 218)',
        'nav-item-hover-bg-color' :'rgb(248, 244, 244)',
        'login-btn-hover-bg-color' : 'rgb(232, 229, 222)',
        'dropdown-bg-color' : 'rgb(249, 249, 249)',
        'main-content-bg-color' : 'rgba(251, 249, 245, 1)',
        'learn-more-btn-bg-color': 'rgb(45, 35, 35)',
        'learn-more-btn-hover-bg-color': 'rgb(31, 23, 23)',
        'black-bg-color' : 'rgb(24, 24, 24)',
        'card-brown-bg-color' : 'rgb(74, 62, 62)',
        'custom-brown-bg-transparent': 'rgb(45, 35, 35, .1)',
        'custom-Email-bg-hover-color' : 'rgb(45, 35, 35, 0.2)',
        'custom-Sign-up-bg-hover-color': 'rgba(244, 243, 243, 0.4)',
      },

      colors: {
        'custom-brown': 'rgb(45, 35, 35)',
        'custom-black': 'rgba(14, 16, 22, 0.95)',
        'custom_yellow': 'rgb(255, 187, 0)',
        'custom-white' : 'rgb(115, 107, 107)',
        'custom-brown-transparent': 'rgb(45, 35, 35, .7)',
        'custom-Email-Placholder-black' : 'rgb(51, 51, 51)',
        'custom_Border-gray' : 'rgba(45, 35, 35, .5)',
      },
      boxShadow: {
        'dropdown-hover-bg-shadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.2)', 
      },
      animation: {
        'move-diagonal': 'moveDiagonal 3s ease forwards',
      },

      keyframes: {
        moveDiagonal: {
        '0%' : {transform: 'translate(0, 0)'},
        '100%' : {transform: 'translate(-1%, -1%)'}
        }
      },

      fontFamily: {
        'myFont':  ['Oliver', 'sans-serif'],
        'myFont2': ['GT America', 'sans-serif'],
        'myFont3': ['GT Walsheim', 'sans-serif'],
      },

      gridTemplateColumns: {
      
        'footer-grid': 'repeat(4, minmax(0, 1.25fr))',
      },

      outlineWidth:{
         5:'2px',
      },
      outlineColor: {
        5:'rbga(45, 35, 35, .5)',
      },
      outlineOffset:{
        5:'0px',
      },
    
    },
  },
  plugins: [],
}

