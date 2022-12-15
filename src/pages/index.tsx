import { styled } from "../styles";
import Head from "next/head";

const Title = styled("h1", {
  color: "$white",
  fontFamily: "Roboto",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>IgNews</title>
      </Head>
      <Title>Hello world</Title>
    </>
  );
}
