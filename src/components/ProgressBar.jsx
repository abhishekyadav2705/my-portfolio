import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: #007bff;
  width: ${(props) => props.scroll};
  z-index: 1000;
`;

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(scrollPosition / windowHeight) * 100}%`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <ProgressBarContainer scroll={scroll} />;
};

export default ProgressBar;
