import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 20%; /* Adjust width for logo */
`;

const Logo = styled.img`
  height: 70px; /* Adjust the size of the logo */
  width: auto;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  list-style: none;
  margin-left: 450px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const GithubButton = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  background: transparent;

  img {
    height: 40px;
    width: 40px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const theme = useTheme();
  const githubIconUrl =
    "https://img.icons8.com/?size=100&id=u9R54eMKS8fw&format=png&color=000000"; // GitHub logo URL
  const logoUrl = "../logo512.png"; // Replace with your local logo file path

  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <Logo src={logoUrl} alt="Logo" />
        </LogoContainer>

        <NavItems>
          <NavLink onClick={() => handleScroll("About")}>About</NavLink>
          <NavLink onClick={() => handleScroll("Skills")}>Skills</NavLink>
          <NavLink onClick={() => handleScroll("Experience")}>
            Experience
          </NavLink>
          <NavLink onClick={() => handleScroll("Projects")}>Projects</NavLink>
          <NavLink onClick={() => handleScroll("Education")}>Education</NavLink>
        </NavItems>

        <GithubButton href={Bio.github} target="_blank">
          <img src={githubIconUrl} alt="GitHub" />
        </GithubButton>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
