interface Skill {
  title: string;
  description: string;
  color: string;
}

interface SkillsListProps {
  skills: Skill[];
}

export const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center gap-3 text-zinc-300">
            <span className="font-medium">{skill.title}</span>
          </div>
          <p className="ml-5 text-sm text-zinc-400">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};
