import { FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-effect sticky top-0 z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaGraduationCap className="text-4xl text-primary-500" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-primary-700">
                EduMood
              </h1>
              <p className="text-xs text-gray-600">
                Thầy cô ảo của cảm xúc
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Đăng nhập
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
