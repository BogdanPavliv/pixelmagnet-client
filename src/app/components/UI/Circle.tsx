import React, {ReactNode} from 'react';
import { useState, useRef } from 'react';

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
    <div ref={circleRef} className={ hover ? "circle orange" : "circle" } onMouseOver={hoverHandleOn} onMouseLeave={hoverHandleOff}>
       <span>{children}</span> 
    </div>
  )
}

export default Circle;