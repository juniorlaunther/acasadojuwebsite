import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

function TiktokIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function PinterestIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
    </svg>
  );
}

const stats = [
  {
    platform: 'Instagram',
    count: '177 MIL',
    label: 'SEGUIDORES',
    icon: Instagram,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    mobileBg: 'bg-gradient-to-r from-pink-600 to-purple-600',
    url: 'https://www.instagram.com/acasadoju'
  },
  {
    platform: 'YouTube',
    count: '23 MIL',
    label: 'INSCRITOS',
    icon: Youtube,
    color: 'text-red-600',
    bg: 'bg-red-50',
    mobileBg: 'bg-gradient-to-r from-red-600 to-red-500',
    url: 'https://youtube.com/juniorlaunther'
  },
  {
    platform: 'TikTok',
    count: '70 MIL',
    label: 'SEGUIDORES',
    icon: TiktokIcon,
    color: 'text-zinc-900',
    bg: 'bg-zinc-100',
    mobileBg: 'bg-gradient-to-r from-zinc-900 to-black',
    url: 'https://www.tiktok.com/@acasadoju'
  },
  {
    platform: 'Facebook',
    count: '106 MIL',
    label: 'SEGUIDORES',
    icon: Facebook,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    mobileBg: 'bg-gradient-to-r from-blue-600 to-blue-500',
    url: 'https://facebook.com/acasadoju'
  },
  {
    platform: 'Pinterest',
    count: '+3 MILHÕES',
    label: 'VIEWS MENSAIS',
    icon: PinterestIcon,
    color: 'text-[#E60023]',
    bg: 'bg-red-50',
    mobileBg: 'bg-gradient-to-r from-[#E60023] to-[#C9001B]',
    url: 'https://pinterest.com/acasadoju'
  }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.a
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              key={stat.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`flex flex-row md:flex-col items-center justify-between md:justify-center p-5 md:p-4 lg:p-6 rounded-2xl sm:rounded-3xl ${stat.mobileBg} hover:opacity-90 md:hover:scale-105 md:hover:opacity-100 transition-all duration-300`}
            >
              <div className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0 bg-white/20 text-white mb-0 md:mb-4">
                <stat.icon size={24} className="md:hidden" />
                <stat.icon size={20} className="hidden md:block lg:hidden" />
                <stat.icon size={28} className="hidden lg:block" />
              </div>
              <div className="text-right md:text-center overflow-hidden w-full">
                <h3 className="font-heading font-bold text-2xl md:text-lg lg:text-2xl xl:text-3xl text-white mb-1 md:mb-2 tracking-tight truncate">
                  {stat.count}
                </h3>
                <p className="text-white/90 font-medium tracking-tight xl:tracking-widest uppercase text-[10px] lg:text-xs truncate">
                  {stat.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
