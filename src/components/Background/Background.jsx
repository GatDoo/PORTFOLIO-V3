import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: false,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            }}
        />
    );
};

export default Background;
