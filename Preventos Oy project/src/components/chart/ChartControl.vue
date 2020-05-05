<template>
  <div class="chart">
    <b-row v-if="chartHeader !== ''">
      <b-col>
        <h1>Kohde: {{ chartHeader }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col >
        <h2 class="otsikko">Kuvaaja</h2>
        <line-chart
                v-if="yAxleAMeasureSelected !== null"
          ref="lineChart"
          :styles="myStyles"
          v-bind:data="datacollection"
          v-bind:options="options"
        ></line-chart>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="chartControls" sm="6" v-if="yAxleAMeasureSelected !== null">
        <b-button class="chartControlButtons" variant="outline-primary" v-on:click="chartMove(1)">◀</b-button>
        <b-button class="chartControlButtons" variant="outline-primary" v-on:click="chartZoom(0)">−</b-button>
        <b-button class="chartControlButtons" variant="outline-primary" v-on:click="chartZoom(1)">+</b-button>
        <b-button class="chartControlButtons" variant="outline-primary" v-on:click="chartMove(0)">▶</b-button>
      </b-col>
    </b-row>
    <div ></div>
    <b-row  class="justify-content-md-center" style="margin: 1em 0 0 0">
      <b-col v-if="yAxleAMeasureSelected === null" sm="6" md="5" lg="10">
        <b-form-group
                v-if="true"
                label="Valitse Y1-akselin tieto">
          <b-form-select
                  id="yAxleAMeasure"
                  :options="dsMeasures"
                  v-model="yAxleAMeasureSelected"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col v-else sm="6" md="5">
        <b-form-group
                v-if="true"
                label="Valitse Y1-akselin tietoXX">
          <b-form-select
                  id="yAxleAMeasure"
                  :options="dsMeasures"
                  v-model="yAxleAMeasureSelected"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="6" md="5">
        <b-form-group
                v-if="yAxleAMeasureSelected !== null"
                label="Valitse Y2-akselin tieto">
          <b-form-select
                  id="yAxleBMeasure"
                  :options="dsMeasures"
                  v-model="yAxleBMeasureSelected"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
                v-if="false"
                label="Valitse mittauspaikka">
          <b-form-select
                  id="measurementLocation"
                  :options="dsLocations"
                  v-model="locationSelected"
          ></b-form-select>
        </b-form-group>


      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from "@/components/chart/LineChart.js";
import jsonData from "@/components/chart/data.json";
import sensorData from "@/components/chart/sensorData.json";
import {default as chartModels }from "@/components/chart/chartModels.js";


///
///
/// Tämä moduuli tarvitsee syötteinä
///   - Käyttäjäkohtaisen mittauspaikkojen listauksen.
///   - Datan valitusta mittapisteestä tietyltä aikaväliltä.
///
export default {
  name: "chart",
  components: {
    LineChart
  },
  mounted() {
    this.getChartOptions();
    this.dsLocations = this.getLocations(this.graphData[0]);
    this.dsMeasures = this.getMeasures(this.graphData[0].data);
    this.datacollection = JSON.parse(JSON.stringify(chartModels.placeholder));
  },
  data() {
    return {
      yAxleAComponentSize:10,
      nothingToShow:{greyVeil:true},
      graphColors:["#249EBF","#00557A"],
      graphData: jsonData,
      chartHeader: "",
      datasets: [],
      yAxleAMeasure: "",
      yAxleBMeasure: "",
      dsLocations: { value: "", text: "" },
      locationSelected: null,
      dsMeasures: { value: "", text: "" },
      yAxleAMeasureSelected: null,
      yAxleBMeasureSelected: null,
      generatedDatapoints: 50,
      generatedDatasets: 1,
      datacollection: {
        labels: ["1", "2", "3"],
        datasets: [{ data: [1, 3, 2] }]
      },
      datacollectionCopy:{},
      datasetOrigData: [],
      datasetOrigLabels: [],
      chartLocation: {
        origEnd: 1,
        view: { start: 0, end: 1 },
        zoomMoveAmount: null,
        lastZoomIns:[]
      },
      options: chartModels.options
    };
  },
  watch: {
    yAxleAMeasureSelected: {
      handler: function(val) {
        this.options.scales.yAxes[0].id = val;
        let x = [];
        let tempDataset = this.getDataModel(jsonData);
        for (let i = 0; i < this.datasets.length; i++) {
          if (val === this.datasets[i].label) {
            x[0] = this.datasets[i];
          }
        }
        tempDataset.datasets = x;
        if(this.yAxleBMeasureSelected !== null){
          tempDataset.datasets[1] = this.datacollection.datasets[1];
        }
        tempDataset.datasets[0] = this.setGraphColors(tempDataset.datasets[0],this.graphColors[0]);
        this.datacollection = tempDataset;
        this.copyOrigArrays();
      }
    },
    yAxleBMeasureSelected: {
      handler: function(val) {
        let y2 = this.getNewObject(chartModels.y2);
        let x = [];
        let tempDataset = this.getDataModel(jsonData);
        for (let i = 0; i < this.datasets.length; i++) {
          if (val === this.datasets[i].label) {
            x[1] = this.datasets[i];
          }
        }
        tempDataset.datasets = x;
        tempDataset.datasets[0] = this.datacollection.datasets[0];
        tempDataset.datasets[1] = this.setGraphColors(tempDataset.datasets[1],this.graphColors[1]);

        y2.id = val;
        this.datacollection = tempDataset;
        this.options.scales.yAxes[1] = y2;
          this.copyOrigArrays();

      }
    }
    },
  methods: {
    setGraphColors(set,color){
      set.borderColor = color;
      set.pointBorderColor = color;
      set.backgroundColor = color;
      return set;
    },
    getNewObject(x){
      return JSON.parse(JSON.stringify(x));
    },
    getDataModel(data) {
      let dataReversed = this.reverseArray(data); // data tulee käänteisessä aika järjestyksessä.
      let datagroup = this.getNewObject(chartModels.datagroup);
      this.datasets = this.getDatasets(dataReversed);
      datagroup.labels = this.getLabels(dataReversed);
        this.setChartViewLocation(0,dataReversed.length,dataReversed.length);
        return datagroup;
    },
    reverseArray(data){
      let dataReversed=[];
      for(let i=0, j=data.length-1;i<data.length;i++,j--){
        dataReversed[i] = data[j];
      }
      return dataReversed;
    },
    getLocations(data){
      // TODO Tähän listauksen haku Vuex storen välityksellä kyseiselle käyttäjälle.
      return [{value:data.tag,text:data.tag}];
    },
    getMeasures(data) {
      // Dropdown valikoiden suureiden haku
      let arr = [];
      let setFilter = new Set();
        setFilter.add("[auto added]"); // Jos määreen description löytyy setistä käytetään data[0].t arvoa eikä sensori taulun kuvausta.

      for (let y = 0; y < data.length; y++) {
          for(let j=0;j<sensorData.length;j++){
              if(data[y].t === sensorData[j].name && !setFilter.has(sensorData[j].description)) {
                  arr[y] = { value: data[y].t, text: sensorData[j].description };
                  break;
              }else if(j === sensorData.length -1 ){
                  arr[y] = { value: data[y].t, text: data[y].t };
              }
          }
      }
      return arr;
    },
    getLabels(data) {
      let arr = [];
      for (let i =0; i < data.length; i++) {
        arr[i] = this.formatDate(data[i].timestamp);
      }
      return arr;
    },
    formatDate(date){ // 2019-02-27T18:45:00+02:00 -> 20:45 | 23.04.2019
      return (parseInt( date.slice(11,13))+2)+date.slice(13,16)+' | '+date.slice(8,10)+'.'+date.slice(5,7)+'.'+date.slice(0,4);
    },
    getDatasets(data) {
      const dataObj =this.getNewObject(data);
      let x = [];

      for (let i = 0; i < dataObj[0].data.length; i++) {
        // Tehdään jokaiselle data tyypille oma datasetti.
        x[i] = this.getNewObject(chartModels.dataset);
        x[i].label = dataObj[0].data[i].t; // Nimetään datasetti määreen mukaan. Vapaa valinta.
        x[i].yAxisID = dataObj[0].data[i].t; // TÄRKEÄ! yhdistää datasetin akseliin.
      }

      for (let i = 0; i < dataObj.length; i++) { // Käydään läpi tulokset ja jaetaan ne omiin setteihinsä.
        for (let j = 0; j < dataObj[0].data.length; j++) {
          x[j].data[i] = dataObj[i].data[j].v;
        }
      }

      return x;
    },
    updateChart() {
      this.$refs.lineChart.update();
    },
    getChartOptions() {
      let x = chartModels.options;
      this.options = x;
    },
    chartMove(leftOrRigth) {
      let x = this.chartLocation;
      let roundZoom = Math.floor(x.zoomMoveAmount);

      if (leftOrRigth) {
        // Suunnan tarkistus ja liikkumistarkistus.
        if (x.view.start - roundZoom > 0) {
          // Vasen
          x.view.start -= roundZoom;
          x.view.end -= roundZoom;
        } else if (x.view.start > 0) {
          // Jos vähemmän kuin normaali liike.
          x.view.end -= x.view.start;
          x.view.start = 0;
        }
      } else {
        // Oikea
        if (x.view.end + roundZoom < x.origEnd) {
          x.view.start = x.view.start + roundZoom;
          x.view.end = x.view.end + roundZoom;
        } else if (x.view.end < x.origEnd) {
          // Jos vähemmän kuin normaali liike.
          x.view.start += x.origEnd - x.view.end;
          x.view.end = x.origEnd;
        }
      }

      this.chartLocation = x; // Viedään muutokset talteen
      // Otetaan labels:eista näkymää vastaava otos.
      this.datacollection.labels = this.datasetOrigLabels.slice(
        x.view.start,
        x.view.end
      );
      // otetaan kaikista dataseteistä näkymää vastaava otos.
      for (let i = 0; i < this.datacollection.datasets.length; i++) {
        this.datacollection.datasets[i].data = this.datasetOrigData[i].slice(
          x.view.start,
          x.view.end
        );
      }
      this.$refs.lineChart.update(); // Kutsutaan lapsen päivitys metodi.
    },
    chartZoom(inOrOut) {
      let x = this.chartLocation;
      let roundZoom;
      if(x.view.end-x.view.start > 5 && inOrOut){
        x.zoomMoveAmount = (x.view.end-x.view.start)/5; // Asettaa zoomin ja liikuttelun määrän dynaamisesti.
        x.lastZoomIns.push(x.zoomMoveAmount); // Laitetaan zoom arvo talteen ulos zoomausta varten.
      }else if(x.lastZoomIns.length >0 && !inOrOut){
        x.zoomMoveAmount = x.lastZoomIns.pop(); // Haetaan ja poistetaan viimeisin zoom.
      }
      roundZoom = Math.round(x.zoomMoveAmount);

      // Suunnan tarkistus ja zoom rajoitus.
      if (inOrOut) {
        if (x.view.start + roundZoom+2 < x.view.end - roundZoom) {
          x.view.start += roundZoom;
          x.view.end -= roundZoom;
        }
      } else {
        // Zoom ulos
        if (x.view.start - roundZoom >= 0) {
          x.view.start -= roundZoom;
        } else if (x.view.start > 0) {
          x.view.start = 0;
        }
        if (x.view.end + roundZoom <= x.origEnd) {
          x.view.end += roundZoom;
        } else if (x.view.end < x.origEnd) {
          x.view.end = x.origEnd;
        }
      }

      this.chartLocation = x; // Viedään muutokset talteen
      // Otetaan labels:eista näkymää vastaava otos.
      this.datacollection.labels = this.datasetOrigLabels.slice(
        x.view.start,
        x.view.end
      );
      // otetaan kaikista dataseteistä näkymää vastaava otos.
      for (let i = 0; i < this.datacollection.datasets.length; i++) {
        this.datacollection.datasets[i].data = this.datasetOrigData[i].slice(
          x.view.start,
          x.view.end
        );
      }
      this.$refs.lineChart.update(); // Kutsutaan lapsen päivitys metodi.
    },
    chartGridToggleY() {
      this.options.scales.yAxes[0].gridLines.display = !this.options.scales
        .yAxes[0].gridLines.display;
    },
    chartGridToggleX() {
      this.options.scales.xAxes[0].gridLines.display = !this.options.scales
        .xAxes[0].gridLines.display;
    },
    copyOrigArrays() {
      // Kopiodaan vain taulut että Object referenssiä vanhaan dataan ei synny.
      for (let i = 0; i < this.datacollection.datasets.length; i++) {
        this.datasetOrigData[i] = this.datacollection.datasets[i].data;
      }
      this.datasetOrigLabels = this.datacollection.labels;
    },
    setChartViewLocation(viewStart, viewEnd, origEnd) {
      let x = this.chartLocation;

      x.origEnd = origEnd;
      x.view.start = viewStart;
      x.view.end = viewEnd;
      x.zoomMoveAmount = parseInt(origEnd / 20);
    }
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`
      };
    }
  }
};
</script>
<style>
.chart {
  align-content: center;
  align-items: center;
}
  .chartControls{
    text-align: center;
    margin:auto;
    width: 100%;
  }
.chartControlButtons{
  border-bottom-color:red;
  margin: 0.2em;
}
  .otsikko{
    padding:0.7em 0 0 3.3em;
    color:#00557A;
  }
</style>

