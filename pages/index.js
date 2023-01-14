import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-32 h-32 mb-8 rounded-full" src="sis/sharon.jpeg" alt="Katherine" />
          <h1 className="mx-auto text-2xl font-semibold tracking-widest text-center sm:text-3xl">
            SHARON EMBAYE
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest text-center">POLICY ANALYST</h2>
          <br/>
          <p className="mb-6 text-center text-gray-800 dark:text-white">Public policy professional energized by work at the intersection of technology and government. Previously at Twitter, I worked on pressing tech policy challenges + solutions to advance our mission, and serve users interests. Before that, a Policy Analyst with the Government of Canada leading on Access to Information issues related to privacy, data governance and Indigenous peoples.</p>
        </div>
      </motion.div>
    </Layout>
  )
}
