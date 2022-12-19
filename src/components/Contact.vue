<script>
export default {
  data: () => ({
    checked: false,
  })
};
</script>
<template>
  <div id="join-initiative" class="container mx-auto bg-white">
    <div class="mx-auto w-11/12 lg:w-2/3 py-11 lg:pb-32 relative">
      <div class="spot-2 absolute w-32 h-32 md:w-64 md:h-64 -translate-x-2/3 -translate-y-1/2 md:-translate-x-1/2 top-24 md:top-24 z-0"></div>
      <h1 class="text-5xl lg:text-6xl font-extralight z-10 relative">
        Pievienojies <br />iniciatīvai!
      </h1>
      <p class="hidden text-sm pb-10 lg:w-1/2"
        >Katra uzņēmēja atbalsts ir svarīgs, lai kopīgiem spēkiem pārvarētu
        radušos situāciju. Tāpēc sniedziet savu artavu energokrīzes seku
        pārvarēšanai ar savu balsi.
      </p>
      <div id="sb-form" class="p-4">
        <form class="hidden" action="https://submit-form.com/eorcjMfu">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="sbcompany"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Uzņēmums</label
              >
              <input
                type="text"
                id="sbcompany"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="sbname"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Kontaktpersonas vārds, uzvārds</label
              >
              <input
                type="text"
                id="sbname"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div class="grid md:grid-cols-3 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="sbcount"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Darbinieku skaits</label
              >
              <input
                type="number"
                id="sbcount"
                min="10"
                max="200"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="sbemail"
                class="block mb-2 text-sm font-medium text-gray-900"
                >E–pasts</label
              >
              <input
                type="email"
                id="sbemail"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <button :disabled="!checked"
                type="submit"
                class="disabled:opacity-25 disabled:bg-sbamber text-white mt-7 bg-sbamber hover:bg-amber-500 focus:ring-4 focus:outline-none font-medium rounded-xl text-sm w-full px-5 py-4 text-center"
              >
                Pievienojies!
              </button>
            </div>
          </div>
          <div class="grid md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input id="agree-terms" type="checkbox" class="mr-3 rounded" v-model="checked">
              <label for="agree-terms" class="text-sm"> Es pieņemu <a href="./assets/privatuma-politika.pdf" target="_blank" class="underline text-orange-400">noteikumus un nosacījumus</a> kā tiek saglabāti mani dati.</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mx-auto bg-white">
    <div class="md:flex mx-auto w-11/12 md:w-2/3 bg-gray-100 rounded-xl justify-center items-center">
      <div class="flex p-5 md:w-2/12 justify-center"><img src="../assets/download-icon.svg" alt=""></div>
      <div class="flex p-5 md:w-6/12 text-center md:text-left"><span class="text-sm">Lejupielādē "siltuma bonuss" elementus un dalies ar savu līdzdalību iniciatīvā!</span></div>
      <div class="flex p-5 md:w-4/12">
        <a href="./assets/Siltuma_bonuss_paka.zip" class="focus:outline-none rounded-lg bg-white w-full px-6 py-3 text-center whitespace-nowrap border border-solid border-stone-300 hover:border-stone-500 cursor-pointer">
         Pievienojies!
        </a></div>
    </div>
  </div>
  <div id="survey" class="container mx-auto bg-white pt-20 pb-12 md:pb-36">
    <div class="md:flex mx-auto w-11/12 md:w-2/3 border border-solid border-neutral-300 rounded-xl items-center">
      <div class="flex flex-col p-7">
        <h2 class="text-3xl md:text-2xl font-medium pb-2">Aizpildi siltuma bonusa iniciatīvas aptauju!</h2>
        <a href="https://forms.gle/EPkx4hfce9bKvBqV9" target="_blank" class="text-amber-500 hover:text-amber-600 underline">Aicinām jūs atbildēt uz jautājumiem!</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-disabled {
  outline: none;
  opacity: 0.25;
}
.spot-2 {
  background: radial-gradient(46.69% 53.67% at 46.69% 46.33%, rgba(255, 139, 2, 0.94) 0%, rgba(254, 254, 254, 0) 100%);
  filter: blur(20.5px);
}
</style>
