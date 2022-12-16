import { FaGithub } from "react-icons/fa";
import { styled } from "../../styles";
import { FiX } from "react-icons/fi";

const ButtonSignIn = styled("button", {
  height: "3rem",
  borderRadius: "3rem",
  background: "$gray850",
  border: 0,
  padding: "0 1.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$white",
  fontWeight: "bold",

  svg: {
    width: "20px",
    height: "20px",
  },
  ".closeIcon": {
    marginLeft: "1rem",
  },

  "svg:first-child": {
    marginRight: "1rem",
  },

  transition: "filter 0.2s",
  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <ButtonSignIn type="button">
      <FaGithub color="#04d361" />
      Matheus Fonteles
      <FiX color="#737380" className="closeIcon" />
    </ButtonSignIn>
  ) : (
    <ButtonSignIn type="button">
      <FaGithub color="#eba417" />
      Sign in with Github
    </ButtonSignIn>
  );
}
