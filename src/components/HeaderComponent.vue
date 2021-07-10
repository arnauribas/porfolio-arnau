<template>
    <main class="grid">
      <img id="autor" src="../assets/img/autor.png" alt="autor">
      <h1 class="title"><strong>Arnau Ribas</strong> <span id="apellido2">López</span></h1>
      <div class="title-block"></div>
      <div class="quote quote0"></div>
      <div class="quote quote1">Reus</div>
      <div class="quote quote2">DAW</div>
      <div class="contacto">
        <p>653817085</p>
        <p>arnau.ribas.cmrm17@gmail.com</p>
      </div>
      <div class="flecha">
        <img src="../assets/img/flecha.png" alt="">
      </div>
      <div class="lowercase">
        <ul>
          <li>
            <router-link to="/quedomino" active-class="active"> Que domino?</router-link>
          </li>
          <li>
            <router-link to="/wordpress" active-class="active"> Wordpress</router-link> 
          </li>
          <li>
            <router-link to="/javascript" active-class="active"> Javascript</router-link> 
          </li>
        </ul>
      </div>
    </main>
</template>
<script>
export default {
    name: 'HeaderComponent'
}

</script>