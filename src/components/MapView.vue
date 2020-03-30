<template>
  <div id="map"></div>
</template>

<script>
  export default {
    name: 'MapView',
    data: () => ({}),
    mounted () {
      this.mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuZ2NodW4iLCJhIjoiV0lDeHhnOCJ9.BkIlp2X5n1zO7Lmb2SBbrw'
      // New Mapbox Instance
      this.map = new this.mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [78.9629, 20.5937],
        zoom: 3.5
      })
    }
  }
</script>

<style scoped>
#map { position: fixed; top: 0; bottom: 0; width: 100%; }
</style>
