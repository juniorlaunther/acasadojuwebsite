import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end lg:justify-center overflow-hidden bg-[#e5e5e5] pb-8 lg:pb-0">
      {/* Background Image Integrated */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Mobile Image */}
        <div className="absolute top-0 left-0 w-full h-[65svh] lg:hidden">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1njDxd4-WKMsfbpqErvgJgU71SpRiFsJy4NowyX-Y0RB2Z2BLKQG0prjiwyheEWYtXixtUHbCUlH0Ewzh6eLTBC0-7nLa-63w6YYMbratBfCU8v_VgohRz3PY18FW44KqPIIc4xyT8XBA0mCEz7HIOhF89MZSUCoiqEExHO3l_m3DQCldGXTRT3J-E6Y/s1600/juniorlaunther.jpg" 
            alt="Junior Launther" 
            className="w-full h-full object-cover object-[center_50%]"
          />
          {/* Fade at bottom for mobile */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#e5e5e5] via-[#e5e5e5]/90 to-transparent" />
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[60%]">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1njDxd4-WKMsfbpqErvgJgU71SpRiFsJy4NowyX-Y0RB2Z2BLKQG0prjiwyheEWYtXixtUHbCUlH0Ewzh6eLTBC0-7nLa-63w6YYMbratBfCU8v_VgohRz3PY18FW44KqPIIc4xyT8XBA0mCEz7HIOhF89MZSUCoiqEExHO3l_m3DQCldGXTRT3J-E6Y/s1600/juniorlaunther.jpg" 
            alt="Junior Launther" 
            className="w-full h-full object-cover object-[center_40%]"
          />
          {/* Fade at left for desktop */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#e5e5e5] via-[#e5e5e5]/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#e5e5e5] to-transparent" />
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-[45svh] sm:pt-[50svh] lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:min-h-[100svh]">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left z-20 flex flex-col justify-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-zinc-500 font-bold tracking-[0.2em] uppercase mb-2 sm:mb-6 text-xs sm:text-base"
            >
              Criador de Conteúdo
            </motion.p>
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMzQRRCVh8fFqMe6hx_hOBGh9zBMzVlezg4dVCiKUT7-xqfYM2DfTxajyw0uu46CHkPLSZVZFVs8BY6vVcM-mfYtVDVv0AdzziivynEgpO-N-hLncFXMfpAFEHQ8MnEqfYNI9N9Gq_Mj4pr6dGRpgfJrqFFQm5EmaYackv5h9O5vm8voQ8I000-9_NnRs/s1600/LOGO%20-%20A%20casa%20do%20Ju%20-%20fundo%20transparente%20preto.png"
              alt="A Casa do Ju"
              className="mb-6 sm:mb-8 drop-shadow-sm self-center lg:self-start object-contain max-h-[100px] sm:max-h-[160px] lg:max-h-[220px] w-auto"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-3xl lg:text-4xl text-zinc-700 font-medium mb-8 lg:mb-14 font-heading"
            >
              @acasadoju
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center lg:justify-start"
            >
              <a 
                href="#contato"
                className="bg-zinc-900 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-zinc-800 transition-all hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Seja um Parceiro
              </a>
              <a 
                href="#projetos"
                className="text-zinc-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-sm sm:text-lg border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Conhecer Projetos
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-900 hidden lg:block z-20"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
