import React, { useEffect } from "react";

const BackGroundAnimation = () => {
  useEffect(() => {
    const colors = ["#8349a9", "#c196de", "#65268F"];
    const numBalls = 10; // Number of balls to generate
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");

      // Assign random styles to each ball
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 55)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 90 + 10 )}vh`;
      ball.style.transform = `scale(${Math.random() + 90})`;
      ball.style.width = `${Math.random() * 13 + 1}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.body.append(ball);
    }

    balls.forEach((el) => {
      let to = {
        x: Math.random() * -10,
        y: Math.random() * -20,
      };

      el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 3000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });

    return () => {
      // Clean up the balls
      document.querySelectorAll(".ball").forEach((ball) => ball.remove());
    };
  }, []);

  return null; // This component only handles the background animation
};

export default BackGroundAnimation;
