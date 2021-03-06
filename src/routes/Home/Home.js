import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Hero from "./Hero/Hero";
import HeroActions from "./Hero/Actions/Actions";
import Page from "../../shared/Page";
import Section from "./Section/Section";
import Figure from "./Section/Figure";
import Image from "./Section/Image";
import Description from "./Section/Description";
import Columns from "./Section/Columns";
import Footer from "../../shared/Footer/Footer";
import AlphabetD3Container from "./AlphabetD3/AlphabetD3Container.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero>
        <Page>
          <div>
            This is a <b>blog</b>
          </div>
          <div>
            I will type stuff here and it will be <b>awesome.</b>
          </div>
        </Page>
      </Hero>
      <HeroActions />
      <Section>
        <Page>
          <Columns>
            <Description>
              <h2>This will be great</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                volutpat, eros a aliquet auctor, augue tortor gravida mauris,
                facilisis ultrices massa urna eget urna. Ut eget tempor ipsum.
                Curabitur id metus rhoncus urna volutpat semper. Nam faucibus
                rhoncus odio. Suspendisse nec massa nisl. Curabitur scelerisque
                magna sit amet rutrum scelerisque.{" "}
              </p>
            </Description>
            <Figure>
              <Image src="https://cdn.rcsb.org/pdb101/motm/images/217-Opioid_Receptors-4dkl.jpg" />
            </Figure>
          </Columns>
        </Page>
      </Section>
      <Section>
        <Page>
          <Columns>
            <Description>
              <h2>This will be great</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                volutpat, eros a aliquet auctor, augue tortor gravida mauris,
                facilisis ultrices massa urna eget urna. Ut eget tempor ipsum.
                Curabitur id metus rhoncus urna volutpat semper. Nam faucibus
                rhoncus odio. Suspendisse nec massa nisl. Curabitur scelerisque
                magna sit amet rutrum scelerisque.{" "}
              </p>
            </Description>
            <Figure>
              <AlphabetD3Container />
            </Figure>
          </Columns>
        </Page>
      </Section>
      <Footer />
    </div>
  );
};

export default Home;
