<template>
  <router-link to="home" tag="button">X</router-link>
  <div class="work">
    <div class="content">
      WiP
      <div>
        <h2 class="green">FDSA Desarrollo</h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            .NET Developer at FDSA.
          </div>
          <h3 class="green">What I did there?</h3>
          <div>
            Programming.
          </div>
          <h3 class="green">Their website:</h3>
          <a href="https://www.fdsa.es/en/" target="_blank">FDSA.es</a>
        </div>
      </div>
    </div>
    <hr style="margin: 10px;">
    <div class="content">
      <div>
        <h2 class="green">Webbeds</h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            .NET Developer at Webbeds.
          </div>
          <h3 class="green">What I did there?</h3>
          <div>
            Programming.
          </div>
          <h3 class="green">Their website:</h3>
          <a href="https://www.webbeds.com" target="_blank">Webbeds.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .projects {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }
  .content div {
    flex-basis: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
}

@media (max-width: 1024px) {
  .projects {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .content div {
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
