import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

const projects = [
  {
    id: 'reforma',
    title: 'Reforma da Casa',
    description: 'Junior compartilha com seus seguidores cada etapa da reforma de sua própria casa, combinando criatividade, estética e praticidade. Os vídeos mostram desde a escolha dos produtos e execução da mão de obra até os resultados finais.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo4vovCK2GNFV5qMEJ4VQnoyf9sxHfB9Imw5AHQj6GFMMrWIas7muUjvsi05lYFLTEEG9frJB86bzzpKqZyuXe7gIXKjOa1iug1TgoVVtMMS1ieovqGy_QKSU-8F1WYEl58RHbUlds7yeoQVVMT9rDeoLjyuAz0rfNjwAol0zx6XtW013aG3peqt9jZ2g/w640-h360/reformando.png',
    tags: ['DIY', 'Decoração', 'Vlog']
  },
  {
    id: 'festa',
    title: 'Reality Festa Impossível',
    description: 'Um reality vertical que estreou alcançando mais de 350 mil pessoas organicamente. A primeira temporada mostrou os bastidores de uma festa de 30 anos country. Segunda temporada confirmada para novembro de 2026 (tema floral).',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6KpQd1uinVi-hGkUS32Mjw2CTlp2R-hEB2xjLTlJfs-lpt3lOTEtIT0fwOnGkszyj6TL5mOmRjbnzUZaQ118bkL_ZxjhrOQcs_GUcZbsyWqslDsoqVNkao8rT0xLiPh4AfUbUHPhUa3CCv-LdL5zhyphenhyphenuaDvUgm_Q7RkXY888GiIuRMi3pGiwoGFhSRCC8/w640-h360/01%20-%20CAPA.png',
    tags: ['Vertical', 'Reality', 'Eventos']
  },
  {
    id: 'atelie',
    title: 'Ateliê do Ju',
    description: 'Novo projeto para o segundo semestre de 2026. Um formato de entretenimento onde influenciadores famosos são convidados para pintar uma obra de arte em tela com o Junior, unindo arte, roleta de desafios e muita diversão.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrgIboS3SVF-a_L3uzCtNwCunCzTUxYE1Xsf_WgLsWTBnr9altqi1pBj1Ep3dZkwKVB1oCGOax6faTh_KSpfTf7tK0Z6iJoB05malXb9ujT-IAIzSzBXkObGWqweIxNE93etaFFbHNU7PrjbRJRNFyLUnJt-EZqGQwmKobZywv52HvHmf1fVYMI5vmej0/w640-h360/atelie.png',
    tags: ['Arte', 'Collabs', 'Talk Show']
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-12 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="font-heading font-black text-5xl sm:text-7xl mb-6 tracking-tight">
            PROJETOS AUTORAIS
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto lg:mx-0">
            A Casa do Ju nasceu como um perfil de DIY e vem se transformando em um universo de conteúdos que inspiram, divertem e engajam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group flex flex-col bg-zinc-800 rounded-3xl overflow-hidden hover:bg-zinc-800/80 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                {project.id === 'atelie' && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider shadow-lg">
                    <Star size={14} className="fill-current" />
                    EM BREVE
                  </div>
                )}
                {project.id === 'festa' && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider shadow-lg">
                    <Star size={14} className="fill-current" />
                    EM BREVE 2ª TEMPORADA
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-nowrap w-full">
                  {project.tags.map(tag => (
                    <span key={tag} className="flex-1 text-center text-[10px] xl:text-[11px] font-bold px-1 py-1.5 bg-zinc-700 rounded-full tracking-wider uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-3xl mb-4">{project.title}</h3>
                <p className="text-zinc-400 mb-8 flex-grow text-justify">{project.description}</p>
                
                <a 
                  href={`https://wa.me/5519988508110?text=${encodeURIComponent(`Olá, quero patrocinar o projeto ${project.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-pink-400 transition-colors group-hover:gap-4 mt-auto w-fit"
                >
                  FAÇA PARTE <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
