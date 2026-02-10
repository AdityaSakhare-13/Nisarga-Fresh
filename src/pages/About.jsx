import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Eye, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description:
        "Every crate is subject to a rigorous 12-point quality protocol before it leaves our facility.",
    },
    {
      icon: Globe,
      title: "Stewardship",
      description:
        "We actively invest in carbon-offset logistics and regenerative farming education for our partners.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Our blockchain-enabled supply chain provides total visibility from seed to shelf.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Empowering farming communities through education, fair pay, and infrastructure.",
    },
  ];

  const networkItems = [
    {
      title: "Sustainable Roots",
      description:
        "Supporting small-holder farmers through modern infrastructure and fair market access.",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    },
    {
      title: "Precision Growth",
      description:
        "Integrating proprietary soil-health technology with generational agrarian wisdom.",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80",
    },
    {
      title: "Heritage Varieties",
      description:
        "Preserving rare and heirloom varieties for the sophisticated global palate.",
      image:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    },
  ];

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/16050603/pexels-photo-16050603.jpeg?auto=compress&fit=crop&w=1920&q=80"
            alt="Orchard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">
                Since 1994
              </span>
              <div className="h-[1px] w-8 bg-accent"></div>
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              The Legacy of{" "}
              <span className="italic bg-gradient-to-r from-accent via-[#E5C185] to-accent bg-clip-text text-transparent">
                Premium Harvest
              </span>
            </h1>

            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              For three decades, FruitExport Pro has stood as a beacon of
              quality in the international trade of nature's finest treasures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-6 md:px-12 bg-background-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-6">
                Our Narrative
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Rooted in Passion, Driven by Excellence.
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
                <p>
                  What started as a modest family orchard partnership has
                  evolved into a global network spanning six continents.
                  FruitExport Pro was founded on the belief that the world
                  deserves fruit that tastes as if it were plucked from the
                  branch just moments ago.
                </p>
                <p>
                  Our mission is simple yet profound: To bridge the distance
                  between the world's most dedicated growers and the most
                  discerning consumers, ensuring that every piece of fruit tells
                  a story of integrity, flavor, and respect for the land.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-12">
                <div>
                  <p className="text-3xl font-serif text-primary">30+</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Years of Expertise
                  </p>
                </div>
                <div className="w-px h-12 bg-accent/20"></div>
                <div>
                  <p className="text-3xl font-serif text-primary">100%</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Ethical Sourcing
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80"
                alt="Fresh harvest"
                className="w-full aspect-square object-cover shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary p-8 hidden md:flex flex-col justify-center">
                <span className="text-accent text-4xl mb-4">"</span>
                <p className="text-white font-serif italic text-lg leading-relaxed">
                  Quality is not an act, it is a habit that we cultivate daily
                  in every orchard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-6">
                The Global Network
              </h3>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">
                Our Hands Across the{" "}
                <span className="italic bg-gradient-to-r from-accent via-[#E5C185] to-accent bg-clip-text text-transparent">
                  Hemispheres
                </span>
              </h2>
              <p className="text-slate-300 font-light text-lg">
                We don't just buy fruit; we cultivate lifelong partnerships with
                over 2,400 certified growers who share our commitment to
                regenerative agriculture and peak flavor profiles.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {networkItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden aspect-[4/5]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-2xl font-serif mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="text-4xl font-serif text-primary mb-8">
                Core Values That <span className="italic">Define Us</span>
              </h2>
              <p className="text-slate-600 font-light mb-10 leading-relaxed">
                Our actions are guided by a set of principles that ensure we
                remain at the pinnacle of the fruit export industry while
                fostering a healthier planet.
              </p>
              <button className="border border-primary text-primary px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                Download Annual Report
              </button>
            </motion.div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-8 border-l border-accent/20"
                >
                  <value.icon className="text-accent mb-6" size={30} />
                  <h4 className="text-xl font-serif text-primary mb-4">
                    {value.title}
                  </h4>
                  <p className="text-slate-500 font-light text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-sm p-12 border border-accent/10 flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Real-Time Global Visibility
              </h2>
              <p className="text-slate-600 mb-8 font-light italic">
                Access our proprietary portal to monitor temperature, humidity,
                and location for every shipment in transit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    Marseille → Singapore
                  </span>
                </div>
                <div className="bg-white p-6 border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    Port of Oakland → Tokyo
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <button className="w-full bg-primary text-white py-6 px-8 rounded-sm font-bold text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all shadow-xl">
                Client Portal Login
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
