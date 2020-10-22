<template>
  <h1 :style="{ color: $store.state.power ? 'green' : 'red' }">
    Power: {{ $store.state.power }}
  </h1>
  <small> or </small>
  <h1 :style="{ color: $store.state.power ? 'green' : 'red' }">
    Power: {{ $store.getters.powerText }}
  </h1>
</template>
