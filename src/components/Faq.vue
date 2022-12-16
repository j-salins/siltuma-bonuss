<script>
export default {
  mounted() {
    const accordionHeader = this.$el.querySelectorAll(".accordion-header");
    console.log("!!!", accordionHeader);
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        console.log("click");
        const accordionContent =
          header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
          }px`;
          accordionContent.style.marginTop = `${
            header.scrollHeight * -1
          }px`;
          header.querySelector(".fas").classList.remove("fa-plus");
          header.querySelector(".fas").classList.add("fa-minus");
        } else {
          accordionContent.style.maxHeight = `0px`;
          accordionContent.style.marginTop = '0px';
          header.querySelector(".fas").classList.add("fa-plus");
          header.querySelector(".fas").classList.remove("fa-minus");
        }
      });
    });
  },
};
</script>

<template>
  <div id="faq" class="container center mx-auto bg-white pb-16">
    <div class="faq mx-auto md:w-2/3 py-10 px-4">
      <h1 class="text-3xl mb-10">Biežāk uzdotie jautājumi</h1>
      <v-expansion-panels>
      <v-expansion-panel class="border-t"
      elevation="0"
      rounded="20">
      <v-expansion-panel-title class="leading-relaxed">
        <span class="mr-6">01 </span>
       <span> Ko par "siltuma bonusu" jāzina <br/> uzņēmuma grāmatvedībai?</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Jau pandēmijas laikā attālināta darba veikšanas kompensācijai tika piemērots atvieglots kompensācijas izmaksas mehānisms, bez papildus attiecināmajiem dokumentiem, lai neradītu lieku administratīvo slogu. “Siltuma bonusu” izmaksai tiek piedāvāts ieviest līdzīgu mehānismu.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel class="border-t"
      elevation="0"
      rounded="0">
      <v-expansion-panel-title>
        <span class="mr-6">02 </span>
        <span>Ja vienā mājsaimniecība ir divi strādājošie, <br/> vai viņi drīkst saņemt siltuma  <br/> bonusus katrs no sava darba devēja?</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Ja darba devējs ir nolēmis, ka konkrētajam darbiniekam šāda kompensācija pienākas, tad tā būtu jāizmaksā neatkarīgi no tā, vai darbinieka dzīvesbiedrs, vai cits mājsaimniecībā dzīvojošais saņem līdzīgu kompensāciju no sava darba devēja.        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="border-t"
      elevation="0"
      rounded="0">
      <v-expansion-panel-title>
        <span class="mr-6">03 </span>
        <span>Vai "siltuma bonusam" atvēlēto naudu <br/>var izmantot citu bonusu izmaksai?</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Aicinām uzņēmējus būt atbildīgiem un izmantot doto uzticības garantu tam paredzētajiem mērķiem. Valsts ieņēmumu dienesta (VID) rīcībā būs gan informācija par izmaksātajām kompensācijām, gan par algu pirms un pēc atbrīvojuma piemērošanas, tāpēc VID būs iespēja operatīvi konstatēt gadījumus, ja šis regulējums tiks izmantots ļaunprātīgi un vērsties pret krāpniekiem. Tāpēc maz ticams, ka darba devēji uz šo salīdzinoši īso laika posmu izmantos krāpnieciskiem mērķiem.        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="border-t"
      elevation="0"
      rounded="0">
      <v-expansion-panel-title>
        <span class="mr-6">04 </span>
        <span>Vai šajā iniciatīvā nav krāpniecības risku?</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Kompensācijas izmaksāšana būs darba devēja brīva izvēle, un darba devējs var novērtēt, vai un kādā apmērā šāds atbalsts ir nepieciešams konkrētajam darba ņēmējam. Nebūtu samērīgi dažu neatbilstoši izlietotu kompensāciju dēļ radīt smagnēju un dārgu mehānismu, lai izslēgtu jebkādu iespējamību, ka kompensācija tiek izmantota tieši tam paredzētajam mērķim.        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="border-t"
      elevation="0"
      rounded="0">
      <v-expansion-panel-title>
        <span class="mr-6">05 </span>
        <span>Kāds ir valsts ieguvums no šīs<br/> iniciatīvas?</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          “Siltuma bonusu” mehānisma ieviešanā ir saskatāmi vairāki pozitīvi ieguvumi valstiskā mērogā, proti, pirktspējas palielināšanās nabadzības riska mazināšana, inflācijas apturēšana utml.        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="border-t"
      elevation="0"
      rounded="0">
      <v-expansion-panel-title>
        <span class="mr-6">06 </span>
        <span>Vai šī iniciatīva radīs valstij papildus<br/> administratīvo slogu?</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Nē. Vienīgais administratīvais slogs, kas tiks radīts, ir VID pienākums izveidot jaunu šim mērķim atsevišķu ar IIN neapliekamo ienākumu kodu EDS. Ņemot vērā, ka valsts nebūtu iesaistīta kompensācijas izmaksu administrēšanā, uzskatām, ka šis ir nebūtisks slogs, kuru atsver priekšlikuma ieguvumi.        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    </div>
  </div>
</template>

<style>
.v-expansion-panel-title span{
  line-height: 1.2rem;
}
</style>
