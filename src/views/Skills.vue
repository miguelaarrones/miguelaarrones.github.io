<template>
  <router-link to="home" tag="button">X</router-link>
  <div class="skills">
    <div class="content">
      <div>
        <h2 class="green">Programming languages</h2>
        <div>
          C#, Modern C++, Python, Java, Javascript, PHP.
        </div>
      </div>
      <div>
        <h2 class="green">Video Games Technologies</h2>
        <div>
          Unreal Engine, Unity.
        </div>
      </div>
      <div>
        <h2 class="green">Video Games Concepts</h2>
        <div>
          Virtual reality, Augmented reality, AI for games, Multiplayer, Physics/Collisions.
        </div>
      </div>
      <div>
        <h2 class="green">Attitude </h2>
        <div>
         Love to learn, Self-learner, Hard worker, Creative, Profcient team player, Curious.
        </div>
      </div>
      <div>
        <h2 class="green">Others</h2>
        <div>
          .Net, Git, MySQL, HTML, CSS, jQuery, Linux.
        </div>
      </div>
    </div>
  </div>
</template>

<style>

@media (min-width: 1024px) {
  .skills {
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
  .skills {
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
