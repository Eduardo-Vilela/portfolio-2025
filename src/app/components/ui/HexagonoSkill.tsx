import React from 'react'
import '@/styles/components/hexagono.css'

interface Skill {
  name: string;
  // Add other properties as needed
}

function HexagonoSkill({ skill }: { skill: Skill }) {
  return (
    <div className="hexagon">
        <div className="hexagon-name">
            {skill.name}
        </div>
    </div>
  )
}

export default HexagonoSkill