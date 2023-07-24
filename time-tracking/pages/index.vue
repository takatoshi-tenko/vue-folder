<template>
  <div>
    <h2 class="text-center mb-3">Vue Get Full Date and Time Example</h2>
    <button @click="onClick">現在時刻を取得する</button>
    <div>今の時間：{{ currentDate }}</div>
    <ul class="list-group">
      <li class="list-group-item" v-show="timestamp">
        <strong>Timestamp:</strong> {{ timestamp }}
      </li>
      <li class="list-group-item" v-show="date">
        <strong>Date:</strong> {{ date }}
      </li>
      <li class="list-group-item" v-show="time">
        <strong>Time:</strong> {{ time }}
      </li>
      <li class="list-group-item" v-show="year">
        <strong>Current Year:</strong> {{ year }}
      </li>
      <li class="list-group-item" v-show="fulldatetime">
        <strong>Full Date:</strong> {{ fulldatetime }}
      </li>
    </ul>
    <div id="chart"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import func from "../../vue-temp/vue-editor-bridge";
import * as d3 from "d3";

export default Vue.extend({
  // name: "DateComponent",
  data: () => ({
    date: "",
    time: "",
    year: "",
    timestamp: "",
    fulldatetime: "",
    currentDate: "",
    sampleData: [100, 150, 200, 250, 300],
  }),
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
    printYear: function () {
      return new Date().getFullYear();
    },
    printTimestamp: function () {
      return Date.now();
    },
    printFullDate: function () {
      return new Date();
    },
    onClick: function () {
      this.currentDate = this.printTime();
    },
    d3: function () {
      d3.select("#chart")
        .selectAll("div")
        .data(this.sampleData)
        .enter()
        .append("div")
        .style("width", function (d) {
          return d + "px"
        })
        .style("background-color", "green")
        .style("margin-bottom", "10px")
        .text(function (d) {
          return d;
        });
    },
  },
  mounted: function () {
    this.d3();
    this.date = this.printDate();
    this.time = this.printTime();
    this.timestamp = this.printTimestamp();
    this.year = this.printYear();
    this.fulldatetime = this.printFullDate();
  },
});
</script>
