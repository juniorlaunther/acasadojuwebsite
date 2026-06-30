import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-12 bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-zinc-200/50 flex flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1"
          >
            <h2 className="text-center lg:text-left font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-zinc-900 mb-6 sm:mb-8 tracking-tight">
              QUEM É JU?
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans text-justify">
              <p>
                <strong className="text-zinc-900">Junior Launther</strong> é o nome por trás do perfil A Casa do Ju — artista, empresário e criador experiente, com mais de 16 anos de atuação no universo digital. Brasileiro, nascido em Campinas/SP, Junior iniciou sua jornada na internet em 2009, tornando-se um dos primeiros youtubers do país a produzir vídeos em alta resolução. Desde então, construiu uma carreira pautada pela inovação, estratégia e consistência.
              </p>
              <p>
                Com formação técnica em artes e experiência acadêmica nas áreas de arquitetura e engenharia, ele alia visão estética, domínio técnico e inteligência de mercado para produzir conteúdos que engajam e encantam seu público.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative min-h-[400px] lg:min-h-full order-1 lg:order-2"
          >
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZpIUI9zXLtDtsSQ-Elu6SZzMzCwOJhpwWEC4dqUOtMl72_z7wBN16sWbFrt_U7bKoZtrc6-vKuHnXHTWMn_fmkEeCYzQgg973od-aln0C-Uqfync9m2XRt-jLBb6oiZKW1t89_TIR1HS3shmBeZlzQsnshCGF_ZFPlJdkdokK4hPyX7GDBhOmRixNYFg/w480-h640/junior%20launther%20sobre.png"
              alt="Junior Launther sobre"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
