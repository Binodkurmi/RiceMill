import React from 'react';

function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: 'Binod Kurmi',
      role: 'Lead Developer',
      image: '',
      bio: 'Full-stack developer with 3+ years of experience in building scalable web applications.',
    
    },
    {
      id: 2,
      name: 'Sunil Kumar',
      role: 'UX Designer',
      image: '',
      bio: 'Creative designer passionate about user-centered design and creating intuitive experiences.',
   
    },
    {
      id: 3,
      name: 'Bipin Kurmi',
      role: 'Project Manager',
      image: '',
      bio: 'Experienced project manager with a track record of delivering complex projects on time.',
     
    },
    {
      id: 4,
      name: 'Asif Khan',
      role: 'Frontend Developer',
      image: '',
      bio: 'Frontend specialist focused on creating responsive and accessible web applications.',
      
    },
    {
      id: 5,
      name: 'Rahul Chaudhary',
      role: 'DevOps Engineer',
      image: '',
      bio: 'Infrastructure expert ensuring our systems are scalable, secure, and reliable.',
    
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black mt-15 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-white text-amber-600 shadow-sm border border-amber-100 mb-6">
            OUR TALENTED TEAM
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our <span className="text-amber-500">Elite</span> Operatives
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
            The shadow team that executes missions with precision and lethal efficiency.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-800 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative group border border-gray-700">
              <div className="flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-80"></div>
                  <img 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" 
                    src={member.image} 
                    alt={member.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-amber-500 font-medium">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
              
              {/* Dangerous accent element */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-amber-500 text-white text-xs font-bold py-1 text-center w-24 right-[-32px] top-[32px] shadow-md">
                  ELITE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-800 rounded-2xl p-8 border border-amber-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-amber-500/5"></div>
          <h2 className="text-3xl font-bold text-white relative z-10">Ready for Extraction?</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto relative z-10">
            We're recruiting exceptional talent for high-stakes operations. Think you have what it takes?
          </p>
          <button className="mt-8 px-8 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors shadow-md transform hover:scale-105 relative z-10 border border-amber-500/30">
            Initiate Recruitment Protocol
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;