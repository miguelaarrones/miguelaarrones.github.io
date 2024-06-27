<template>
  <router-link to="home" tag="button">X</router-link>
  <div class="projects">
    <div class="content">
      <div>
        <h2 class="green">Kitchen Chaos</h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            This game made in Unity is similar to Overcooked. Get ready, you have a limited time
            to prepare and deliver all the recipies you can. Try to get the maximum score with your goup of friends!
            (Pending a multiplayer update).
          </div>
          <h3 class="green">Watch A Trailer</h3>
          <a href="https:www.youtube.com" target="_blank">On Youtube</a>
          <h3 class="green">Download The Game</h3>
          <a href="https://github.com/miguelaarrones/KitchenChaos/releases/download/v0.0.1/KitchenChaos.v0.0.1.zip" target="_blank">Downloading the latest release</a>
          <h3 class="green">Check The Code</h3>
          <a href="https://github.com/miguelaarrones/KitchenChaos" target="_blank">On Github</a>
        </div>
      </div>
      <div>
        <h2 class="green">Builder Defender</h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            This game made in Unity is a mix between a tower defense game and a city builder game.
            You have to collect resources to build a base meanwhile you are being attacked by enemies.
            Use your resources to build towers that will defend your base and keep gathering!!
          </div>
          <h3 class="green">Watch A Trailer</h3>
          <a href="https:www.youtube.com" target="_blank">On Youtube</a>
          <h3 class="green">Download The Game</h3>
          <a href="https://github.com/miguelaarrones/BuilderDefenderGame/releases/download/v.0.0.2/BuilderDefenderGame-v.0.0.2.rar" target="_blank">Downloading the latest release</a>
          <h3 class="green">Check The Code</h3>
          <a href="https://github.com/miguelaarrones/BuilderDefenderGame" target="_blank">On Github</a>
        </div>
      </div>
      <div>
        <h2 class="green">Turn-based Strategy</h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            This game made in Unity is similar to X-COM. You have a team and must clean a level full of enemies.
            Using all your units move forward and plan well your actions. 
          </div>
          <h3 class="green">Watch A Trailer</h3>
          <a href="https:www.youtube.com" target="_blank">On Youtube</a>
          <h3 class="green">Download The Game</h3>
          <a href="https://veshat.itch.io/" target="_blank">Downloading the latest release</a>
          <h3 class="green">Check The Code</h3>
          <a href="https://github.com/miguelaarrones/TurnBasedStrategyGame" target="_blank">On Github</a>
        </div>
      </div>
      <!-- <div>
        <h2 class="green">Template</h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            Brief game description.
          </div>
          <h3 class="green">Watch A Trailer</h3>
          <a href="https:www.youtube.com" target="_blank">On Youtube</a>
          <h3 class="green">Download The Game</h3>
          <a href="--" target="_blank">Downloading the latest release</a>
          <h3 class="green">Check The Code</h3>
          <a href="https://github.com/miguelaarrones/" target="_blank">On Github</a>
        </div>
      </div> -->
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
    flex-basis: 30%;
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
