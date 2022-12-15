import { styled } from "@stitches/react";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export const HeaderContainer = styled("header", {
  div: {},
  height: "5rem",
  borderBottom: "1px solid #29292e",
});

const HeaderContent = styled("div", {
  maxWidth: "1120px",
  height: "5rem",
  margin: "0 auto",
  padding: "0 2rem",

  display: "flex",
  alignItems: "center",

  nav: {
    marginLeft: "5rem",
    height: "5rem",

    ul: {
      display: "flex",
      listStyle: "none",
    },

    a: {
      display: "flex",
      position: "relative",
      padding: "0 .5rem",
      height: "5rem",
      lineHeight: "5rem",
      color: "$gray300",
      transition: "0.2s all ease",
      "&:hover": {
        color: "$white",
      },

      "& + a": {
        marginLeft: "2rem",
      },

      "&.isActive::after": {
        content: "",
        height: "3px",
        borderRadius: "3px 3px 0 0",
        width: "100%",
        position: "absolute",
        botton: "0",
        left: "0",
        background: "$yellow500",
      },
      "&.isActive": {
        color: "$white",
        fontWeight: "bold",
      },
    },
  },
});

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logo} alt="igNews" />

        <nav>
          <ul>
            <li>
              <a className="isActive">Home</a>
            </li>
            <li>
              <a className="isActive">Posts</a>
            </li>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
