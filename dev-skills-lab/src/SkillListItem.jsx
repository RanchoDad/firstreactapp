import "./SkillListItem.css"

export default function SkillListItem(props) {
    return (
        <li className="border-box">
           {props.bingo} <span className="level">LEVEL {props.level}</span>
        </li>
    )
}