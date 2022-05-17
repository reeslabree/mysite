import { useState } from "react";
import {
  SiRust,
  SiArduino,
  SiTypescript,
  SiSolidity,
  SiReact,
  SiNextdotjs,
  SiEthereum
} from "react-icons/si";
import { CSSTransition } from "react-transition-group";
import { TiAnchor } from "react-icons/ti";

type TechIconProps = {
  iconId: string;
};

const TechIcon: React.FC<TechIconProps> = ({ iconId }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {TechIcons.find((icon) => icon.id === iconId)?.component}
        {hovering && " " + iconId}
    </div>
  );
};
export default TechIcon;

const TechIcons = [
  {
    id: "Rust",
    component: <SiRust style={{paddingTop: "3px"}} />,
  },
  {
    id: "Arduino",
    component: <SiArduino style={{paddingTop: "3px"}} />,
  },
  {
    id: "Typescript",
    component: <SiTypescript style={{paddingTop: "3px"}} />,
  },
  {
    id: "Solidity",
    component: <SiSolidity style={{paddingTop: "3px"}} />,
  },
  {
    id: "React",
    component: <SiReact style={{paddingTop: "3px"}} />,
  },
  {
    id: "Next.js",
    component: <SiNextdotjs style={{paddingTop: "3px"}} />,
  },
  {
    id: "Anchor",
    component: <TiAnchor style={{paddingTop: "3px"}} />,
  },
  {
    id: "Truffle",
    component: <SiEthereum style={{paddingTop: "3px"}} />,
  },
];
