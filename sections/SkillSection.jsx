import SkillTabs from "components/SkillTabs"

const SkillSection = ({ skills }) => {
    return (
        <div className="py-10">
            <hr className="py-2"/>
            <div className="text-2xl md:text-5xl flex justify-center content-center tracking-wider py-3 font-serif">
                Skills
            </div>
            <hr className="w-5 md:w-10 mx-auto border-1 border-black"/>
            <SkillTabs skills={skills} />
        </div>
    )
}

export default SkillSection
