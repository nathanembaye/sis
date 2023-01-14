import { AnimatePresence, motion } from 'framer-motion'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useRouter } from 'next/router'

const DarkModeToggle = dynamic(() => import('dark-mode-toggle-animation'), { ssr: false })

export default function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }, [])

  const { asPath } = useRouter()

  useEffect(() => {
    if (theme == 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const toggleDarkMode = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
      <Head>
        <title>Sharon Embaye</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script defer data-domain="katherineoelsner.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <div
        style={{ minWidth: '24rem', maxWidth: '37rem' }}
        className="flex flex-col items-center justify-center w-2/3"
      >
        <div className="fixed cursor-pointer top-3 right-3">
          <DarkModeToggle
            mode={theme == 'dark' ? 'sun' : 'moon'}
            onClick={toggleDarkMode}
            width="3rem"
            moonColor="#334155"
            sunColor="white"
            animationDuration={1}
          />
        </div>
        <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6">
        </motion.div>
        <motion.div
          layoutId="border-div"
          className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300 dark:border-white"
        >
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </motion.div>
        <motion.div layoutId="social-icons" className="flex items-center justify-center">
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href={asPath+"sis/Resume.pdf"}
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl " icon={faFile} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://twitter.com/sharon_emb"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://www.linkedin.com/in/sharon-embaye/"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
