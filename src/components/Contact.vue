<script>
export default {
  data: () => ({
    checked: false,
  }),
  mounted() {
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Paldies, jūsu pieteikums ir saņemts!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Hmm.. Nezdevās nosūtīt ziņu, mēģiniet nosūtīt vēlreiz."
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Hmm.. Nezdevās nosūtīt ziņu, mēģiniet nosūtīt vēlreiz."
      });
    }
    form.addEventListener("submit", handleSubmit)
  }
};
</script>
<template>
  <div id="join-initiative" class="container mx-auto bg-white">
    <div class="mx-auto w-11/12 lg:w-2/3 py-11 lg:pb-32 relative">
      <img src="../assets/spot-2.png" alt="" class="absolute -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/3 md:block">
      <h1 class="text-5xl lg:text-6xl font-light tracking-wider z-10 relative">
        Pievienojies <br />iniciatīvai!
      </h1>
      <p class="text-sm py-10 lg:w-1/2 z-20 relative"
        >Katra uzņēmēja atbalsts ir svarīgs, lai kopīgiem spēkiem pārvarētu
        radušos situāciju. Tāpēc sniedziet savu artavu energokrīzes seku
        pārvarēšanai ar savu balsi.
      </p>
      <div id="sb-form" class="p-4">
        <form id="my-form" action="https://formspree.io/f/xrgvzqdb" method="POST">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Uzņēmums</label
              >
              <input
                type="text"
                id="company"
                name="company"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Kontaktpersonas vārds, uzvārds</label
              >
              <input
                type="text"
                id="name"
                name="name"
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
                name="sbcount"
                min="10"
                max="200"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >E–pasts</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="bg-none px-4 py-4 text-md border border-solid border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <button :disabled="!checked" ref="submit"
                class="disabled:opacity-25 disabled:bg-sbamber text-white mt-7 bg-sbamber hover:bg-amber-500 focus:ring-4 focus:outline-none font-medium rounded-xl text-sm w-full px-5 py-4 text-center"
              >
                Pievienojies!
              </button>
            </div>
            <div class="relative z-0 w-full group">
              <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">
            </div>
          </div>
          <div class="grid md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input id="agree-terms" type="checkbox" class="mr-3 rounded" v-model="checked">
              <label for="agree-terms" class="text-sm"> Es pieņemu <a href="./assets/privatuma-politika.pdf" target="_blank" class="underline text-orange-400">noteikumus un nosacījumus</a> kā tiek saglabāti mani dati.</label>
            </div>
            <p id="my-form-status" class="text-xl w-full text-center"></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mx-auto bg-white pb-12 md:pb-28">
    <div class="md:flex mx-auto w-11/12 md:w-2/3 bg-gray-100 rounded-xl justify-center items-center">
      <div class="flex p-5 md:w-2/12 justify-center"><img src="../assets/download-icon.svg" alt=""></div>
      <div class="flex p-5 md:w-6/12 text-center md:text-left"><span class="text-sm">Lejupielādē "siltuma bonuss" elementus un dalies ar savu līdzdalību iniciatīvā!</span></div>
      <div class="flex p-5 md:w-4/12">
        <a href="./assets/Siltuma_bonuss_paka.zip" class="focus:outline-none rounded-lg bg-white w-full px-6 py-3 text-center whitespace-nowrap border border-solid border-stone-300 hover:border-stone-500 cursor-pointer">
         Lejupielādēt
        </a></div>
    </div>
  </div>
  <div id="survey" class="hidden container mx-auto bg-white pt-20 pb-12 md:pb-36">
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
