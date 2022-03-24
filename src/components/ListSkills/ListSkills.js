import React from 'react'
import SkillBar from 'react-skillbars';
import './ListSkills.scss';


const ListSkills = ({skills, colors}) => {
    console.log(skills);
  return (
  <div className='list-skills'>
     <SkillBar skills={skills} colors={colors} animationDelay={0} animationDuration={1500}/>
  </div>
    )
}

export default ListSkills