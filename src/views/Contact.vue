<template>
  <div class="about">
    <div class="content">
        <h2 class="green"><u>Where to find me?</u></h2>
      <div>
        <ul>
          <a href="https://www.linkedin.com/in/maarrones/">On LinkedIn</a> <br>
          <a href="https://x.com/V3shat">On Twitter</a> <br>
          <a href="https://github.com/miguelaarrones/">On GitHub</a> <br>
          <a href="mailto:miguelaarrones@icloud.com">Or mail me!</a>
        </ul>   
      </div>
    </div>
  </div>  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    width: 100%;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 33%;
  }
  .content div {
    flex-basis: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
}

@media (max-width: 1024px) {
  .about {
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
