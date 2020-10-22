<template>
  <h1 :style="{ color: $store.state.power ? 'green' : 'red' }">
    Power: {{ $store.state.power }}
  </h1>
</template>
