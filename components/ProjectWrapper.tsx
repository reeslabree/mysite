import ProjectCard from "./ProjectCard";
import styles from "../styles/components/ProjectWrapper.module.css";

const ProjectWrapper = () => {
  const projects = [
    {
      title: `Fora`,
      short: `A social media network built on the Solana blockchain.`,
      scope: [`Rust`, `Anchor`, `Typescript`],
      url: `https://fora.co`,
      description: `Personal passion project in collaboration with my friend. We’ve been building Fora for the past 4 months since I started work on my capstone project and became increasingly interested in blockchain technology.\n
      We built an uncensorable social media network on the Solana and Arweave blockchains. Solana programs written in Rust using the Anchor Lang wrapper, Arweave contracts and API written in Typescript, frontend built with React.\n
      My contributions are across the entire stack, but mostly on the ‘backend’ of the application. Since Solana programming is relatively new, there isn’t much documentation or Stack Overflow reference, and as such this project has been a great exercise in independent research and discovery.\n
      This project was submitted to the Solana Riptide hackathon, and won the Arweave Open Web Foundry 6 hackathon.`,
    },
    {
      title: `PUPpy`,
      short: `A pay-per-use platform built on the Ethereum blockchain.`,
      scope: [`Rust`, `Solidity`, `Typescript`, `Truffle`],
      url: '/blog/puppy-post-mortem',
      description: `For my senior capstone project, we built a full-stack web application to implement pay-per-use functionality for Festo machines using the Ethereum blockchain. Backend written in Rust, Ethereum contracts written in Solidity, Hosted on AWS.\n
      We implemented Agile project management to expedite development process.\n
      I wrote and deployed contract to store machine usage data on the Ethereum blockchain.\n
      I worked with the DZ Bank development team to deploy a contract allowing users to pay in Euros for services rendered via bank transfers.\n
      I built and deployed AWS Lambda functions in Rust to store machine usage data, triggered by incoming MQTT packets.\n
      For more information, check out my post-mortem blog post.`,
    },
    {
      title: `Personal Site`,
      short: `An experiment in React + Next.`,
      scope: [`Typescript`, `React`, `Next.js`],
      url: `/`,
      description: `This is an ongoing project that I've been working on for way too long, however it has served as a nice foray into learning React.\n
      It started out with a basic React Javascript application, and after building some structure out was refactored as a React Typescript application and then hastily refactored into a Next.js app. I adopted typescript mostly because I enjoy the language, and Next.js came as a suggestion from a friend for easier page routing.\n
      I hope to push updates in the form of new blog posts and project summaries, however for now I can't say I have any larger scale plans for this site.`,
    },
    {
      title: `Guitar Hero Rebuild`,
      short: `The quintessential Covid project.`,
      scope: [`Arduino`],
      description: `Over the first few months of the Covid lockdowns, I discovered the game CloneHero, an open source build of Guitar Hero for PC. I enjoyed playing it on my computer using the keyboard, but naturally I felt like I needed to have a native guitar hero controller to really enjoy it.\n
      There was one main problem, however, that guitars built for the PC were expensive and rare to find. On the other hand, Goodwill was selling PS3 wireless guitars for only a couple bucks, and Amazon sold Arduino Leonardos at 3 for $10.\n
      One day I'll try to throw up my circuit diagram and code snippet (although the code for turning a button press into a game controller event isn't particularly complicated). For now, I'll leave this project summary be, and spend a some time mastering the Van Halen's Panama guitar solo on expert mode.`,
      images: [
        `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgs.ee-paper.com%2Fimgs%2Fo4YBAF5l3iWAXmD8AAB01vhS9Ec705.jpg&f=1&nofb=1`,
        `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flabinapp.com%2Fwp-content%2Fuploads%2F2019%2F09%2FCBS101203_CircuitDiagram.png&f=1&nofb=1`,
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {projects.map((proj, index) => (
        <ProjectCard key={index} index={index} post={proj}></ProjectCard>
      ))}
    </div>
  );
};
export default ProjectWrapper;
