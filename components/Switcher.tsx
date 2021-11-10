import {CSSProperties, FC} from 'react'

type SwitcherProps = {
  threshold?: string
}

const Switcher: FC<SwitcherProps> = ({threshold = '30rem', children}) => {
  const style = {'--threshold': threshold} as CSSProperties

  return (
    <div className="switcher" style={style}>
      {children}
    </div>
  )
}

export default Switcher
