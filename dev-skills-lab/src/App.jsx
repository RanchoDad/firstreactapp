import './App.css';
import SkillList from './SkillList';
import NewSkillForm from "./NewSkillForm";
import { useState } from 'react';


function App() {
  const [skills, setSkills] = useState([
    { bingo: "HTML", level: 5 },
    { bingo: "CSS", level: 3 },
    { bingo: "JavaScript", level: 4 },
    { bingo: "Python", level: 2 },
  ])
  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill])
  }
  return (
    <div className="App color-text">
      <h1>React Dev Skills</h1>
      <SkillList skills = {skills} />    
      <hr />
      <NewSkillForm addSkill={addSkill}></NewSkillForm>
    </div>

  );
}

export default App;
