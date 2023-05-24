import "./NewSkillForm.css"
import { useState } from "react";

export default function NewSkillForm({addSkill}){
    const [newSkill, setNewSkill] = useState({
        bingo:'', 
        level: 3
    })
    function handleChange (e){
        setNewSkill({
            ...newSkill,
            [e.target.name]: e.target.value
        })
    }
    function handleAddSkill(e) {
        e.preventDefault();
        addSkill(newSkill)
        setNewSkill({
            bingo: '',
            level: 3
        })
    }
    return (
        <>
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            Skill: <input type="text" name="bingo"
                value={newSkill.bingo}
                onChange={handleChange}
                required
                pattern=".{3,}"
                />
            
            Level: 
                <select name="level"
                value={newSkill.level} 
                onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            <button type="submit">ADD SKILL</button>
        </form>
        </>
    );
}