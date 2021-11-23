import {faHeart} from '@fortawesome/pro-duotone-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-warmGray-800 py-12">
      <div className="text-center text-white text-base">
        <span>Made with </span>
        <FontAwesomeIcon icon={faHeart} className="text-red-600 text-xl" />
        <span> by her brother </span>
        <a
          className="text-sky-500"
          href="https://github.com/cvharris"
          target="_blank"
          rel="noreferrer"
        >
          Charlie
        </a>
        <span> & sister-in-law </span>
        <a
          className="text-sky-500"
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
