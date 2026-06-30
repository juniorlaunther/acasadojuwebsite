import { motion } from 'motion/react';

const brands = [
  { name: 'Wap', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7T4I83tt3vGAIwFa504XjGwxV0I8Hq6AS-oHgTZVtuQBeEdv7k5WTDdQuGTgP6Dio-lAYE0mgJuf5eUMKFdnbi3egnK2LknXGhfYszY3J94Cf4rlDbNYG8cNm7yO6Xbb92haxytB6hsRbHQhyphenhyphen6ttZfVVrlB_Qhs08fDFvK9g3TnTDcYC7SKnyjrBcdKI/s320/marcas.png' },
  { name: 'Casa Riachuelo', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXiBwXe-Hml48lV7Ie-x-GfIKwiAvAf6C3GE-SWHI2Ug_6YMwZbSwCLvKEryNo8SSGY1py9MSihO37eoaLQSq46_QwCPtHVKiCU9SzQCvW58G9-D5xncFGWWgKR6b1d6rJBX28R0ER65NSneqdtA3ojNyWvohOmfaXYhhYSLDPFy5JQcgBBVK-VB0ohpM/s320/casa%20riachuelo.png' },
  { name: 'Leo Madeiras', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCtJuzefP26hcb-SPamwcCyMHXziu3ocGY4uH7NdNUt7a9oiAFg95FJZAVm-E2WTChb4jYY13slUCPkHGkgDbhQV9RzfPSsW_CHQh7l1tMyZV8N6xp4xL3X5hVE0lrN5yJErbWseR0EZoNELdvYDvSq4drdhRb0mM8qKWavAIR4HsQLLDSL5iNelfAZ6Q/s320/leo%20madeiras.png' },
  { name: 'Guldi', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIjwe6BXHR9I1OnN_nqvVNhQXidJJUrkJB02MX6sbD1DvzimSgG1efqjEMoGP88eOh0sfW0Crfj0KZICtyqYxqX_r1bcjMnIYHsEeyAUCd_5AciZMpxdEsnJUU19jUV7RnQoXuCwnWcJ03uwXG2qVHWEAJR1eSKfSXOmSE18gtE_6JUmKDEwRhXA3ELMM/s320/guldi.png' },
  { name: 'Shopee', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5EcjvGDxCvZQyVnc9lEZ23BUxoNDX2OXkbbbrObxtOfTh0lpf0KjRr-ntFEhJ7-WCGxRI0rMsXHSqOV__pKgfTBfy990sW_s1-DR3nE2F4403-s-D6Dy_ClLaoDRub-NFgQa5SlWF0r8HDuHa1Uql-v5j2jkf4gjXgukzKP2Oak5VZWEhqYBoHaJpda8/s320/shopee.png' },
  { name: 'WAAW by Alok', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8d_4tfgIk2nT1OxkUrzr2_JTUzn11yuMeIqeMROW7Kp1O7dVqlD2Av28lQSAW9s2yyoIHsD5bWhLPoXplsZ4u13bEOrwxeBOoYqJqSS4-ZlfLo_DEn_AchnqXmxbvGYOnmMSvHBtzCkuD3V8PeWw62pw58JpC-ux9BLhODHdijBufPSNB_uhM6XiKwrU/s320/waaw%20by%20alok.png' },
  { name: 'Pinterest', logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4gr0kUS4kRzAt93wTP8LJkIJT1PjWzYc0SdoYF0Ql0f2w-ivyUZlc_AcKx10SX0SyB6s8DSzW2on7XU6latqhbBSHN2iAe7K4Sk7HYek1RWcB9g8d16ddQO5LxIR3uz6fvQ-SmKp9gKZyisnCmeyB4SAYihOpzG3Aa6RdKoDn5M7Tyys1MbUhZPEZIsg/s320/pinterest.png' }
];

export default function Partners() {
  return (
    <section className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-zinc-900 mb-16 tracking-tight">
            SEJA NOSSO PARCEIRO TAMBÉM!
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-32 sm:w-40 lg:w-52 flex items-center justify-center"
              >
                <img 
                  src={brand.logo} 
                  alt={`Logo ${brand.name}`} 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
