import React, {ReactNode} from 'react';
import { useState, useRef } from 'react';
import styles from '../../styles/magnetize/index.module.scss';

type Props = {
    children: ReactNode;
}

const Circle: React.FC<Props> = ({children}) => {
    const [hover, setHover] = useState(false);

    const circleRef = useRef<HTMLDivElement | null>(null);

    function hoverHandleOn() {
        setHover(true) 
    }

    function hoverHandleOff() {
        setHover(false) 
    }

  return (
    <div ref={circleRef} className={ hover ? `${styles.circle} ${styles.orange}` : `${styles.circle}` } onMouseOver={hoverHandleOn} onMouseLeave={hoverHandleOff}>
       <span>{children}</span> 
    </div>
  )
}

export default Circle;