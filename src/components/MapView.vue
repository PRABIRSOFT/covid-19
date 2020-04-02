<template>
  <div id="map"></div>
</template>

<script>
import { getLatestStat } from '@/services/dataAPI'
export default {
  name: 'MapView',
  data: () => ({}),
  mounted () {
    this.mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuZ2NodW4iLCJhIjoiV0lDeHhnOCJ9.BkIlp2X5n1zO7Lmb2SBbrw'
    // New Mapbox Instance
    this.map = new this.mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [78.9629, 20.5937],
      zoom: 3.5
    })

    this.popup = new this.mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    })

    this.load()
  },
  methods: {
    async load () {
      try {
        const res = await getLatestStat()
        this.map.addSource('points', {
          'type': 'geojson',
          'data': res.data['data']
        })
        var layerprop = ['interpolate', ['linear'], ['get', 'proba']]
        const colors  = ['rgb(0, 255, 0)', 'rgb(255, 0, 0)']
        res.data.cat.forEach(function(f, i) { layerprop.push(f), layerprop.push(colors[i])})
        this.showLayer(layerprop)
      } catch (ex) {
        alert("Upps Broken", ex)
      }
    },
    showLayer (layerprop) {
      var vm = this
      
      this.map.addLayer({
        'id': 'points',
        'type': 'circle',
        'source': 'points',
        'paint': {
          'circle-color': layerprop
        }
      })

      this.map.on('mouseenter', 'points', function(e) {
        vm.map.getCanvas().style.cursor = 'pointer'
        var coordinates = e.features[0].geometry.coordinates.slice()
        var deaths = e.features[0].properties.total_cases
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }
        vm.popup.setLngLat(coordinates).setHTML(deaths).addTo(this.map)
      })
         
      this.map.on('mouseleave', 'points', function() {
        vm.map.getCanvas().style.cursor = ''
        vm.popup.remove()
      })
    }
  }
}
</script>

<style>
#map { position: fixed; top: 0; bottom: 0; width: 100%; }
.mapboxgl-ctrl-logo {
  display: none;
}
.mapboxgl-popup {
  max-width: 400px;
}
</style>
