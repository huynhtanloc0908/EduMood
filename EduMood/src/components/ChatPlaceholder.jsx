import { motion } from 'framer-motion'
import { FaComments, FaRobot, FaArrowDown } from 'react-icons/fa'

function ChatPlaceholder({ selectedEmotion }) {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl"
            >
              💬
            </motion.div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <FaComments className="inline-block mr-2 text-primary-500" />
              Khu vực Chat với AI
            </h2>
            <p className="text-gray-600 text-lg">
              Đây là nơi bạn có thể tâm sự với AI nghe và hiểu bạn
            </p>
          </div>

          {selectedEmotion ? (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-primary-100 to-purple-100 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center justify-center space-x-3">
                <FaRobot className="text-3xl text-primary-600" />
                <p className="text-lg font-semibold text-gray-800">
                  Sẵn sàng lắng nghe bạn chia sẻ về cảm xúc của bạn!
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="bg-gray-100 rounded-2xl p-6 mb-6 text-center">
              <p className="text-gray-500">
                👆 Hãy chọn cảm xúc của bạn ở trên để bắt đầu
              </p>
            </div>
          )}

          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaComments className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-3">
                Khu vực Chatbox
              </h3>
              <p className="text-gray-600 mb-4">
                Đây là nơi dành riêng cho thành viên nhóm khác phát triển chức năng chat với AI
              </p>
              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 inline-block">
                <p className="text-yellow-800 font-semibold">
                  📝 TODO: Tích hợp AI Chatbox tại đây
                </p>
              </div>
            </div>

            {/* Placeholder chat interface */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white" />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
                  <p className="text-gray-700">
                    Xin chào! Mình là AI trợ lý của EduMood. Mình ở đây để lắng nghe và hỗ trợ bạn. 
                    Bạn muốn chia sẻ gì với mình không?
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <span>💡 Gợi ý:</span>
                <span>"Hôm nay tôi cảm thấy..."</span>
                <span>"Tôi lo lắng về..."</span>
                <span>"Tôi cần ai đó lắng nghe..."</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-center mt-8"
        >
          <FaArrowDown className="text-4xl text-gray-400 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ChatPlaceholder
