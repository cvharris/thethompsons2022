import {faHeart} from '@fortawesome/pro-duotone-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-warmGray-800">
      <p className="text-center text-white text-base">
        <span>Made with </span>
        <FontAwesomeIcon icon={faHeart} className="text-red-600" size="sm" />
        <span>by her brother </span>
        <a
          className="text-sky-500"
          href="https://github.com/cvharris"
          target="_blank"
          rel="noreferrer"
        >
          Charlie
        </a>
      </p>
    </footer>
  )
}
