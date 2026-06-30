import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

// Using realistic looking mock posts
const posts = [
  {
    id: '1',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw8I8WwJoJbLnNFQV30s-8v048w47IjcXOWnbjJF9ExstFxlvuVGuOXP1Mf_bOPzeDd8YN8atyQYAamLgu9Q9LBRrs0EROVhz1ci97I6UW5iHO09wXzwf3osoQdvqAlR4HI6Ce2FUQO3xmqYtp4JPV145M8EXipCaotqK6be9RP6csdrANNOhRjOyM_HY/s320/ChatGPT%20Image%2030%20de%20jun.%20de%202026,%2015_05_20%20(1).png',
    views: '128k',
    link: 'https://www.instagram.com/p/DYfotOnhRti/'
  },
  {
    id: '2',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtYmXUC4oxoNtkboRtwthqhj5U7thyphenhyphen2sAO-HWtE95yZGsOfaM_Dt334mV2dj_9M6b6jlVpIWrTRoATA_LQJoGem242arzRfTdGoxP9JISF6lTR2CGKTxoyKCcoNhohdTMwZY3lnKfI5CDICozTWvR4dYAPrKoJTx4V1KJ7CW2NaavAIQvUNTt599Ht310/s320/ChatGPT%20Image%2030%20de%20jun.%20de%202026,%2015_05_21%20(6).png',
    views: '83k',
    link: 'https://www.instagram.com/p/DYSwvbJhpDz/'
  },
  {
    id: '3',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqo8SZW4VBgxEd8Y5ZTOskOmKRlh2AlknZvmI4mOyIzFWoo0re7g81JBw-2vSSIF9i7a-HEgt1r0Uhwmzm-QKPQFl448rVhrHfUIG120_YEIb-xGGdpoWMNrpXjnPU8LR4dVkGOZF8vyA9cZbkbecfh3DM9LRxnHJJWehvHo7Ibbp01GBzk3JPTb2Gecc/s320/ChatGPT%20Image%2030%20de%20jun.%20de%202026,%2015_05_21%20(4).png',
    views: '19k',
    link: 'https://www.instagram.com/p/DD0IK_By167/'
  },
  {
    id: '4',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcz4RsmW7Lkx7v85YKHl3nzt8Kb-F95FHOp8GxEIjZj_PDlyW0xA2FF-RE1ZpLUuQB5aHeG0GYrEU-zRpyWjy9bmDbHZs3mqSD5e48csuWFmo2Y9KDPZWYMzlKBY7KHkThaaHufm4kkPYHCsBJCVpDBTJBu3d5IpLTtQvi9WSN75K0jjZsWiHlWsbG4q0/s320/ChatGPT%20Image%2030%20de%20jun.%20de%202026,%2015_05_20%20(3).png',
    views: '808k',
    link: 'https://www.instagram.com/p/DC2bKu8yem2/'
  },
  {
    id: '5',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7UtwvMb0qpVxf8KumzQIxlSFzdezsV7y_HWde9pLxb7U-fC6DhOaxHK1DJ_1U8DH6_sjqjsYMYr_88GbBayZ8CZDhNDJsBeatz2Hdlk45OlWzK1pehDH3fpKKQQK6jGm477qXBoJxJgMuAdGdnWQtHa66p4gK1NbyYKL2nCutcs1JQB9uDc8NB4gEXRg/s320/ChatGPT%20Image%2030%20de%20jun.%20de%202026,%2015_05_20%20(2).png',
    views: '10k',
    link: 'https://www.instagram.com/p/DVqwxjvIZzJ/'
  },
  {
    id: '6',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihWMsPP7-eMKVhrGB4faOjkWGH-oy0e3rwxoTOiLr6ZFjwQUwagmF2YF9Ih6gCnxha4DzlhgY_gKICSyPJ8C8jaDNTSHNMcjpaJAuRhfrB1ioiR_8fx2rnsGD7bWaN3SlUgFnRrQMn-b3o1YDDPWwz9uiKfUABAzWyQZ9dmFDfTBBzBf4258kJHDCKRUo/s320/ChatGPT%20Image%2030%20de%20jun.%20de%202026,%2015_05_21%20(5).png',
    views: '24k',
    link: 'https://www.instagram.com/reels/C7U00BBP-Pr/'
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-6 sm:py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 sm:mb-12 gap-6 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black tracking-tight">
              <span className="block text-4xl sm:text-6xl text-zinc-900">ACOMPANHE NO</span>
              <span className="block text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                INSTAGRAM
              </span>
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://instagram.com/acasadoju"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors"
          >
            Seguir @acasadoju
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square bg-zinc-100 overflow-hidden rounded-xl sm:rounded-2xl block"
            >
              <img 
                src={post.imageUrl} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2 font-bold text-lg">
                  <Eye size={24} />
                  <span>{post.views}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
