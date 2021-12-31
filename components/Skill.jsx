import Image from "next/image";
import bootstrapLogo from "assets/bootstrapLogo.svg";

const Skill = ({ skill }) => {
  return (
    <div className="flex content-center justify-center skillContainer w-full">
      <div
        className="rounded-full flex content-center justify-center box-content"
        style={{ outline: "solid 8px #D8DCDC" }}
      >
        <Image src={skill.node.img.url} width={50} height={50} className="rounded-full" />
      </div>
      <div className="flex justify-center content-center w-full">
        <div
          className="my-auto px-4 text-md text-stone-900 font-bold rounded-md py-1 w-full"
          style={{ backgroundColor: "#D8DCDC" }}
        >
          {skill.node.name[0].text}
        </div>
      </div>
    </div>
  );
};

export default Skill;
