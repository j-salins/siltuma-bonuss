<script>
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";



export default {
  
  data: () => ({
    showMobileMenu: false
  }),
  
  mounted() {
  /* gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.create({
  start: 'top -500',
  end: 99999,
  toggleClass: {className: 'sticky', targets: 'header'}
}); */
  },
}
</script>
<template>
  <!-- component -->
  <header class="container mx-auto top-0 z-30 w-full py-4 bg-sbamber sm:px-4">
    <div class="flex items-center justify-between mx-auto max-w-7xl px-2 md:px-10 lg:px-14">
      <a href="#">
        <img src="../assets/sb-logo.svg" class="h-14" alt="" />
      </a>
      <div class="flex items-center space-x-1">
        <ul class="hidden space-x-2 md:inline-flex items-center">
          <li><a href="#about" v-smooth-scroll class="px-4 py-2 rounded hover:text-white">Par Iniciatīvu</a></li>
          <li><a href="#about-1" v-smooth-scroll class="px-4 py-2 rounded hover:text-white">Situācija</a></li>
          <li><a href="#faq" v-smooth-scroll class="px-4 py-2 rounded hover:text-white">BUJ</a></li>
          <li><a href="#survey" v-smooth-scroll class="px-4 py-2 rounded hover:text-white">Piedalies aptaujā</a></li>
					<li><a href="#join-initiative" v-smooth-scroll class="hidden focus:outline-none rounded-lg border border-solid border-gray-700 hover:border-white px-4 py-2 w-min whitespace-nowrap">
          Pievienojies iniciatīvai</a></li>
        </ul>
        <div class="inline-flex md:hidden" x-data="{ open: false }">
          <button class="flex-none px-2" @click="showMobileMenu=!showMobileMenu">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <span class="sr-only">Open Menu</span>
          </button>
          <div
            class="mobile-menu absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow"
            :class="{ active: showMobileMenu }"
            x-show.transition="open"
            @click.away="open = false"
            x-cloak
          >
            <button class="self-end flex-none p-2 ml-2" @click="showMobileMenu = false">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span class="sr-only">Close Menu</span>
            </button>
            <ul class=" space-y-5 h-auto">
              <li><a href="#about" @click="showMobileMenu=!showMobileMenu" class="px-4 py-2 rounded">Par Iniciatīvu</a></li>
							<li><a href="#about-1" @click="showMobileMenu=!showMobileMenu" class="px-4 py-2 rounded">Situācija</a></li>
              <li><a href="#survey" @click="showMobileMenu=!showMobileMenu" class="px-4 py-2 rounded">Piedalies aptaujā</a></li>
							<li><a href="#faq" @click="showMobileMenu=!showMobileMenu" class="px-4 py-2 rounded">BUJ</a></li>

              <li class="mx-4 py-8">
                <a href="#join-initiative" v-smooth-scroll @click="showMobileMenu=!showMobileMenu"
                class="hidden focus:outline-none rounded-lg bg-white px-6 py-3 w-fit inline-block text-center whitespace-nowrap border border-solid hover:border-stone-400">
              Pievienojies iniciatīvai</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="bg-sbamber container mx-auto">
    <div
      class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-8 lg:grid-cols-12"
    >
      <div class="place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl text-5xl lg:text-6xl mb-20 font-normal"
        >
          Atbalsti siltuma <br />bonusu bez<br />
          nodokļiem
        </h1>
        <a href="#join-initiative" v-smooth-scroll
          class="focus:outline-none rounded-lg bg-white px-6 py-3 w-min whitespace-nowrap"
        >
          Pievienojies iniciatīvai
        </a>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../assets//hero_image.svg" alt="" />
      </div>
    </div>
  </section>
  <div id="about" class="container mx-auto bg-white">
    <div class="mx-auto w-10/12 lg:w-2/3 py-11 lg:pt-32 lg:pb-20 relative">
      <div class="spot-1 absolute w-64 h-64 md:w-36 md:h-36 -translate-x-2/3 -translate-y-1/2 md:-translate-x-1/2 top-36 md:top-44"></div>
      <h1 class="text-3xl pb-10">
        Iniciatīvas mērķis — vienkāršota atbalsta <br />
        politika siltuma bonusam.
      </h1>
      <div class="textcol lg:columns-2 gap-28">
        <p class="pb-8">
          Energokrīzes un augošās inflācijas apstākļos Latvijas iedzīvotajiem
          atbalstu var sniegt ne tikai valsts un pašvaldības, bet arī darba
          devēji. Taču, lai pēc iespējas vairāk uzņēmēju iesaistītos šāda
          atbalsta sniegšanā, būtu vajadzīgs solis pretī no valsts - vienkāršota
          atbalsta politika.
        </p>
        <p class="pb-8">
          Šobrīd jebkura darba devēja iniciatīva palīdzēt darbiniekiem pārvarēt
          energokrīzes radītās sekas tiek aplikta ar darbaspēka nodokli. Tātad,
          jebkura izmaksu pozīcija jāplāno teju divtik liela, jo darba ņēmēja un
          darba devēja sociālie un ienākuma nodokļi kopā veido 83% slogu.
        </p>
        <p class="pb-8">
          <br>
          Ja šīm piemaksām piemērotu atvieglojumus, līdzīgi kā ar veselības,
          dzīvības un negadījumu apdrošināšanas polisēm, kuras neapliek ar
          papildus nodokli, vairāk darba devēju varētu sniegt atbalstu saviem
          darbiniekiem energokrīzes laikā.
        </p>
        <p class="pb-8">
          Covid-19 pandēmijas laikā terminēti tika pieņemts regulējums, kas, bez
          papildu nodokļu piemērošanas, ļāva darbiniekiem kompensēt izdevumus
          par attālināta darba veikšanu mājas apstākļos. Šādu terminētu
          regulējumu aicinām piemērot arī darbadevēju “siltuma bonusam”. Ikviens
          uzņēmums var pievienoties iniciatīvai, lai kopīgiem spēkiem šo
          ieviestu praksē.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: rgb(32, 214, 50);
}
.mobile-menu {
  visibility: hidden;
}
.mobile-menu.active {
  visibility: visible;
}

.spot-1 {
  background: radial-gradient(46.69% 53.67% at 46.69% 46.33%, rgba(255, 63, 2, 0.88) 0%, rgba(254, 254, 254, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
filter: blur(15px);
}

</style>
