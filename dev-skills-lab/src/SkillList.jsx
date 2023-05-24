import SkillListItem from "./SkillListItem"

export default function SkillList(props){
    return (
        <>
            <ul>
                {props.skills.map((skill, idx) => {
                    return<SkillListItem bingo={skill.bingo} level={skill.level} key={idx} index={idx}/>
                })}
            </ul>
        </>
    );
}