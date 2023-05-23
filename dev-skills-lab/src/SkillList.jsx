import SkillListItem from "./SkillListItem"

export default function SkillList(props){
    return (
        <>
            <ul>
                {props.skills.map((skill, idx) => {
                    return<SkillListItem name={skill.name} level={skill.level} key={idx} index={idx}/>
                })}
            </ul>
        </>
    );
}