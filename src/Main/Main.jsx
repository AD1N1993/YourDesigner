import React from "react";
import s from "./Main.module.scss"
import photo from "../assets/img/me.jpg"
import {Button} from "../common/Button/Button";
import * as Scroll from 'react-scroll';
import {animated, useSpring} from 'react-spring'
import Typical from 'react-typical'
import Particles from 'react-particles-js';
export const Main = () => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 20}px,0)`
  const [props, set] = useSpring(() => ({xy: [0, 0], config: {mass: 20, tension: 550, friction: 80}}))


  return (
	<main className={s.main} id={"main"}>
	  <Particles className={s.tsparticles}
		params={{
		  "particles": {
			"number": {
			  "value": 170
			},
			"size": {
			  "value": 3
			}
		  },
		  "interactivity": {
			"events": {
			  "onhover": {
				"enable": true,
				"mode": "repulse"
			  }
			}
		  }
		}}   />
	  <div className={s.container}>
		<div className={s.mainWrapper}>
		  <div className={s.mainText}>
			<span className={s.mainTextSubtitle}>Hi There</span>
			<h1 className={s.mainTextTitle}>I'm <span>Kate Grivickaya</span></h1>
			<Typical className={s.mainTextDescribe}
					 steps={['A UX / UI Designer', 1000,
					   'Adobe Photoshop', 500,
					   'Adobe XD', 500,
					   'Figma', 500,
					   'MockUp', 500,
					   'Prototype', 500,
					   'Landing Page', 500,
					   'Typography', 1000,
					   'Corporate websites', 500,
					   'Animation', 1000,

					 ]}
					 loop={Infinity}
					 wrapper="p"
			/>
			<Button value={"Contact"} onClick={() => {
			  Scroll.animateScroll.scrollToBottom()
			}}/>
		  </div>

		  <div className={s.mainPicture}>
			<div className={s.mainPictureWrapper} onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
			  <animated.img className={s.mainPictureImg} src={photo} alt="YourDeveloper"
							style={{transform: props.xy.interpolate(trans1)}}/>
			  <animated.span className={s.mainPictureFrame} style={{transform: props.xy.interpolate(trans2)}}/>
			</div>
		  </div>
		</div>
	  </div>
	</main>

  );
}
