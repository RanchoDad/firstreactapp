import "./SkillListItem.css"

export default function SkillListItem(props) {
    return (
        <li className="border-box">
           {props.name} <span className="level">LEVEL {props.level}</span>
        </li>
    )
}