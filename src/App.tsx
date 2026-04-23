import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MapIcon, 
  MessageCircle, 
  ChefHat,
  ChevronDown
} from 'lucide-react';

const menuData = [
  {
    category: "Para Começar / Starters",
    items: [
      { name: "Burrata", price: "10,5 €", desc: "With roasted tomatoes, olive oil, balsamic and basil. Served with salad and toast." },
      { name: "Mini Aubergines", price: "10,5 €", desc: "With honey, feta & coriander. 100% Greek. Delicious. (Vegan version available)" },
      { name: "Courgette & Carrot Soup (Vegan)", price: "6,5 €", desc: "The soup my grandmother used to make. Courgette, carrot and onions cream." },
      { name: "Thai Soup", price: "8,5 €", desc: "With mushrooms, grouper, or shrimps. Tomato, onions and bell pepper. Served with cheese bread." },
      { name: "Portuguese Cheese Plate", price: "19,5 €", desc: "A selection of cow, sheep and goat cheese. Served with toasts and grapes." },
      { name: "Shrimps with Garlic", price: "15,5 €", desc: "Shrimps, olive oil, garlic and coriander (cilantro). Simple & Delicious!" },
      { name: "Chicken Satay", price: "10,5 €", desc: "A trip to Indonesia... Marinated in spices, grilled, with peanut sauce." },
      { name: "Bread, Butter & Cheese Mix", price: "5 €", desc: "Made in-house. Seasoned with lemon & black pepper, wrapped in dried fruits." }
    ]
  },
  {
    category: "Peixe / Fish",
    items: [
      { name: "Grouper Moqueca", price: "23 €", desc: "From Brasil... Onions, tomatoes, peppers, palm oil and coconut milk. Served with white rice." },
      { name: "Tuna Steak", price: "24 €", desc: "Grilled tuna with soya, balsamic, honey, dill & ginger sauce. Served with potatoes." },
      { name: "Cod Fish Papillote", price: "24 €", desc: "A nice mix of flavours. Fresh cod fillet, sweet and sour sauce, vegetables and shrimps." },
      { name: "Roasted Salmon", price: "22 €", desc: "With butter, parsley, ginger and egg sauce. Served with potatoes and roasted tomatoes." },
      { name: "Cod Fish - Old Fashioned", price: "24 €", desc: "The Portuguese old fashioned way with a twist." }
    ]
  },
  {
    category: "Carne / Meat",
    items: [
      { name: "Folhado de Aves", price: "22 €", desc: "Duck, chicken and turkey, marinated in Port wine with mushrooms and coriander in filo pastry. (Not every day)" },
      { name: "Arroz de Pato", price: "22 €", desc: "Portuguese tradition. Duck rice cooked in duck broth with garlic, mustard, red wine, soy, and cashews." },
      { name: "Beef Stroganoff", price: "25 €", desc: "Beef tenderloin, mushrooms, tomato, cream, oyster sauce, mustard. With white rice or potato purée." },
      { name: "Lamb Stew with Spinach Purée", price: "24 €", desc: "Marinated in tomato purée and Indonesian spices. Served with potato purée, red pepper and spinach." },
      { name: "Cascata de Carne de Vaca", price: "23 €", desc: "Beef cooked for 4 hours in a rich tomato sauce with zucchini." }
    ]
  },
  {
    category: "Vegetariano / Vegetarian",
    items: [
      { name: "Beringela com Vegetais e Côco", price: "19 €", desc: "Stuffed aubergine with vegetables and coconut. Gratin finish. (Vegan version available)" },
      { name: "Folhado de Alho Francês", price: "19 €", desc: "Leek, zucchini, coriander, onion in sweet & sour bechamel, with feta, in filo pastry. (Vegan version available)" }
    ]
  },
  {
    category: "Sobremesas / Desserts",
    items: [
      { name: "Chocolate Mousse", price: "7 €" },
      { name: "Mango Mousse", price: "7 €" },
      { name: "Homemade Cake", price: "7 €" },
      { name: "Homemade Ice Cream", price: "12 €" },
      { name: "Chocolate Soufflé", price: "12 €", desc: "Made to order - 10 minutes" },
      { name: "Red Berries Tart", price: "12 €", desc: "Made to order - 20 minutes" },
      { name: "Chocolate Tart", price: "12 €", desc: "Made to order - 20 minutes" },
      { name: "Apple Tart", price: "12 €", desc: "Made to order - 20 minutes" },
      { name: "Lemon Tart", price: "12 €", desc: "Made to order - 20 minutes" },
      { name: "Roasted Apple", price: "7 €", desc: "Made to order - 15 minutes" }
    ]
  }
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const phoneNumber = "+351932910125";
  const mapsLink = "https://www.google.pt/maps/place/Restaurante+Pastanaga/@38.7089856,-9.1552906,17z/data=!3m2!4b1!5s0xd193483b84b5ed1:0xb3dcca96a003c8f0!4m6!3m5!1s0xd193483b9cb0e55:0xe71ca0a9761d94d4!8m2!3d38.7089856!4d-9.1527157!16s%2Fg%2F11fx9b9454";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* HEADER / NAV */}
      <header className="absolute top-0 inset-x-0 z-50 px-6 sm:px-12 py-8 flex justify-between items-center border-b border-white/10 glass pointer-events-auto">
        <div className="font-serif text-2xl font-bold tracking-widest text-[#D4AF37]">PASTANAGA</div>
        <div className="hidden sm:flex gap-8 text-xs font-light tracking-[0.2em] uppercase text-white">
          <span className="cursor-pointer hover:text-[#D4AF37] transition-colors" onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}>Menu</span>
          <span className="cursor-pointer hover:text-[#D4AF37] transition-colors" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>Lounge</span>
          <span className="cursor-pointer hover:text-[#D4AF37] transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Contact</span>
        </div>
        <a href={`tel:${phoneNumber}`} className="hidden sm:inline-block text-xs font-semibold text-[#D4AF37] border border-[#D4AF37] px-5 py-2 hover:bg-[#D4AF37] hover:text-black transition-all">
          {phoneNumber}
        </a>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950"></div>
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent to-zinc-950/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Lisbon's Hidden Jewel
            </h2>
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tight mb-8">
              Authentic Flavors, <br/><span className="italic text-[#F5F5F0]">Refined Living.</span>
            </h1>
            <p className="text-white/60 font-light text-lg sm:text-xl max-w-xl mx-auto mb-12">
              Located in the heart of Lisbon, Restaurante Pastanaga offers an intimate culinary journey blending Portuguese tradition with global inspirations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-[#D4AF37] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone size={14} />
                Book Now
              </button>
              <a 
                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#D4AF37] text-white transition-all flex items-center gap-2"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="text-white/40" size={24} />
        </div>
      </section>

      {/* ABOUT / LOUNGE */}
      <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <div className="h-px w-12 bg-[#D4AF37]"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">The Experience</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
                An Intimate <br/><span className="text-[#D4AF37] italic">Atmosphere.</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                Welcome to Restaurante Pastanaga, nestled in the heart of Lisbon. We craft memories from childhood into culinary surprises, merging rich Portuguese traditions with global influences like Brazilian Moqueca and Indonesian spices.
              </p>
              <div className="p-6 glass border border-white/10">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-2 italic">
                  Private Lounge
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">
                  Exclusively for group bookings. Our lounge accommodates up to 18 guests for private celebrations, corporate events, and intimate dinners.
                </p>
                <div className="pt-4 border-t border-white/10">
                   <a 
                      href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 hover:text-[#D4AF37] transition-colors"
                    >
                      <MessageCircle size={14} />
                      Enquire on WhatsApp
                    </a>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass border border-white/10 p-2">
               <img 
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fine dining experience" 
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto glass border border-white/10 p-8 sm:p-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 border-b border-white/10 pb-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">The Menu</h2>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] mt-4 sm:mt-0">Chef's Selection</span>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {menuData.map((section, sIdx) => (
              <FadeIn key={sIdx} delay={0.1}>
                <div>
                  <h3 className="font-serif text-2xl text-[#D4AF37] mb-8 italic text-center sm:text-left">
                    {section.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="group cursor-default">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                          <span className="font-sans text-sm font-semibold text-[#F5F5F0] group-hover:text-[#D4AF37] transition-colors pr-4">
                            {item.name}
                          </span>
                          <span className="font-sans font-medium text-[#D4AF37] pl-4 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        {item.desc && (
                          <p className="text-[11px] text-white/50 italic leading-snug">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col h-full space-y-8">
            <div className="glass border border-white/10 p-8 flex-grow flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#D4AF37] transition-colors">
              <span className="block text-xs uppercase tracking-widest text-white/40 mb-4">Visit Us</span>
              <p className="font-serif text-xl sm:text-2xl leading-relaxed mb-6 group-hover:text-[#D4AF37] transition-colors">
                Tv. dos Pescadores 27,<br/>1200-328 Lisboa
              </p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="text-[10px] text-[#D4AF37] underline tracking-widest uppercase flex items-center gap-2">
                <MapPin size={12} /> Get Directions
              </a>
            </div>
          </div>

          <div className="flex-col h-full space-y-8">
            <div className="glass border border-white/10 p-8 h-full">
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] mb-6 flex items-center justify-between">
                <span>Opening Hours</span>
                <Clock size={14} className="text-white/40" />
              </h3>
              <ul className="text-[11px] space-y-4 tracking-wider">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon / Wed / Thu</span> <span className="text-white/80">10:00 - 23:30</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Friday</span> <span className="text-white/80">10:00 - 23:30</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Sat / Sun</span> <span className="text-white/80">18:00 - 23:30</span></li>
                <li className="flex justify-between text-[#D4AF37] pt-2"><span>Tuesday</span> <span className="uppercase">Closed</span></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 justify-between h-full">
             <div className="glass border border-white/10 p-8 flex-grow space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Connect</h3>
                <p className="text-xs text-white/50 leading-relaxed">Reach out to us directly for bookings or event inquiries.</p>
             </div>
             
             <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noreferrer" className="w-full py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-center text-xs font-bold uppercase tracking-widest hover:bg-[#25D366]/20 transition-all flex justify-center items-center gap-2">
                <MessageCircle size={14} /> WhatsApp Booking
             </a>
             
             <a href={`tel:${phoneNumber}`} className="w-full py-4 glass border border-white/10 text-[#D4AF37] text-center text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex justify-center items-center gap-2">
                <Phone size={14} /> Call {phoneNumber}
             </a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-24 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase text-white/30 tracking-[0.3em]">
          <p>&copy; {new Date().getFullYear()} Restaurante Pastanaga Lisboa</p>
          <p>Lisbon · Santos · Estrela</p>
        </div>
      </footer>
    </div>
  );
}
