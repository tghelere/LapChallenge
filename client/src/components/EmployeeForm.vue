<template>
  <div class="blue p-5">
    <div class="container">
      <h1>Cadastre-se</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form>
        <div class="row">
          <div class="col-md-3 my-1">
            <input type="text" class="form-control" placeholder="Nome">
          </div>
          <div class="col-md-3 my-1">
            <input type="text" class="form-control" placeholder="Sobrenome">
          </div>
          <div class="col-md-3 my-1">
            <input type="number" class="form-control" placeholder="Participação">
          </div>
          <div class="col-md-2 my-1">
            <button class="btn">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.blue{ background-color: #00B8E2; }
h1{ color: #fff; font-size: 2em; text-transform: uppercase }
p{ color: #fff; }
button{ color: #fff; border: 1px solid #fff; background-color: #00B8E2; border-radius: 0; cursor: pointer; }
button:hover{ color: #00B8E2; background-color: #fff;}
</style>
