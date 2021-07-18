<template lang="html">
  <section class="section calculator">
    <div class="container">
      <div class="field">
        <label class="label">Ingresos netos mensuales:</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="1500"
            min="0"
            v-model="income"
          />
        </div>
        <p>
          ¿No conoces tus ingresos netos?
          <a
            href="https://cincodias.elpais.com/herramientas/calculadora-sueldo-neto/"
            target="blank"
            >Calcúlalos gratis aquí</a
          >
        </p>
      </div>
      <div class="field">
        <label class="label"
          >Intereses anuales a <em>tipo fijo</em> (TIN):</label
        >
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="2.0"
            min="0"
            v-model="interest"
          />
        </div>
        <p>
          ¿No tienes claro el TIN?
          <a
            href="https://www.idealista.com/hipotecas/comparador-hipotecas/"
            target="blank"
            >Empieza buscando ofertas aquí</a
          >
        </p>
      </div>
      <div class="field">
        <label class="label">Años:</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="30"
            min="0"
            v-model="years"
          />
        </div>
        <p>
          A más años pagarás más intereses
        </p>
      </div>
      <div class="columns">
        <div class="column is-10">
          <a class="button is-medium is-fullwidth is-primary" v-on:click="updateIncome">Calcular</a>
        </div>
        <div class="column is-2">
          <a class="button is-medium is-fullwidth is-info is-outlined">Borrar</a>
        </div>
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
            <strong> {{ price.toFixed(2) }} euros</strong>
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
        price: 0,
        // income : 0,
        // interest: 0,
        // years: 0
      }
    },
    methods: {
      updateIncome() {
        // this.calculateMortgatePayment(this.principal, this.interest, this.years * 12);
        this. price = this.calculateMaxPrincipal(this.income * 0.3, this.interest, this.years * 12) / 0.8;
      },
      /**
        p = principal
        ipa = interest per annum
        n = number of payments. if 30 years then 30*12=360
       */
      // calculateMortgatePayment(p, ipa, n) {
      //   const i = ipa / 12 / 100;
      //   const denom = ((1+i) ** -n);
      //   const a = (1 - denom) / i;
      //   const q = p / a;
      //   console.log(q)
      //   return q;
      // },
      /**
        q = available monthly payment, must be 30% of net monthly income
        ipa = interest per annum
        n = number of payments. if 30 years then 30*12=360
       */
      calculateMaxPrincipal(q, ipa, n) {
        console.log(q)
        console.log(ipa)
        console.log(n)
        const i = ipa / 12 / 100;
        const denom = ((1+i) ** -n);
        const a = (1 - denom) / i;
        const p = q * a;
        console.log(p)
        return p;
      }
    },
    computed: {

    }
}
</script>
