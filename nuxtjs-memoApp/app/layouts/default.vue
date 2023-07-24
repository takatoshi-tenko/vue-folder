<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.bl_btn{
  width: 100%;
  max-width: 275px;
  margin: 0 auto;
}

.el_btn__skyblue {
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #53B9C6;
  color: #fff;
  text-decoration: none;
  background-color: #53B9C6;
  padding: 10px 30px;
  box-shadow: 0px 3px 6px #ccc;
  transition: .3s;
  font-weight: bold;
}

.el_btn__skyblue:hover{
  color: #53B9C6;
  transition: .3s;
  background-color: #fff;
  box-shadow: none;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
