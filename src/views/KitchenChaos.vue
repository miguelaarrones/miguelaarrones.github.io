<script setup>
import UnityWebgl from 'unity-webgl';
import VueUnity from 'unity-webgl/vue'

const unityContext = new UnityWebgl({
  loaderUrl: '/GameBuilds/KitchenChaos/WebGL.loader.js',
  dataUrl: "/GameBuilds/KitchenChaos/WebGL.data",
  frameworkUrl: "/GameBuilds/KitchenChaos/WebGL.framework.js",
  codeUrl: "/GameBuilds/KitchenChaos/WebGL.wasm",
})

unityContext.on('device', () => alert('click device ...'))
</script>

<template>
  <div class="game">
      <div class="content">
        <h2 class="green"><u>Kitchen Chaos</u></h2>
        <div>
          <div class="unity">
            <VueUnity :unity="unityContext" width="800" height="600" />
        </div>
      </div>
    </div>
  </div>  
</template>


<style>
@media (min-width: 1024px) {
  .game {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .content div {
    flex-basis: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .unity {
    align-items: center; 
    justify-content: center; 
    display: flex;
    margin-bottom: 50px;
  }
}

@media (max-width: 1024px) {
  .game {
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
