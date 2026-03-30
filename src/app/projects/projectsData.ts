// Import images used in the original project files
import pincodekart1 from '../../assets/images/pincodekart1.webp';
import pincodekartvd1 from '../../assets/images/pincodekartvd1.webp';
import pincodeKonnect1 from '../../assets/images/pincodekonnect1.webp';
import pincodedakminihub1 from '../../assets/images/pincodekartMinihub1.webp';
import crstImage from '../../assets/images/crst2.png';
import crstDriverImage from '../../assets/images/crstDriver1.jpeg';
import cimemaImage from '../../assets/images/cinema2.png';
import uniLinksImage from '../../assets/images/unilink1.png';
import cStarImage from '../../assets/images/cstar1.png';

export interface ProjectInfo {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export const allProjects: ProjectInfo[] = [
  {
    imageSrc: pincodekart1,
    imageAlt: 'Pincodekart',
    title: 'Pincodekart - Mobile app',
    description: 'Built and maintained the Pincodekart e-commerce mobile application using React Native CLI and TypeScript. Implemented GraphQL APIs, Firebase push notifications, Razorpay payment integration, and native features like camera, maps, and location services to enable seamless product browsing, ordering, and real-time delivery tracking.',
    techStack: ['React Native', 'Firebase', 'Redux', 'Context API', 'Zustand', 'TypeScript', "Android Studio", "Xcode", "Razorpay"],
    link: 'https://play.google.com/store/apps/details?id=com.pincodekart.customerapp2025&pcampaignid=web_share',
  },
  {
    imageSrc: pincodekartvd1,
    imageAlt: 'Pincodekart VD',
    title: 'Pincodekart VD - Mobile app',
    description: 'Built the Pincodekart VD (Virtual Dukkandar) delivery partner application using React Native CLI and TypeScript. The platform enables delivery agents to manage assigned orders, perform open-box deliveries, scan QR codes for verification, handle exchange pickups, reschedule orders, and update real-time order statuses. Implemented wallet and withdrawal management for partners and referral features for connecting with other Dukkandars.',
    techStack: ['React Native', 'Firebase', 'Redux', 'Context API', 'Zustand', 'TypeScript', 'GraphQL', "Android Studio", "Xcode"],
    link: 'https://play.google.com/store/apps/details?id=com.pincodekart.virtualdukandaar&pcampaignid=web_share',
  },
  {
    imageSrc: pincodeKonnect1,
    imageAlt: 'PincodeKonnect',
    title: 'PincodeKonnect - Mobile app',
    description: 'Developed PincodeKonnect, a community platform for Pincodekart Virtual Dukkandars (VDs) built with React Native CLI and TypeScript. The application connects VDs across the network, enabling them to share posts, videos, and updates similar to a social media platform. Integrated WebSocket APIs and real-time messaging.',
    techStack: ['React Native', 'Firebase', 'WebSocket', 'Context API', 'Zustand', 'TypeScript', 'GraphQL', "Android Studio", "Xcode"],
    link: 'https://play.google.com/store/apps/details?id=com.pincodekonnect&pcampaignid=web_share',
  },
  {
    imageSrc: pincodedakminihub1,
    imageAlt: 'PincodeDak',
    title: 'PincodeDak Mini Hub - Mobile app',
    description: 'Developed the PincodeDak Mini Hub mobile application for logistics teams to manage parcel pickups from manufacturers and streamline dispatch operations. Integrated GraphQL APIs and WebSocket for live status updates.',
    techStack: ['React Native', 'Firebase', 'WebSocket', 'Context API', 'Zustand', 'TypeScript', 'GraphQL', "Android Studio", "Xcode"],
    link: 'https://play.google.com/store/apps/details?id=com.pincodedak.minihub&pcampaignid=web_share',
  },
  {
    imageSrc: crstDriverImage,
    imageAlt: 'CrstDriver',
    title: 'CrstDriver - Mobile app',
    description: 'Developed and maintained the CRSTDriver mobile application using React Native and Expo, streamlining delivery and pickup management for CRST truck drivers. The app enables drivers to submit pickup confirmations, handle exceptions, and track document progress efficiently.',
    techStack: ['React Native', 'Expo', 'Tailwind CSS', 'Redux', 'Context API', 'Javascript', 'TypeScript', "Android Studio", "Xcode"],
  },
  {
    imageSrc: crstImage,
    imageAlt: 'Crst',
    title: 'Crst - Mobile app',
    description: 'Developed the CRST Mobile App to streamline transportation and logistics operations, covering job installation, delivery coordination, and product distribution. Key features include onsite job management, adding additional SKUs, and capturing required pictures for documentation.',
    techStack: ['React Native', 'StyleSheet', 'React.js', 'Context API', 'Redux', 'Javascript', 'TypeScript', "Android Studio", "Xcode"],
  },
  {
    imageSrc: uniLinksImage,
    imageAlt: 'UniLink',
    title: 'UniLink - Mobile app',
    description: 'Developed a multi-platform authentication system using Firebase for both iOS and Android apps, supporting email/password login and third-party authentication. Integrated with push notifications and a chat system powered by AI tools.',
    techStack: ['Expo', 'React Native', 'Firebase', "Generative AI", 'Tailwind CSS', 'Redux', 'Javascript', 'TypeScript', "UI/UX"],
  },
  {
    imageSrc: cStarImage,
    imageAlt: 'C-Star Global',
    title: 'C-Star Global - Website',
    description: 'Developed the C-STAR Global website to facilitate knowledge sharing and provide a platform for professionals to connect. Implemented modern web development practices, ensuring a responsive and user-friendly experience.',
    techStack: ['Javascript', 'React.js', 'Tailwind CSS', 'Redux', 'Javascript', 'TypeScript', "UI/UX"],
  },
  {
    imageSrc: cimemaImage,
    imageAlt: 'Cinematic Database',
    title: 'Cinematic Database',
    description: 'An Interactive platform designed to provide users with a comprehensive and engaging movie discovery experience. Built using ReactJS, this application showcases a modern and visually appealing user interface.',
    techStack: ['HTML', 'Tailwind CSS', 'React.js', 'Redux', 'Javascript', 'TypeScript'],
  },
];
