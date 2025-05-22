import React, {ReactNode} from 'react';
import { useState, useRef } from 'react';
import styles from '../../styles/magnetize/index.module.scss';
import { CircleProps } from "../../types/others";

const Circle: React.FC<CircleProps> = ({children}) => {
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