import Intro from "../../components/Intro/Intro";

import Services from "../../components/Services/Services";

import "../../../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import ConnectSection from "../../components/ConnectSection/ConnectSection";

import ConnectListItem from "../../components/ConnectListItem/ConnectListItem";
import { useDarkContext } from "../../context/UseDarkProvider";

function Home() {
  const { darkMode } = useDarkContext();
  return (
    <div className="content mx-auto max-w-[1536px] pt-20 ">
      <Intro
        img="img1.webp"
        title="Neighborgood"
        content="NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an AI agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together."
        btn="Get Started"
        link="get-started"
      />

      <Services darkMode={darkMode} />
      <ConnectSection
        img="img6.webp"
        title="A Way For Neighbors to "
        titleGradient="Connect"
        id="info"
        link="get-started"
      >
        <ConnectListItem>
          Neighborhood norms have evolved away from{" "}
          <strong className="highlight mx-1 font-bold">
            spontaneous connections.
          </strong>
        </ConnectListItem>
        <ConnectListItem>
          Today we prefer to screen our contacts online before meeting in
          person. We screen work colleagues using{" "}
          <strong className="highlight mx-1 font-bold">LinkedIn</strong>; we
          screen activity participants on{" "}
          <strong className="highlight mx-1 font-bold">Facebook</strong>; we
          screen <strong className="highlight mx-1 font-bold">romance</strong>{" "}
          candidates using online{" "}
          <strong className="highlight mx-1 font-bold">dating services</strong>
        </ConnectListItem>
        <ConnectListItem>
          What's needed now is an app that lets us share specific info that we
          select, with{" "}
          <strong className="highlight mx-1 font-bold">nearby neighbors</strong>{" "}
          that we also select-just as we can do now on Linkedin, but for our
          social lives with nearby neighbors.
        </ConnectListItem>

        <ConnectListItem>
          Al can suggest{" "}
          <strong className="highlight mx-1 font-bold">
            matches and activities
          </strong>
          , making connection even{" "}
          <strong className="highlight mx-1 font-bold">easier. LLMs </strong>{" "}
          enable semantic understanding of wants and needs, allowing the
          neighborhood connector - formerly the local extrovert - to instead be
          an <strong className="highlight mx-1 font-bold">AI agent</strong>
        </ConnectListItem>
      </ConnectSection>
      <Intro
        img="img7.png"
        title="Out Postcards"
        content="Explore our unique collection of postcards and share a slice of your world with your neighbors. Let's bridge distances one postcard at a time. Send a smile, share a story, and strengthen our community bonds. Pick your favorite, add a personal touch, and let the joy spread to every doorstep. Explore, connect, cherish!"
        btn="View Postcards"
        id="postcards"
        link="postcards"
      />
      <ConnectSection
        title="Us"
        titleGradient="About"
        img="img8.webp"
        swapTitle={true}
        id="aboutus"
      >
        <ConnectListItem>
          <strong className="highlight mx-1 font-bold">NeighborGood</strong> is
          on a mission to provide the simplest platform for neighborhoods to
          form connections & community. We are going after this by creating an{" "}
          <strong className="highlight mx-1 font-bold">AI agent</strong> that
          acts as the{" "}
          <strong className="highlight mx-1 font-bold">
            highly-social extrovert
          </strong>{" "}
          neighbor who finds{" "}
          <strong className="highlight mx-2 font-bold">
            1 symbiotic activities
          </strong>
          for people to do together.
        </ConnectListItem>
        <ConnectListItem>
          We offer users the ability to screen potential nearby connections and
          arrange shared{" "}
          <strong className="highlight mx-1 font-bold">
            face-to-face activities.
          </strong>
          Our team previously founded{" "}
          <strong className="highlight mx-1 font-bold">
            Foresight Institute, Persist Ventures, & Systemic Altruism.
          </strong>
        </ConnectListItem>
      </ConnectSection>
    </div>
  );
}

export default Home;
