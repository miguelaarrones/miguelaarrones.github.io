<template>
  <div class="work">
    <div class="content">
      <div>
        <h2 class="green"><u>FDSA Desarrollo</u></h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            .NET Developer at FDSA.
          </div>
          <h3 class="green">What I did there?</h3>
          <div>
            <ul style="list-style-type:circle;">
              <li>Write clean, scalable code using .NET programming languages.</li>
              <li>Test and deploy applications and systems.</li>
              <li>Revise, update, refactor and debug code.</li>
              <li>Utilized the latest software development tools, techniques, and approaches.</li>
            </ul>
          </div>
          <h3 class="green">Their website:</h3>
          <a href="https://www.fdsa.es/en/" target="_blank">FDSA.es</a>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <h2 class="green"><u>Webbeds</u></h2>
        <div>
          <h3 class="green">Description</h3>
          <div>
            .NET Developer at Webbeds.
          </div>
          <h3 class="green">What I did there?</h3>
          <div>
            <ul style="list-style-type:circle;">
              <li>Write clean, scalable code using .NET programming languages.</li>
              <li>Test and deploy applications and systems.</li>
              <li>Revise, update, refactor and debug code.</li>
              <li>Improve existing software.</li>
              <li>Utilized the latest software development tools, techniques, and approaches.</li>
              <li>Analyzed and designed new systems and applications.</li>
            </ul>
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
  .work {
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
    width: 50%;
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
