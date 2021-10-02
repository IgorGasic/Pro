import React from "react";
import djole from "../../imgs/djole.gif";
import { Container } from "../../GlobalStyle";
import {
  FirstSection,
  InfoRow,
  InfoColumn,
  Title,
  TextWrapper,
  ImgWrapper,
  Img,
  InfoContent,
} from "./HomeOne.styled";

const HomeOne = () => {
  return (
    <>
      <FirstSection>
        <Container>
          <InfoRow>
            <InfoColumn>
              <InfoContent>
                <Title>NS Pro upravnik zgrada & Baltazar</Title>
                <TextWrapper>
                  NS profesionalni upravnik zgrada & Baltazar se bavi
                  održavanjem stambenih zgrada.Poslove profesionalnog
                  upravljanja i zastupanja poverite stručnom i licenciranom
                  profesionalnom upravniku stambenih zgrada sa iskustvom koji će
                  sve vaše probleme rešavati umesto vas. Posebno iz palete
                  ponude izdvajamo izradu građevinskog elaborata o zatečenom
                  stanju zgrade i neophodnim građevinskim radovima sa posebnim
                  akcentom za izvođenje radova na tehničkom održavanju zgrade i
                  hitnim intervencijama sa kompletnom dokumentacijom neophodnih
                  radova i materijala za sanaciju i rešenje problema koji ostaju
                  u posedu stambene zajednice. Takođe u ponudi imamo čišćenje i
                  dezinfekciju profesionalnim mašinama zgrade, lokala, stanova,
                  restorana kafića itd. Kako bi vas bolje upoznali sa poslovima
                  i zadacima profesionalnog upravnika a koji su definisani
                  zakonom o održavanju stanbenih zgrada malo ćemo vas bliže
                  upoznati sa radom i poslovima profesionalnog upravnika.Poseban
                  akcenat dajemo na angažovanost u starijim zgradama zbog sve
                  većih dugugodišnjih problema u starim zgradama kako na
                  sprovođenju svih zakonskih normativa za normalno i bezbedno
                  stanovanje počev od zamene poštanskih sandučića, ugradnje
                  panik rasvete, javljača požara i sirene,led rasvete po
                  stepeništima i zajedničkim prostorijama, sprovođenju zakona i
                  normativa o protiv požarnoj bezbednosti,obeležavanja
                  prostorija posebnih i zajedničkih i spratova i mnogo drugih
                  poslova a sve u cilju poboljšanja kvaliteta života.Iskustvo od
                  preko 10 godina rešavanja brojnih problema sa ciljem
                  poboljšanja kvaliteta življenja implementirali smo u firmu za
                  stručno i profesionalno licencirano upravljanje stanbenim
                  zgradama.Iskustvo koje smo do sada stekli radom a na čega smo
                  ponosni je uspešno rešavanje i sanacija kompletnog trulog
                  krova koji je urađen po građevinskim normativima sa osb
                  vodonepropusnim pločama,vodonepropusnom paropropusnom folijom,
                  novim štaflama i trapezastim limom i zamenom vertikala i
                  horizontala oluka i novom ventilacijom i novim stepenicama za
                  bezbedan izlaz na krov u sklopu radova HITNIH
                  INTERVENCIJA.Pored sanacije krova do sada smo uradili i
                  mnogobrojne druge poslove .Kako je do pre par godina bila
                  neregulisana oblast o održavanju stanbenih zgrada primenom
                  novog zakona o održavanju stanbenih zgrada su uvedene brojne
                  zakonske obaveze i dužnosti stanara kao i model ponašanja u
                  zgradama.Na sve radove izvođač radova daje propisanu zakonsku
                  garanciju sa mogučnosti otplate radova na rate. Pored svih
                  radova koje ćemo navesti u drugom delu teksta radimo i
                  prikupljanje projektne dokumentacije zgrade za arhivu stambene
                  zajednice,izrada stručnih Veštačenja, Izveštaja i Nalaza o
                  stanju zgrade, njenom oštećenju, uzroku i predlogu potrebnih
                  radova, po potrebi stručni nadzor nad izvođenjem radova.
                  Radimo prijavu i odjavu broja članova domaćinstva u JKP
                  "informatika". Kako bi se bolje uverili u kvalitet i stručnost
                  pogledajte slike radova u galeriji kao i poslove koje smo do
                  sada uspešno uradili.Očekujemo vaš poziv za stručnu pomoć i i
                  rešavanje vaših zahteva.U drugom delu teksta dajemo opise
                  poslova koje smo do sada uspešno uradili u starijim zgradama
                  gde su postojali mnogobrojni problemi koji se nisu rešavali
                  decenijama i zbog loših međuljudskih odnosa stanara i
                  nepostojanja odgovornosti i stručnosti za rešenje problema a
                  koji su se godinama nagomilali.Stupanjem na snagu zakona o
                  održavanju stanbenih zgrada smo krajem 2016 godine krenuli u
                  postupak formiranja stambenih zajednica i usaglašavanjem i
                  sprovođenjem brojnih zakonskih propisa.Za sve vaše probleme
                  možete nas kontaktirati elektronskim putem mejla ili
                  telefonom.
                </TextWrapper>
              </InfoContent>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img
                  src={djole}
                  alt={"Ns-pro-upravnik-zgrada"}
                  name={"Ns-profesionalni-upravnik-zgrada"}
                />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </FirstSection>
    </>
  );
};

export default HomeOne;
