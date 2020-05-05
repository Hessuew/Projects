<template>
  <div>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="filteredItems"
      class="elevation-1"
      :sort-by.sync="sortDataBy"
      sortBy="TrainScheduledTime"
      :must-sort="true"
    >
      <template v-slot:item="props">
        <tr v-if="props.item.TrainCancelled == true">
          <td>
            <font color="grey">{{ props.item.TrainNumbers }}</font>
          </td>
          <td>
            <font color="grey">{{ props.item.TrainStartStation }}</font>
          </td>
          <td>
            <font color="grey">{{ props.item.TrainEndStation }}</font>
          </td>
          <td>
            <div v-if="props.item.TrainActualTime != null">
              <font size="3px" color="grey">{{ props.item.TrainActualTime }} }}</font>
              <br />
              ({{props.item.TrainScheduledTime }})
            </div>
            <div v-else>
              <font size="3px" color="grey">{{ props.item.TrainScheduledTime }}</font>
            </div>
            <font color="red">{{ cancelled }}</font>
          </td>
        </tr>
        <tr v-else>
          <td>{{ props.item.TrainNumbers }}</td>
          <td>{{ props.item.TrainStartStation}}</td>
          <td>{{ props.item.TrainEndStation }}</td>
          <td>
            <div v-if="props.item.TrainActualTime != null">
              <font size="3px" color="red">{{ props.item.TrainActualTime }}</font>
              <br />
              ({{props.item.TrainScheduledTime }})
            </div>
            <div v-else>{{props.item.TrainScheduledTime }}</div>
          </td>
        </tr>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="#56AF23">{{emptyDatatableMessage}}</v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: [
    "loading",
    "headers",
    "items",
    "sortBy",
    "emptyDatatableMessage",
    "cancelled"
  ],
  data() {
    return {
      trainCancelledFontColor: "grey",
      sortDataBy: this.sortBy
    };
  },
  computed: {
    filteredItems: function() {
      let filtered_array = this.items;
      for (let i = 0; i < filtered_array.length; i++) {
        filtered_array[i].TrainScheduledTime = this.date(
          filtered_array[i].TrainScheduledTime
        );
        filtered_array[i].TrainActualTime = this.date(
          filtered_array[i].TrainActualTime
        );
      }
      return filtered_array;
    }
  },
  methods: {
    date: function(str) {
      if (!str) {
        return null;
      }
      str = new Date(str);
      return (
        (str.getDate() < 10 ? "0" : "") +
        str.getDate() + "-" +
        (str.getMonth() < 9 ? "0" : "") +
        (str.getMonth() + 1) + "-" +
        str.getFullYear() + " " +
        (str.getHours() < 10 ? "0" : "") + 
        str.getHours() + ":" +
        (str.getMinutes() < 10 ? "0" : "") +
        str.getMinutes() + ":" +
        (str.getSeconds() < 10 ? "0" : "") +
        str.getSeconds()
      );
    }
  }
};
</script>
