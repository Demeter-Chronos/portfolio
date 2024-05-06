/* eslint-disable @next/next/no-img-element */
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="As a versatile software engineer with extensive full-stack development expertise, I bring together skills in both front-end and back-end technologies along with proficiency in cloud deployment and project management. Beyond technical abilities, I also have a keen eye for user experience (UX) and interface (UI) design, ensuring every solution delivers engaging functionality while meeting high aesthetic standards. This comprehensive approach allows me to drive successful projects from initial concept through final implementation, making me a valuable asset to any team."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/picture2.jpeg" layout='fill' alt="Oluwatimileyin photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my design and technical prowess, I pride myself on robust leadership, time management, and multitasking capabilities honed daily as a startup founder and dedicated family man. In my personal life, you can find me immersed in strategic board games or outdoors enjoying sports like basketball. As a passionate individual committed to innovation, I thrive in fast-paced environments where collaboration drives success. Rest assured, I will channel my energy and expertise into delivering exceptional results for any project I join."
						/>
						<BadgesBlock 
							title="Reasearch, Creativity and Engineering" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="When it comes to creation, one thing I truly cherish is designing the blueprint of a project. Whether we're talking about intricate design systems or cohesive brand strategies, I delight in refining all facets of user experience. At heart, I'm an inventor who loves tackling real-world challenges head-on. By thinking outside the box, I devise innovative solutions that enhance usability and transform ideas into tangible outcomes. Let's embark on a journey to build remarkable products that captivate audiences and exceed expectations!"
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Software Architecture', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Database Management', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Continuous Integration/ Continuous Deployment (CI/CD)', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Documentation', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Testing and Debugging', 		type: 'fad' },
]