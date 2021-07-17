<template lang="html">
  <section class="section calculator">
    <div class="container">
      <div class="field">
        <label class="label">Ingresos netos mensuales:</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="1800"
            min="0"
            v-on:focusout="updateIncome"
            v-model="income"
          />
        </div>
        <p>¿No conoces tus ingresos netos? Calcúlalos aquí</p>
      </div>
    </div>
    <div class="section container">
      <div class="content is-large">
        <ul>
          <li>
            La cuota mensual máxima que te puedes permitir es:
            <strong>{{ income ? income * 0.3 : 0 }} euros</strong>
          </li>
          <li>
            El precio máximo de la vivienda que puedes permitirte es:
            <strong> {{ price }} euros</strong>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'Calculator',
    props: [],
    created () {
    },
    data () {
      return {
        price: 0
      }
    },
    methods: {
      updateIncome() {
        this.price = this.income * 0.30 * 360;
        this.calculateMortgatePayment(100000.0, 1.0, 360);
      },
      calculateMortgatePayment(amount, ipa, n) {
        const i = ipa / 12;
        const a = (1-((1+i) ** (-n))) / i;
        console.log(a)
        const payments = amount / a;
        console.log(payments);
      }
    },
    computed: {

    }
}
</script>
