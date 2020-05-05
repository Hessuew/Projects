import Vue from "vue";
import Vuex from "vuex";
import tunnukset from "./vuex/UserDtActions.js"
import mittaustulokset from "./vuex/AddMActions.js"
import mittauspisteet from "./vuex/RequestActions.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    graphData: {},
    graphOptions: {},
    formData: {},
    schema: [
      //tähän muuttujat.JSON, josta schema
      {
        fieldType: "selectList",
        name: "tyyppi",
        label: "Mittaustyyppi",
        id: "mittaustyyppi",
        options: [
          "",
          "Lämpötila (°C)",
          "pH (0-14)",
          "Redox (mV)",
          "Sähkönjohtavuus (μS/cm)",
          "Happi (mg/l)",
          "Sameus (NTU)",
          "Suolaisuus (0 to 70 ppt)",
          "UV abs",
          "Escherichia coli (pmy/100 ml)",
          "Heterotrofinen pesäkelukumäärä (R2A-menetelmä)",
          "Sulfiittia pelkistävien klostridien itiöt",
          "Somaattiset kolifaagit",
          "Suolistoperäiset enterokokit (pmy/100 ml)",
          "F-spesifiset kolifaagit",
          "TOC (mgC/l)",
          "Kokonais fosfori (mg/l)",
          "Fe (ug/l)",
          "Mn (ug/l)"
        ],
        placeholder: "Valitse mittauksen tyyppi"
      },
      {
        fieldType: "numberInput",
        name: "maara",
        id: "maara",
        value: "",
        label: "Määrä"
      },
      {
        fieldType: "selectList",
        name: "paikka",
        id: "paikka",
        label: "Mittauspaikka",
        options: ["", "Kuopio 1", "Kuopio 2"],
        placeholder: "Valitse mittauspaikka"
      },
      {
        fieldType: "dateInput",
        name: "paivays",
        id: "paivays",
        value: "",
        label: "Mittauspäivä"
      },
      {
        fieldType: "timeInput",
        name: "aika",
        id: "aika",
        value: "",
        label: "Mittausaika"
      },
      {
        fieldType: "textareaInput",
        name: "lisatietoja",
        id: "lisatietoja",
        label: "Lisätietoja"
      }
    ],
    limits: { limit: false },
    typeLimits: [
      { name: "lampo", up: 10, down: 0 },
      { name: "ph", up: 8, down: 4 }
    ]
  },
  modules: {
    tunnukset,
    mittaustulokset,
    mittauspisteet
  },
  mutations: {
    changeGraphData(state, data) {
      state.graphData = data;
    },
    changeGraphOptions(state, options) {
      state.graphOptions = options;
    },
    updateForm(state, data) {
      state.formData = data;
    },
    changeLimits(state, data) {
      state.limits = data;
    }
  },
  getters: {
    graphData: state => state.graphData,
    graphOptions: state => state.graphOptions,
    formSchema: state => state.schema,
    getFormData: state => state.formData,
    limits: state => state.limits,
    typeLimits: state => state.typeLimits.limit
  },
  actions: {
    changeFormData(state, data) {},

    setFormData(state, data) {
      state.commit("updateForm", data);
      // console.log(state.formData[JSON.stringify(data)]);
    },
    checkLimits(state, data) {
      //let index = state.typeLimits.findIndex(x => x.name === "lampo");
      //let index = state.typeLimits.indexOf(name === "lampo");
      let index = 0;

      //console.log(state.getters.typeLimits[index].name);
      if (
        data["maara"] != "" &&
        data["maara"] >= state.typeLimits[name == "lampo"].down &&
        data["maara"] <= state.typeLimits[name == "lampo"].up
      ) {
        console.log("täällä");
        //tähän monipuolisempi rakenne, jossa raja-arvot haetaan mittaustyypin perusteella
        let test = true;
        state.commit("changeLimits", test);
      }
    }
  }
});
