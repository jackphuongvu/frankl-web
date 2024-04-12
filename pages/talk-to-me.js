
import React, { useState, useEffect } from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic'

// import styles from '../styles/Home.module.css';

// import App from 'journal';

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('journal'),
//   { ssr: false }
// )
// console.log('DynamicComponentWithNoSSR: ', DynamicComponentWithNoSSR);

export default function TalkToMe() {

  // useEffect(() => {
  //   // console.log('app: ', App);
  //   //
  //   // const splash = document.getElementById('splash')!;
  //   const splash = document.getElementById('splash');
  //
  //   const startApp = (e => {
  //     if (e.altKey || e.ctrlKey || e.metaKey) {
  //       // user might be trying to do something else
  //       return;
  //     }
  //
  //     splash.classList.add('hide');
  //
  //     splash.removeEventListener('click', startApp);
  //     splash.removeEventListener('keyup', startApp);
  //
  //     const app = new App();
  //
  //     app.start();
  //
  //     // should be able to focus on ios so long as this
  //     // is called from within a click handler
  //     app.focusText();
  //   })
  //
  //   const onload = () => {
  //     if (window.location.hash) {
  //       window.location.hash = '';
  //     }
  //
  //     splash.focus();
  //
  //     splash.addEventListener('click', startApp);
  //     splash.addEventListener('keyup', startApp);
  //
  //     window.removeEventListener('load', onload);
  //   }
  //
  //   window.addEventListener('load', onload);
  // }, [])


  return (
   <>
     Hello, my name is Viktor Frankl
    {/*<main className="main" id="main">*/}
    {/*  <noscript>You need to enable JavaScript to run this app.</noscript>*/}
    {/*  <div id="container">*/}
    {/*    <canvas id="text-canvas"></canvas>*/}

    {/*    <canvas id="cursor-canvas"></canvas>*/}

    {/*    <div id="lp"><input type="text"/><input type="password"/></div>*/}
    {/*    /!*<script type="text/javascript">*!/*/}
    {/*    /!*  setTimeout(function () {*!/*/}
    {/*    /!*  document.getElementById('lp').style.display = 'none';*!/*/}
    {/*    /!*}, 75)*!/*/}
    {/*    /!*</script>*!/*/}

    {/*    <input*/}
    {/*      type="text"*/}
    {/*      id="text-input"*/}
    {/*      tabIndex="0"*/}
    {/*      autoComplete="one-time-code"*/}
    {/*      autoCorrect="off"*/}
    {/*      data-lpignore="true"*/}
    {/*    />*/}
    {/*  </div>*/}
    {/*  <aside id="splash" tabIndex="0">*/}
    {/*    <h2>Click anywhere to type...</h2>*/}
    {/*  </aside>*/}
    {/*</main>*/}

    {/*<audio*/}
    {/*  preload="auto"*/}
    {/*  id="keypress"*/}
    {/*  src="/static/audio/keypress.mp3"*/}
    {/*></audio>*/}
    {/*<audio preload="auto" id="return" src="/static/audio/return.mp3"></audio>*/}

    {/*<DynamicComponentWithNoSSR />*/}
    {/*<script src="/dist/main.js"></script>*/}

    </>
  )

}