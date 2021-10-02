import React from "react";
import Icon1 from "../../imgs/Icon1.svg";
import Icon2 from "../../imgs/Icon2.svg";
import Icon3 from "../../imgs/Icon3.svg";
import Icon4 from "../../imgs/Icon4.svg";
import {
  SecondSection,
  ServiceHeading,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH3,
  ServiceList,
  ListItem,
} from "./HomeTwo.styled";

const HomeTwo = () => {
  return (
    <>
      <SecondSection>
        <ServiceHeading>
          Poslovi profesionalnog upravnika zgradom{" "}
        </ServiceHeading>
        <ServiceWrapper>
          <ServiceCard>
            <ServiceIcon
              src={Icon1}
              alt={"administrativni-poslovi"}
              name={"administrativni-poslovi-upravnika-zgrada"}
            />
            <ServiceH3>Administrativni poslovi</ServiceH3>
            <ServiceList>
              <ListItem>• Osnivanje stambene zajednice</ListItem>
              <ListItem>
                • Registracija matičnog broja stambene zajednice, PIB-a i izrada
                pečata
              </ListItem>
              <ListItem>• Zastupanje stambene zajednice</ListItem>
              <ListItem>
                • Upis stambene zajednice u registar stambenih zajednica lokalne
                samouprave
              </ListItem>
              <ListItem>
                • Podnošenje prijave za registraciju pravila vlasnika
              </ListItem>
              <ListItem>
                • Zaključivanje ugovora za održavanje stambene zgrade i
                održavanje higijene
              </ListItem>
              <ListItem>• Izrada izveštaja o radu upravnika zgrade</ListItem>
            </ServiceList>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon
              src={Icon2}
              alt={"finansijski-poslovi"}
              name={"finansijski-poslovi-upravnika-zgrada"}
            />
            <ServiceH3>Finansijski poslovi</ServiceH3>
            <ServiceList>
              <ListItem>
                • Raspolaganje sredstvima sa tekućeg računa stambene zajednice
              </ListItem>
              <ListItem>
                • Vođenje evidencije o prihodima i rashodima stambene zajednice
              </ListItem>
              <ListItem>
                • Naplata ugovorenog iznosa za upravljanje i održavanje stambene
                zgrade
              </ListItem>
              <ListItem>
                • Prinudna naplata potraživanja stambene zajednice
              </ListItem>
              <ListItem>
                • Izrada završnog računa i podnošenje poreske prijave stambene
                zajednice u slučaju da ista ostvaruje prihod po osnovu
                rentiranja zajedničkih delova
              </ListItem>
            </ServiceList>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon
              src={Icon3}
              alt={"tehnicki-poslovi"}
              name={"tehnicki-poslovi-upravnika-zgrada"}
            />
            <ServiceH3>Tehnički poslovi</ServiceH3>
            <ServiceList>
              <ListItem>
                • Realizacija radova na hitnim intervencijama ( u što kraćem
                vremenskom roku a najkasnije 48 sati od prijave vlasnika
                stanova.)
              </ListItem>
              <ListItem>
                • Sprovođenje i realizacija godišnjeg programa održavanja na
                tekućem održavanju
              </ListItem>
              <ListItem>
                • Sprovođenje i realizacija programa na investicionom održavanju
              </ListItem>
            </ServiceList>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon
              src={Icon4}
              alt={"ciscenje-profesionalnim-masinama"}
              name={"ciscenje-profesionalnim-masinama-upravnika-zgrada"}
            />
            <ServiceH3>Čišćenje profesionalnim mašinama</ServiceH3>
            <ServiceList>
              <ListItem>
                • MMašinsko pranje ulaza i dezinfekcija stepenište zgrade
              </ListItem>
              <ListItem>
                • Mašinsko pranje poslovnih prostora, magacina i garaža
              </ListItem>
              <ListItem>• Mašinsko pranje tvrdih podloga</ListItem>
              <ListItem>• Dubinsko pranje nameštaja</ListItem>
              <ListItem>• Dubinsko pranje automobila</ListItem>
              <ListItem>
                • Uslužno vršimo pranje i dezinfekciju škola, vrtića, domova
                zdravlja, kafića, restorana i dr...
              </ListItem>
            </ServiceList>
          </ServiceCard>
        </ServiceWrapper>
      </SecondSection>
    </>
  );
};

export default HomeTwo;
