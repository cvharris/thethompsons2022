import {faHeart} from '@fortawesome/pro-duotone-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-blueGray-100 py-12">
      <div className="text-center text-indigo-900 text-base px-6">
        <span>Made with </span>
        <FontAwesomeIcon icon={faHeart} className="text-rose-600 text-xl" />
        <span> by the bride&apos;s brother </span>
        <a
          className="text-indigo-400"
          href="https://github.com/cvharris"
          target="_blank"
          rel="noreferrer"
        >
          Charlie
        </a>
        <span> & sister-in-law </span>
        <a
          className="text-indigo-400"
          href="https://github.com/njosieb"
          target="_blank"
          rel="noreferrer"
        >
          Nina
        </a>
      </div>
    </footer>
  )
}
