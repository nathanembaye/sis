import Layout from '../components/layout'
import { motion } from 'framer-motion'

import { useRouter } from 'next/router'
export default function Home() {
  const { asPath } = useRouter()
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
          <img className="w-32 h-32 mb-8 rounded-full" src={asPath+"sis/sharon.jpeg"} alt="NOT FOUND" />
          <h1 className="mx-auto text-2xl font-semibold tracking-widest text-center sm:text-3xl">
            SHARON EMBAYE
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest text-center">POLICY ANALYST</h2>
          <br/>
          <p style={{ fontSize: "15px" }} className="mb-6 text-center text-gray-800 dark:text-white">Public policy professional energized by work at the intersection of technology and government. Previously at Twitter, I worked on pressing tech policy challenges + solutions to serve users interests. Prior to that, a Policy Analyst with the Government of Canada leading on Access to Information issues related to privacy and data governance.</p>
        </div>
      </motion.div>
    </Layout>
  )
}
