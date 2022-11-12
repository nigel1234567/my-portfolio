import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
        key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.5
          }}
          variants ={{
            initialState: {
              x: -2000
            },
            animateState: {
              x: 0
            },
            exitState: {
              x: 2000
            },
          }}
          className="base-page-size"
        >
            <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  </Layout>
  )
}

export default MyApp
