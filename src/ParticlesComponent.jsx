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
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "attract",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.3,
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
                color: "#ea00ffff",
                distance: 50,
                enable: true,
                opacity: 1,
                width: 3,
            },
            move: {
                direction: "random",
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
                    area: 500,
                },
                value: 200,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "none",
            },
            size: {
                value: { min: 1, max: 2 },
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