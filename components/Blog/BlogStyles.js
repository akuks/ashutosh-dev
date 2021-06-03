import css from 'styled-jsx/css'

export default css.global `
    .blogs ul > li > ul > li {
      font-weight: 400;
      font-size: 0.8em;
    }

    p, ul, li {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, Arial;
      letter-spacing: calc(0px * 16);
      line-height: calc(2.5px * 16);
      color: rgb(14, 16, 26);
      -webkit-font-smoothing: antialiased;
      animation-iteration-count: 1!important;
    }

    .blogs h1, p, ul {
      margin-left: 1.5em;
    }

    .blogs p { 
      display: block;
      font-size: calc(1.375px * 16);
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 1.5em;
      margin-inline-end: 1.5em;
      font-weight: 400;
    }

    .blogs ul {
      margin-left: 1.5em;
      font-size: 1.2em;
      list-style-type: disc;
    }

    .blogs ul > li {
      margin-left: 1.5em;
      font-weight: 400;
    }


    @media (min-width: 768px) {
      .blogs h1 {
        font-size: 1.5em;
        text-align: left;
        margin: 1.5em;
        font-weight: bold;
      }

      .blogs h2 {
        font-size: 1.2em;
        text-align: left;
        margin: 1.5em;
        font-weight: bold;
      }
    }

`