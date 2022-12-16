<template>
  <!-- component -->
  <header class="container mx-auto top-0 z-30 w-full py-8 bg-sbamber sm:px-4">
    <div class="flex items-center justify-between mx-auto max-w-7xl mx-10">
      <a href="#">
        <img src="../assets/sb-logo.svg" class="h-14" alt="" />
      </a>
      <div class="flex items-center space-x-1">
        <ul class="hidden space-x-2 md:inline-flex items-center">
          <li><a href="#about" class="px-4 py-2 rounded hover:text-white">Par Iniciatīvu</a></li>
          <li><a href="#about-1" class="px-4 py-2 rounded hover:text-white">Situācija</a></li>
          <li><a href="#faq" class="px-4 py-2 rounded hover:text-white">BUJ</a></li>
					<li><a href="#join-initiative" class="focus:outline-none rounded-lg border border-solid border-gray-700 hover:border-white hover:text-white px-4 py-2 w-min whitespace-nowrap">
          Pievienojies iniciatīvai</a></li>
        </ul>
        <div class="inline-flex md:hidden" x-data="{ open: false }">
          <button class="flex-none px-2" @click="open = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            class="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow"
            x-show.transition="open"
            @click.away="open = false"
            x-cloak
          >
            <button class="self-end flex-none px-2 ml-2" @click="open = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
            <ul class="space-y-2">
              <li><a href="#" class="px-4 py-2 rounded">Par Iniciatīvu</a></li>
							<li><a href="#" class="px-4 py-2 rounded">Situācija</a></li>
							<li><a href="#" class="px-4 py-2 rounded">Dalībnieki</a></li>
							<li><a href="#" class="px-4 py-2 rounded">BUJ</a></li>
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
          class="max-w-2xl tracking-wide text-5xl lg:text-6xl mb-20 font-thin"
        >
          Atbalsti siltuma <br />bonusu bez<br />
          nodokļiem
        </h1>
        <a href="#join-initiative"
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
    <div class="mx-auto w-10/12 lg:w-2/3 py-11 lg:py-32">
      <h1 class="text-3xl pb-10">
        Iniciatīvas mērķis — vienkāršota atbalsta <br />
        politika siltuma bonusam.
      </h1>
      <div class="textcol lg:columns-2">
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
</style>
