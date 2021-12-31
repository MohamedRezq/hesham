import { slideInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import avatarImg from "assets/AvatarMaker.png";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

const BouncyDiv = styled.div`
  animation: 10s ${slideInLeftAnimation};
`;

const Banner = () => {
  return (
    <div className="w-100 bg-cyan-700 pt-5 lg:pt-20 mb-20">
      <div className="flex flex-col-reverse sm:flex-row justify-between content-center sm:w-10/12 md:w-3/4 w-2/3 mx-auto py-20">
        <div className="flex flex-col justify-center space-y-7 text-white fw-bold mx-auto text-center pt-10 md:pt-0">
          <BouncyDiv className="text-3xl md:text-5xl lg:text-6xl tracking-wider">
            Hi, I'm REZQ
          </BouncyDiv>
          <BouncyDiv className="text-lg md:text-2xl lg:text-3xl">
            A Full-Stack Web Developer
          </BouncyDiv>
        </div>
        <div className="flex content-center justify-center">
          <div className="w-3/4 border-4 border-double rounded-full flex justify-center content-center bg-cyan-900">
            <Image src={avatarImg} />
          </div>
        </div>
      </div>
      <div className="relative">
        <svg
          preserveAspectRatio="none"
          style={{ width: "100%", height: "74" }}
          viewBox="0 0 1440 74"
        >
          <path
            fill="white"
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
          ></path>
        </svg>
        <a
          href="https://www.buymeacoffee.com/dgauderman"
          target="_blank"
          className="md:absolute top-0 right-0 p-4 float-right animate-bounce"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
            alt="Buy Me A Coffee"
            className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
