<script>
export default {
  data: () => ({
    slider1: { val: 50, min: 1, max: 6 },
    slider2: { val: 10, min: 50, max: 200 },
    slider3: { val: 10, min: 10, max: 300 },
  }),
  methods: {
    format2(n, currency) {
      return currency + Math.round(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").split('.')[0];
    },
  },
};
</script>
<template>
  <div class="container mx-auto bg-white">
    <div class="mx-auto w-full lg:w-2/3 py-11 lg:pb-32 sm:relative md:block">
      <h1 class="text-3xl pb-10 px-4">
        Uzzini, cik siltuma bonuss izmaksātu <br />
        tavā uzņēmumā ar un bez nodokļiem*
      </h1>
    <div class="lg:flex bg-gray-100 rounded-lg lg:p-9 w-full">
      <div class="lg:w-2/3 p-6flex flex-col">
        <div class="flex-1 p-4 lg:p-1">
          <v-slider
            v-model="slider1.val"
            :min="slider1.min"
            :max="slider1.max"
            step="1"
            color="#FFC700"
            track-color="#9B9B9B"
            track-size="2"
            label="Siltuma bonusa periods (mēneši)"
            thumb-label="always"
          ></v-slider>
          <v-slider
            v-model="slider2.val"
            :min="slider2.min"
            :max="slider2.max"
            step="1"
            color="#FFC700"
            track-color="#9B9B9B"
            track-size="2"
            label="Siltuma bonusa apmērs (Eur)"
            thumb-label="always"
          >
            <template v-slot:thumb-label="{ modelValue }">
              <span>{{ modelValue }} </span>
              <span>&nbsp;€</span>
            </template>
          </v-slider>
          <v-slider
            v-model="slider3.val"
            :min="slider3.min"
            :max="slider3.max"
            step="1"
            color="#FFC700"
            track-color="#9B9B9B"
            track-size="2"
            label="Darbinieku skaits"
            thumb-label="always"
          ></v-slider>
        </div>
      </div>
      <div class="lg:w-1/3 flex flex-col content-around justify-around items-end pb-4 md:p-4 m-t-[-20px]  lg:pl-8">
        <div class="w-2/3 lg:w-full">
            <p class="text-3xl">
              {{
                this.format2(
                  slider1.val * slider2.val * slider3.val * 1.83,
                  "€ "
                )
              }}
            </p>
            <h6 class="text-xs">
              Siltuma bonusa izmaksas, kas apliktas ar nodokļiem
            </h6>
          </div>
          <div class="w-2/3 lg:w-full">
            <p class="text-3xl">
              {{ this.format2(slider1.val * slider2.val * slider3.val, "€ ") }}
            </p>
            <h6 class="text-xs">
              Siltuma bonusa izmaksas ar nodokļu atvieglojumu
            </h6>
          </div>
      </div>
    </div>
    <p class="textcol text-xs md:w-2/3 mx-auto p-4">
      * Rezultāts ir informatīvs un veikts, balstoties uz aptuvenu aprēķinu
      viena mēneša bonusu apliekot ar darba ņēmēja iedzīvotāju ienākuma nodokli
      un darba devēja algas nodokli.
    </p>
    </div>
  </div>
</template>

<style>
.v-input.v-input--horizontal {
min-height: 100px;
}
.v-label.v-slider__label {
  max-width: 150px !important;
  width: 150px;
  white-space: normal !important;
}
@media (max-width: 460px) {
  .v-label.v-slider__label {
    max-width: 75px !important;
    font-size: 0.65rem !important;
  }
}
.v-slider-thumb__label {
  font-size: 1.35rem !important;
  transform: translateX(-50%);
  background: transparent !important;
  color: initial !important;
}
.v-slider-thumb__label::before {
  display: none;
}
</style>
