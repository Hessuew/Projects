<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-container fluid>
        <!--select kenttä-->
        <b-form-group>
          <b-row>
            <b-col sm="3">
              <label for="mittausTyyppi">Mittauksen suure</label>
            </b-col>
            <b-col sm="9">
              <b-form-select id="mittausTyyppi" :options="tyypit" v-model="form.tyyppi"/>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group>
          <b-row>
            <b-col sm="3">
              <label for="mittauspaikka">Mittauspaikka</label>
            </b-col>
            <b-col sm="9">
              <b-form-select id="mittauspaikka" :options="paikat" v-model="form.paikka"/>
            </b-col>
          </b-row>
        </b-form-group>
        <!--select kenttä loppuu-->
        <!--input kentät-->
        <b-form-group>
          <b-row class="my-1" v-for="type in labels" :key="type.model">
            <b-col sm="3">
              <label :for="`type-${type.type}`">{{ type.label }}:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                :id="`type-${type.label}`"
                v-model="form[type.model]"
                :type="type.type"
              />
            </b-col>
          </b-row>
        </b-form-group>
        <!--input kentät loppuu-->
        <!--vapaatekstikenttä-->
        <b-form-group>
          <b-row>
            <b-col sm="3">
              <label for="tekstikentta">Vapaatekstikentta:</label>
            </b-col>
            <b-col sm="9">
              <b-form-textarea
                id="tekstikentta"
                v-model="form.tekstikentta"
                maxlength="500"
                rows="3"
                max-rows="6"
              />
            </b-col>
          </b-row>
        </b-form-group>
        <!--vapaatekstikenttä loppuu-->
        <!--buttonit-->
        <b-form-group>
          <b-row>
            <b-col sm="3"></b-col>
            <b-col sm="9">
              <b-button type="submit" class="mr-5">Tallenna</b-button>
              <b-button type="reset" class="ml-5">Peruuta</b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </b-container>
      <!--Buttonit päättyy-->
    </b-form>
  </div>
</template>

<script>
export default {
  name: "addForm",
  data() {
    return {
      labels: [
        { type: "text", label: "Määrä", model: "maara" },
        //{ type: "text", label: "Mittauspaikka", model: "mittauspaikka" },
        { type: "date", label: "Keräyspäivämäärä", model: "kerayspvm" },
        { type: "time", label: "Keräysaika", model: "keraysaika" }
      ],
      form: {
        tyyppi: null,
        paikka: null,
        labels: null
      },
      Defform: {
        tyyppi: null,
        paikka: null,
        labels: null
      },
      tyypit: [
        { text: "Valitse mittauksen suure", value: null },
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
      paikat: [
        { text: "Valitse mittauspaikka", value: null },
        "Kuopio1",
        "Kuopio2"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
      var testi = JSON.parse(JSON.stringify(this.form));
      if (testi.maara == null) {
        console.log("toimii null");
      } else {
        console.log("toimii ei null");
      }
      this.$nextTick(() => {
        this.form = Object.assign({}, this.Defform);
        this.$emit("closeModal");
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.form = Object.assign({}, this.Defform);
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
</style>
