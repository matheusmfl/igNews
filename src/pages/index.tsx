import Head from "next/head";
import Image from "next/image";
import imageAvatar from "../../public/images/avatar.svg";
import { SubscribeButton } from "../components/SubscribeButton";
import { styled } from "../styles";

const ContentContainer = styled("main", {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 2rem",
  height: "calc(100vh - 5rem)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Hero = styled("section", {
  maxWidth: "600px",

  "> span": {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  p: {
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    marginTop: "1.5rem",

    span: {
      color: "$cyan500",
      fontWeight: "bold",
    },
  },

  button: {
    marginTop: "2.5rem",
  },

  h1: {
    fontSize: "4.5rem",
    lineHeight: "4.5rem",
    fontWeight: "900",
    marginTop: "2.5rem",

    span: {
      color: "$cyan500",
    },
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ig News</title>
      </Head>

      <ContentContainer>
        <Hero>
          <span>🦭 Hey, welcome </span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all publications <br />
            <span>for $9.99 month</span>
          </p>

          <SubscribeButton />
        </Hero>

        <Image src={imageAvatar} alt="Avatar" />
      </ContentContainer>
    </>
  );
}
