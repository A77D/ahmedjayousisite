import { FC, ReactNode } from "react";
import "./Skills.css";

interface CardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
}

const Card: FC<CardProps> = ({ title, icon, skills, color }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {icon}
            <strong>{title}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">{title}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="card-footer">
                {skills.map((skill, index) => (
                  <span key={index}>
                    {skill}
                    {index < skills.length - 1 && " | "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;