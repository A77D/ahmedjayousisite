import { FC, ReactNode } from "react";
import "./Skills.css";

interface CardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
}

const Card: FC<CardProps> = ({ title, icon, skills }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="front-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '1rem' }}>
            {icon}
            <strong style={{ marginTop: '1rem' }}>{title}</strong>
          </div>
        </div>
        <div className="back">
          <div className="back-content" style={{ padding: '1.5rem' }}>
            <p className="title" style={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                <strong>{title}</strong>
            </p>
            <div className="skills-list">
                {skills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>&gt;</span>
                    <span>{skill}</span>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
