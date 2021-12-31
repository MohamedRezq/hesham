import Link from "next/link";
import ToggleModeBtn from "./ToggleModeBtn";

const Header = () => {
  return (
    <header className="hidden md:flex justify-around absolute top-5 bg-sky-300 bg-opacity-10 w-full py-5">
      <div className="NavTabs flex space-x-5 text-2xl text-white fw-bolder content-center">
        <div>
          <Link href="#skillsSection">
            <a className="hover:underline">Skills</a>
          </Link>
        </div>
        <div>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div>
        <Link href="#projectsSection">
            <a className="hover:underline">Projects</a>
          </Link>
        </div>
        <div>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div>
        <Link href="#aboutSection">
            <a className="hover:underline">About</a>
          </Link>
        </div>
      </div>
      <div className="ContactMe flex space-x-3 text-2xl text-white fw-bolder content-center">
        <div>
          <Link href="#contactSection">
            <a className="hover:underline">
              <i class="fal fa-comment-alt-dots"></i>
            </a>
          </Link>
        </div>
        <div>
          <Link href="#contactSection">
            <a className="hover:underline">Let's Talk</a>
          </Link>
        </div>
        <div>
            <ToggleModeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
