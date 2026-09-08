import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'User Interviews Conducted' },
  { value: '4', label: 'Product & Leadership Roles' },
  { value: '20+', label: 'Product Case Studies' }
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-[#EEF2FF] py-16 px-6 lg:px-8 border-y border-indigo-100">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-textMain/80 text-balance">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
