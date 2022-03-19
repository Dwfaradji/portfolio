<template>
  <footer>
    <ul class="footer__icone">
      <li>
        <a href="https://www.linkedin.com/in/boucif-faradji" target="_blank"><i class="fab fa-linkedin-in"></i> </a>
      </li>
      <li>
        <a href="https://github.com/Dwfaradji" target="_blank"><i class="fab fa-github"></i> </a>
      </li>
      <li>
        <a href="" target="_blank"><i class="fab fa-twitter"></i> </a>
      </li>
    </ul>
    <p class="footer__text">Copyright 2022 - Mentions legales</p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
a {
  color: white;
}
footer {
  background-color: black;
  color: white;
  height: 10em;
}
li {
  list-style: none;
}
.footer__icone {
  padding-top: 3rem;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.footer__text {
  display: flex;
  justify-content: center;
}
</style>
