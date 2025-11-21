import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const options = useMemo(() => ({
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ["repulse"],
                },
                onHover: {
                    enable: true,
                    mode: ["bubble"],
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 250,
                    duration: 0.3,
                },
                bubble: {
                    distance: 50,
                    duration: 2,
                    opacity: 0.4,
                    size: 20,
                    color: "#a200ffff"
                },
                attract: {
                    distance: 100,
                    duration: 0.1,
                }
            },
        },
        particles: {
            color: {
                value: "#ea00ffff",
            },
            links: {
                color: "#ffffffff",
                distance: 50,
                enable: true,
                opacity: 0.3,
                width: 2,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 100,
            },
            opacity: {
                value: 0.95,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 10 },
            },
        },
        detectRetina: true,
    }), []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        />
    );
};

export default ParticlesComponent;