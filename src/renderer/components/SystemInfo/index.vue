<template>
  <div class="systemInfo">
    <div class="systemInfo-title">Information</div>
    <div class="systemInfo-items">
      <div class="systemInfo-item">
        <div class="systemInfo-name">Vue.js:</div>
        <div class="systemInfo-value">{{ vue }}</div>
      </div>
      <div class="systemInfo-item">
        <div class="systemInfo-name">Electron:</div>
        <div class="systemInfo-value">{{ electron }}</div>
      </div>
      <div class="systemInfo-item">
        <div class="systemInfo-name">Node:</div>
        <div class="systemInfo-value">{{ node }}</div>
      </div>
      <div class="systemInfo-item">
        <div class="systemInfo-name">Platform:</div>
        <div class="systemInfo-value">{{ platform }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      electron: process.versions['atom-shell'],
      node: process.versions.node,
      platform: require('os').platform(),
      vue: require('vue/package.json').version
    }
  }
}
</script>

<style lang="postcss" scoped>
.systemInfo {
  &-title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: 0.25px;
    margin-top: 10px;
  }
  &-items {
    margin-top: 8px;
  }
  &-item {
    display: flex;
    margin-bottom: 6px;
  }
  &-name {
    color: #6a6a6a;
    margin-right: 6px;
  }
  &-value {
    color: #35495e;
    font-weight: bold;
  }
}
</style>
