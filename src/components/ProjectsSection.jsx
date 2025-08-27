import { Github, ExternalLink } from 'lucide-react';
import img1 from '../assets/Foodie.png';
import img2 from '../assets/gemini.png';
import img3 from '../assets/say.io.png';
import img4 from '../assets/tic-tac-toe.png';
import img5 from '../assets/wallet-login.png';

const projects = [
	{
		title: 'Tic-Tac-Toe Game',
		description: 'A fun tic-tac-toe game with React and TailwindCSS.',
		tech: ['React', 'TailwindCSS', 'JavaScript'],
		image: img4,
		github: 'https://github.com/Vercetti1/07-tic-tac-toe-starting-project.git',
		live: 'https://tictacproject.netlify.app/',
		color: 'from-blue-500 to-purple-600',
	},
	{
		title: 'Anonymous Web App',
		description: 'A secure anonymous messaging platform.',
		tech: ['HTML', 'CSS', 'JavaScript'],
		image: img3,
		github: 'https://github.com/Vercetti1/Anonymous-.git',
		live: 'https://quietio.netlify.app',
		color: 'from-purple-500 to-pink-600',
	},
	{
		title: 'E-Wallet Web App',
		description: 'A digital wallet for easy online payments.',
		tech: ['React', 'Node.js', 'MongoDB'],
		image: img5,
		github: 'https://github.com/Vercetti1/wallet-app.git',
		live: 'https://t-wallet.netlify.app/',
		color: 'from-green-500 to-teal-600',
	},
	{
		title: 'Gemini AI Chatbot Clone',
		description: 'A chatbot powered by AI and TypeScript.',
		tech: ['React', 'TypeScript', 'TailwindCSS'],
		image: img2,
		github: 'https://github.com/Vercetti1/Gemini-Powered-Chatbot-main.git',
		live: 'https://tomisin-gemini.netlify.app/',
		color: 'from-yellow-500 to-orange-600',
	},
	{
		title: 'Foodie Web App',
		description: 'Discover and review restaurants near you.',
		tech: ['React', 'Firebase', 'Geolocation'],
		image: img1,
		github: 'https://github.com/Vercetti1/Foodie.git',
		live: 'https://thefoodie1.netlify.app/',
		color: 'from-red-500 to-pink-600',
	},
];

const ProjectsSection = ({ theme }) => (
	<section id="projects" className="py-20 relative">
		<div className="container mx-auto px-4 sm:px-6">
			<h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-in-on-scroll">
				Featured Projects
			</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<div
						key={index}
						className={`${theme.cardBg} rounded-xl overflow-hidden hover:transform hover:scale-105 hover:rotate-1 transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer animate-slide-up-on-scroll relative`}
						style={{ animationDelay: `${index * 0.2}s` }}
					>
						<div
							className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none`}
						></div>
						<div className="relative overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-2 transition-transform duration-700"
							/>
							<div
								className={`absolute inset-0 bg-gradient-to-t from-${
									theme.isDark ? 'gray-900' : 'gray-100'
								}/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							>
								<div className="absolute bottom-4 left-4 right-4">
									<div className="flex space-x-3">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 pointer-events-auto"
										>
											<Github className="w-4 h-4" />
										</a>
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 pointer-events-auto"
										>
											<ExternalLink className="w-4 h-4" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="p-6 relative z-20">
							<h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
								{project.title}
							</h3>
							<p
								className={`${
									theme.textMuted
								} mb-4 text-sm group-hover:${theme.textSecondary} transition-colors duration-300`}
							>
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((tech, techIndex) => (
									<span
										key={techIndex}
										className={`px-3 py-1 ${
											theme.isDark ? 'bg-gray-700' : 'bg-gray-200'
										} rounded-full text-xs font-medium text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110`}
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default ProjectsSection;