import { motion } from 'motion/react';
import { Users, Video, Target } from 'lucide-react';

export default function Audience() {
  return (
    <section className="py-6 sm:py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-5xl sm:text-6xl text-zinc-900 mb-6 tracking-tight"
          >
            PÚBLICO & DESTAQUES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600"
          >
            Uma audiência altamente engajada, predominantemente feminina e focada em transformação.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f2f2f2] p-6 sm:p-12 rounded-[2.5rem] flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16"
          >
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <h3 className="font-heading font-bold text-3xl">Demografia</h3>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  <span>Gênero</span>
                </div>
                <div className="flex items-end gap-4">
                  <span className="font-heading font-black text-5xl text-pink-600">86,8%</span>
                  <span className="text-xl font-medium text-zinc-900 mb-1">Mulheres</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Principais Idades</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-900">25 - 34 anos</span>
                    <span className="font-bold text-pink-600">8%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium text-zinc-900">35 - 44 anos</span>
                    <span className="font-bold text-pink-600">18%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium text-zinc-900">45 - 54 anos</span>
                    <span className="font-bold text-pink-600">30,5%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '30.5%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium text-zinc-900">55 - 64 anos</span>
                    <span className="font-bold text-pink-600">27,8%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div className="bg-pink-400 h-2 rounded-full" style={{ width: '27.8%' }}></div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Top Cidades</p>
                <p className="font-medium text-zinc-900 leading-relaxed">São Paulo, Rio de Janeiro, Salvador, Fortaleza, Belo Horizonte</p>
              </div>
            </div>
          </motion.div>

          {/* Highlight Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 text-white p-6 sm:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
          >
            <div className="flex-1 order-2 md:order-1 flex flex-col justify-center h-full w-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-zinc-800 text-yellow-400 rounded-full flex items-center justify-center shrink-0">
                  <Video size={24} />
                </div>
                <h3 className="font-heading font-bold text-3xl">Vídeo Destaque</h3>
              </div>

              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Vídeo em que Junior transforma o lavabo do banheiro utilizando placas de tijolinho 3D, produto divulgado por meio de link de afiliado.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8 lg:mb-12">
                <div className="bg-zinc-800 p-6 rounded-2xl">
                  <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1">Views</div>
                  <div className="font-heading font-black text-3xl lg:text-4xl text-white">787<span className="text-xl">k</span></div>
                </div>
                <div className="bg-zinc-800 p-6 rounded-2xl">
                  <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1">Curtidas</div>
                  <div className="font-heading font-black text-3xl lg:text-4xl text-white">46<span className="text-xl">k</span></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-zinc-800 p-6 rounded-2xl mt-auto">
                <Target className="text-pink-500 shrink-0" size={32} />
                <div>
                  <p className="font-bold text-lg">Alta Conversão</p>
                  <p className="text-zinc-400 text-sm">Geração expressiva de tráfego orgânico para parceiros</p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[280px] sm:w-[320px] lg:w-[400px] shrink-0 order-1 md:order-2 mx-auto md:mr-0 md:ml-auto">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggiLTGPSUFpzgYfc5wUWAQeVfZuooRcIIAvOd_NtLJcrZGL1Ifcv-wPV2TCqVgQxJPXV4Tc7XOj5dCC02EqZbn4LROk7Alypr_OcqCmigbFpeIKIc_QxVWdSTt0uLEVg-BGpFLu0OW-ZJr8YSXPxFWOyCBZk5P3eVTd2sMtRjZdbMfHgTfAYUKqf5SJuo/s1600/05%20-%20video%20destaque.png"
                alt="Vídeo Destaque"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
