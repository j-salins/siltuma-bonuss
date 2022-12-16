<template>
  <div id="join-initiative" class="container mx-auto bg-white">
    <div class="mx-auto w-10/12 lg:w-2/3 py-11 lg:pb-32">
      <h1 class="text-5xl lg:text-6xl font-extralight pb-10">
        Pievienojies <br />iniciatīvai!
      </h1>
      <p class="text-sm pb-10 lg:w-1/2"
        >Katra uzņēmēja atbalsts ir svarīgs, lai kopīgiem spēkiem pārvarētu
        radušos situāciju. Tāpēc sniedziet savu artavu energokrīzes seku
        pārvarēšanai ar savu balsi.
      </p>
      <div id="sb-form" class="p-4">
        <form>
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
              <button
                type="submit"
                class="text-white mt-7 bg-sbamber hover:bg-amber-500 focus:ring-4 focus:outline-none font-medium rounded-xl text-sm w-full px-5 py-4 text-center"
              >
                Pievienojies!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
