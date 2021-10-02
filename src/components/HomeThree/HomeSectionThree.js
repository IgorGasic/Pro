import React from "react";
import Licenca from "../../imgs/licencaa.jpg";
import { Container } from "../../GlobalStyle";
import {
  ThirdSection,
  InfoRow,
  InfoColumn,
  TextWrapper,
  ImgWrapper,
  Img,
} from "./HomeThree.styled";

const HomeOne = () => {
  return (
    <>
      <ThirdSection>
        <Container>
          <InfoRow>
            <InfoColumn>
              <ImgWrapper>
                <Img src={Licenca} alt={"licenca"} />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                Poslovima upravljanja zgradom se bavimo više od 10 godina i
                svaka stambena zgrada je celina za sebe sa raznim vrstama
                potreba i problema zgrade i stanara u zgradama. Najčešći
                problemi u zgradama je njihova starost, kao i nedovoljna
                tehnička opremljenost zgrada po novim standardima i zakonima o
                stanovanju i upravljanju u stambenim zgradama. Uglavnom u većini
                starijih zgrada starosti i po više decenija zbog nestručnog i
                nekvalitetnog rada i nekompetentnosti dolazi do nagomilovanja i
                eskalacije problema što neminovno dovodi do propadanja krovova
                zgrada,oluka i fasada. Do sada uspešno realizovani rezultati
                počev od administrativnog dela osnivanja skupštine stambene
                zajednice i upisa u registar lokane samouprave pa sve do
                rešavanja NAJVEĆIH PROBLEMA.
                <br />
                <br />
                Uspešno rešeni problemi u starijim zgradama su sledeći:
                <br />
                1.Zamena trulih drvenih poštanskih ormarića sa novim metalnim i
                sa posebnim boksevima za Spisak stanara i boksom za Oglasnu
                tablu.
                <br />
                2.Higijena zgrade,nabavka kante za smeće i otirača u ulazu u
                zgradu.
                <br />
                3.Ugradnja nadstrešnice ispred ulaza u zgradu.
                <br />
                4.Ugradnja panik rasvete u slučaju nestanka struje.
                <br />
                5.Ugradnja javljača požara i sirene za javljanje požara.
                <br />
                6.Zamena trulih metalnih kanalizacionih zajedničkih vertikala
                novim plastičnim cevima.
                <br />
                7.Zamena trulih metalnih vodovodnih vertikala novim plastičnim
                vertikalama.
                <br />
                8.Zamena polomljenih starih i dotrajalih stepenišnih plafonjera
                sa novim led panelima( ušteda struje na stavci zajednička struja
                ) na stepeništima, podrumima i zajedničkim prostorijama.
                <br />
                9.Ugradnja merdevina na izvlačenje za bezbedan izlaz na tavan
                zgrade.
                <br />
                10.Zamena starih i trulih oluka vertikala na kompletnoj zgradi.
                (HITNE INTERVENCIJA)
                <br />
                11.Zamena trulog krovnog pokrivača od ondulin ploča sa novm
                štaflama, osb vodonepropusnom i paropropusnom folijom i
                trapezastim limom sa filcom. (HITNE INTERVENCIJE) Pored gore
                pomenutih radova koji su urađeni kao i mnogi drugi radovi
                postoji mogućnost i profesionalnog mašinskog pranja i
                dezinfekcije ulaza zgrada,poslovnih objekata, magacina, škola,
                vrtića, domova zdravlja itd.
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </ThirdSection>
    </>
  );
};

export default HomeOne;
