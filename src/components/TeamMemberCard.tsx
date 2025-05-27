import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-[#278493] font-medium mb-2">{member.title}</p>
        <p className="text-sm text-gray-600 mb-4">{member.specialties}</p>
       <div className="space-y-4 text-gray-700 mb-4">
  {member.description.split('\n').map((para, idx) => (
    <p key={idx}>{para.trim()}</p>
  ))}
</div>

        <blockquote className="italic text-gray-600 border-l-4 border-[#278493] pl-4 py-1">
          "{member.quote}"
        </blockquote>
      </div>
    </div>
  );
};

export default TeamMemberCard;