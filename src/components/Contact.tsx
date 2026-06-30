import { motion } from 'motion/react';
import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "5519988508110";
  const email = "contato@juniorlaunther.com";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vim pelo site da A Casa do Ju e gostaria de falar sobre parcerias.")}`;

  return (
    <section id="contato" className="py-8 sm:py-16 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-50 rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-500 font-medium tracking-widest uppercase mb-4">
            Entre em Contato
          </p>
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMzQRRCVh8fFqMe6hx_hOBGh9zBMzVlezg4dVCiKUT7-xqfYM2DfTxajyw0uu46CHkPLSZVZFVs8BY6vVcM-mfYtVDVv0AdzziivynEgpO-N-hLncFXMfpAFEHQ8MnEqfYNI9N9Gq_Mj4pr6dGRpgfJrqFFQm5EmaYackv5h9O5vm8voQ8I000-9_NnRs/s1600/LOGO%20-%20A%20casa%20do%20Ju%20-%20fundo%20transparente%20preto.png" 
            alt="A Casa do Ju"
            className="h-20 sm:h-32 object-contain mx-auto mb-12 drop-shadow-sm"
          />

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-white p-8 rounded-3xl hover:bg-[#1ebd5a] transition-all hover:-translate-y-1 shadow-lg shadow-[#25D366]/20 flex flex-col items-center justify-center gap-4 group"
            >
              <MessageCircle size={40} className="group-hover:scale-110 transition-transform" />
              <div>
                <span className="block font-bold text-xl mb-1">WhatsApp</span>
                <span className="opacity-90 font-medium">+55 19 98850-8110</span>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex-1 bg-zinc-900 text-white p-8 rounded-3xl hover:bg-zinc-800 transition-all hover:-translate-y-1 shadow-lg shadow-zinc-900/10 flex flex-col items-center justify-center gap-4 group"
            >
              <Mail size={40} className="group-hover:scale-110 transition-transform" />
              <div>
                <span className="block font-bold text-xl mb-1">E-mail</span>
                <span className="opacity-90 font-medium">{email}</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
