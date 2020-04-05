<template>
  <div id="map"></div>
</template>

<script>
import { getLatestStat } from '@/services/dataAPI'
export default {
  name: 'MapView',
  data: () => ({}),
  mounted () {
    this.mapboxgl.accessToken = 'pk.eyJ1IjoicHJhYmlyIiwiYSI6ImNrOG16OHdxYzA2dGMzZ3BpaWFpdjZ1dmIifQ.InlqukfNIviSi3m7cOjG1Q'
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


    this.map.getCanvas().style.cursor = 'pointer'
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
        var coordinates = e.features[0].geometry.coordinates.slice()
        var state = e.features[0].properties.state
        var total_cases = e.features[0].properties.total_cases
        var active = e.features[0].properties.active
        var deaths = e.features[0].properties.deaths
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }
        vm.popup.setLngLat(coordinates).setHTML(`
          <table>
            <tr><td class="font-weight-bold">State</td><td class="font-weight-bold">` + state + `</td></tr>
            <tr><td>Total Cases</td><td class="font-weight-bold">` + parseInt(total_cases) + `</td></tr>
            <tr><td>Active Cases</td><td class="font-weight-bold">` + parseInt(active) + `</td></tr>
            <tr><td>Deaths</td><td class="font-weight-bold red--text">` + parseInt(deaths) + `</td></tr>
          </table>
          `).addTo(vm.map)
      })
         
      this.map.on('mouseleave', 'points', function() {
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
