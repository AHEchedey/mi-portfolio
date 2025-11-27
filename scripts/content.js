// Configuración de contenido bilingüe para el portfolio
// Español (ES) como idioma principal, Inglés (EN) como secundario

const portfolioContent = {
    es: {
        // Navegación
        nav: {
            contact: "Contacto",
            aboutMe: "Sobre mí"
        },

        // Menú
        menu: {
            label: "Menú",
            close: "Cerrar",
            intro: "Ingeniero Informático apasionado por la robótica, las energías renovables y el desarrollo de software. Explora mi trayectoria profesional, proyectos y conocimientos técnicos.",
            items: {
                inicio: "inicio",
                sobreMi: "sobre_mi",
                skills: "skills",
                proyectos: "proyectos",
                experiencia: "experiencia",
                educacion: "educación",
                cursos: "cursos",
                contactar: "contactar"
            }
        },

        // Hero
        hero: {
            greeting: "Hola, soy",
            name: "Echedey",
            titles: [
                "Ingeniero Informático.",
                "Desarrollador.",
                "Investigador."
            ],
            description: "Ingeniero Informático especializado en robótica, energías renovables y desarrollo de software. Apasionado por la tecnología, el espacio y la innovación."
        },

        // Sobre mí
        about: {
            title: "Sobre mí",
            subtitle: "Desde mi formación,",
            paragraphs: [
                "Soy Echedey Aguilar Hernández, Ingeniero Informático graduado de la Universidad de Sevilla con una sólida formación en desarrollo de software, robótica y sistemas energéticos.",
                "Actualmente trabajo como Técnico Especialista en la Universidad de Sevilla, en Proyectos de Generación de Conocimiento, específicamente en la Línea de Energía, trabajando con redes energéticas que integran baterías, grupos de hidrógeno (H2) y energías renovables.",
                "Mi pasión por la tecnología me ha llevado a participar en proyectos innovadores como FyCUS (CubeSat), robótica con Turtlebot, y competiciones como HACK FOR GOOD Seville."
            ],
            interests: "Intereses: Ciencia, Ingeniería Informática, Espacio, Aeronáutica, Música, Bodyboard, Surf"
        },

        // Skills
        skills: {
            title: "Conocimientos Técnicos",
            levels: {
                basic: "Básico",
                intermediate: "Intermedio",
                advanced: "Avanzado"
            },
            categories: {
                basic: ["HTML", "JavaScript", "MySQL", "MariaDB", "CSS", "NetLogo", "C#", "ROS", "LaTeX", "NVIDIA Jetson Nano"],
                intermediate: ["Python", "Java", "C++", "Verilog", "VHDL", "OpenOffice", "Linux", "Microsoft Windows", "MATLAB"],
                advanced: ["Arduino", "Raspberry Pi"]
            }
        },

        // Proyectos
        projects: {
            title: "Proyectos",
            items: [
                {
                    name: "FyCUS - CubeSat",
                    year: "2022",
                    description: "Proyecto internacional Fly your Cubesat con la Universidad de Sevilla. Departamento de Aviónica y TTC.",
                    tech: ["Sistemas Embebidos", "Comunicaciones", "Aeroespacial"]
                },
                {
                    name: "Robótica con Turtlebot",
                    year: "2023",
                    description: "Prácticas de estudiante en el Departamento ATC bajo la tutoría del Prof. Fernando Díaz del Río, trabajando en la línea de robótica con Turtlebot.",
                    tech: ["ROS", "Robótica", "Python"]
                },
                {
                    name: "HACK FOR GOOD Seville",
                    year: "2024",
                    description: "Participación en el IX HACK FOR GOOD Seville, desarrollando soluciones tecnológicas para causas sociales.",
                    tech: ["Desarrollo Web", "Trabajo en Equipo", "Innovación Social"]
                },
                {
                    name: "Fabricación Digital - FAB LAB",
                    year: "2024",
                    description: "Fabricación digital en el FAB LAB de la Escuela Técnica Superior de Arquitectura.",
                    tech: ["Impresión 3D", "Diseño Digital", "Prototipado"]
                },
                {
                    name: "OLIVINA Project",
                    year: "2016",
                    description: "Participación en el proyecto OLIVINA - Lego Education ROBOTIX, introducción a la robótica educativa.",
                    tech: ["Lego Robotics", "Programación Visual"]
                }
            ]
        },

        // Experiencia
        experience: {
            title: "Experiencia Laboral",
            items: [
                {
                    position: "Técnico Especialista",
                    company: "Universidad de Sevilla",
                    period: "2024 - 2026",
                    location: "Sevilla, España",
                    description: "Proyectos de Generación de Conocimiento. Línea de Energía. Redes energéticas con baterías, grupo H2 y renovables."
                }
            ]
        },

        // Educación
        education: {
            title: "Educación",
            items: [
                {
                    degree: "Grado en Ingeniería Informática",
                    institution: "Universidad de Sevilla",
                    period: "2019 - 2025",
                    location: "Sevilla, España"
                },
                {
                    degree: "Bachillerato Científico-Tecnológico",
                    institution: "IES Tinajo",
                    period: "2017 - 2019",
                    location: "Tinajo, España",
                    grade: "Nota media: 9.5"
                }
            ]
        },

        // Cursos y Conferencias
        courses: {
            title: "Cursos y Conferencias",
            items: [
                {
                    year: "2025",
                    name: "Ethical Hacking",
                    institution: "CISCO Networking Academy"
                },
                {
                    year: "2025",
                    name: "Networking Basics",
                    institution: "CISCO Networking Academy"
                },
                {
                    year: "2025",
                    name: "Introduction to Cybersecurity",
                    institution: "CISCO Networking Academy"
                },
                {
                    year: "2025",
                    name: "Generative AI",
                    institution: "MIT Professional Education"
                },
                {
                    year: "2025",
                    name: "Internet of Things",
                    institution: "MIT Professional Education"
                },
                {
                    year: "2024",
                    name: "ROSCon Spain 2024",
                    institution: "Universidad Pablo de Olavide, Sevilla",
                    type: "Conferencia"
                },
                {
                    year: "2022",
                    name: "XII RITSI State Congress",
                    institution: "España",
                    type: "Congreso"
                }
            ],
            competitions: [
                {
                    year: "2024",
                    name: "IX HACK FOR GOOD Seville"
                },
                {
                    year: "2016",
                    name: "I Concurso de vídeos Geogebra",
                    award: "Segundo Premio"
                },
                {
                    year: "2015-2019",
                    name: "Competición Europea 'Canguro Matemático'",
                    note: "Participación anual"
                }
            ]
        },

        // Contacto
        contact: {
            title: "Contacto",
            subtitle: "Hablemos",
            description: "Comparte tu visión conmigo. Juntos, exploremos cómo transformar tus ideas en oportunidades tangibles.",
            location: "Sevilla, España",
            role: "Ingeniero Informático",
            buttons: {
                linkedin: "LinkedIn",
                email: "Contacto"
            }
        },

        // Footer
        footer: {
            backToTop: "Volver arriba"
        }
    },

    en: {
        // Navigation
        nav: {
            contact: "Contact",
            aboutMe: "About me"
        },

        // Menu
        menu: {
            label: "Menu",
            close: "Close",
            intro: "Computer Engineer passionate about robotics, renewable energy and software development. Explore my professional career, projects and technical knowledge.",
            items: {
                inicio: "home",
                sobreMi: "about_me",
                skills: "skills",
                proyectos: "projects",
                experiencia: "experience",
                educacion: "education",
                cursos: "courses",
                contactar: "contact"
            }
        },

        // Hero
        hero: {
            greeting: "Hi, I'm",
            name: "Echedey",
            titles: [
                "Computer Engineer.",
                "Developer.",
                "Researcher."
            ],
            description: "Computer Engineer specialized in robotics, renewable energy and software development. Passionate about technology, space and innovation."
        },

        // About
        about: {
            title: "About me",
            subtitle: "Since my training,",
            paragraphs: [
                "I am Echedey Aguilar Hernández, Computer Engineer graduated from the University of Seville with solid training in software development, robotics and energy systems.",
                "I currently work as a Specialist Technician at the University of Seville, in Knowledge Generation Projects, specifically in the Energy Line, working with energy networks that integrate batteries, hydrogen (H2) groups and renewable energies.",
                "My passion for technology has led me to participate in innovative projects such as FyCUS (CubeSat), robotics with Turtlebot, and competitions such as HACK FOR GOOD Seville."
            ],
            interests: "Interests: Science, Computer Engineering, Space, Aeronautics, Music, Bodyboarding, Surfing"
        },

        // Skills
        skills: {
            title: "Technical Skills",
            levels: {
                basic: "Basic",
                intermediate: "Intermediate",
                advanced: "Advanced"
            },
            categories: {
                basic: ["HTML", "JavaScript", "MySQL", "MariaDB", "CSS", "NetLogo", "C#", "ROS", "LaTeX", "NVIDIA Jetson Nano"],
                intermediate: ["Python", "Java", "C++", "Verilog", "VHDL", "OpenOffice", "Linux", "Microsoft Windows", "MATLAB"],
                advanced: ["Arduino", "Raspberry Pi"]
            }
        },

        // Projects
        projects: {
            title: "Projects",
            items: [
                {
                    name: "FyCUS - CubeSat",
                    year: "2022",
                    description: "International project Fly your Cubesat with the University of Seville. Avionics and TTC Department.",
                    tech: ["Embedded Systems", "Communications", "Aerospace"]
                },
                {
                    name: "Robotics with Turtlebot",
                    year: "2023",
                    description: "Student internship at the ATC Department under the tutelage of Prof. Fernando Díaz del Río, working on the robotics line with Turtlebot.",
                    tech: ["ROS", "Robotics", "Python"]
                },
                {
                    name: "HACK FOR GOOD Seville",
                    year: "2024",
                    description: "Participation in the IX HACK FOR GOOD Seville, developing technological solutions for social causes.",
                    tech: ["Web Development", "Teamwork", "Social Innovation"]
                },
                {
                    name: "Digital Fabrication - FAB LAB",
                    year: "2024",
                    description: "Digital fabrication at the FAB LAB of the School of Architecture.",
                    tech: ["3D Printing", "Digital Design", "Prototyping"]
                },
                {
                    name: "OLIVINA Project",
                    year: "2016",
                    description: "Participation in the OLIVINA project - Lego Education ROBOTIX, introduction to educational robotics.",
                    tech: ["Lego Robotics", "Visual Programming"]
                }
            ]
        },

        // Experience
        experience: {
            title: "Work Experience",
            items: [
                {
                    position: "Specialist Technician",
                    company: "University of Seville",
                    period: "2024 - 2026",
                    location: "Seville, Spain",
                    description: "Knowledge Generation Projects. Energy Line. Energy networks with batteries, H2 group and renewables."
                }
            ]
        },

        // Education
        education: {
            title: "Education",
            items: [
                {
                    degree: "Degree in Computer Engineering",
                    institution: "University of Seville",
                    period: "2019 - 2025",
                    location: "Seville, Spain"
                },
                {
                    degree: "Scientific-Technological Bachelor's Degree",
                    institution: "IES Tinajo",
                    period: "2017 - 2019",
                    location: "Tinajo, Spain",
                    grade: "Overall grade: 9.5"
                }
            ]
        },

        // Courses and Conferences
        courses: {
            title: "Courses and Conferences",
            items: [
                {
                    year: "2025",
                    name: "Ethical Hacking",
                    institution: "CISCO Networking Academy"
                },
                {
                    year: "2025",
                    name: "Networking Basics",
                    institution: "CISCO Networking Academy"
                },
                {
                    year: "2025",
                    name: "Introduction to Cybersecurity",
                    institution: "CISCO Networking Academy"
                },
                {
                    year: "2025",
                    name: "Generative AI",
                    institution: "MIT Professional Education"
                },
                {
                    year: "2025",
                    name: "Internet of Things",
                    institution: "MIT Professional Education"
                },
                {
                    year: "2024",
                    name: "ROSCon Spain 2024",
                    institution: "Pablo de Olavide University, Seville",
                    type: "Conference"
                },
                {
                    year: "2022",
                    name: "XII RITSI State Congress",
                    institution: "Spain",
                    type: "Congress"
                }
            ],
            competitions: [
                {
                    year: "2024",
                    name: "IX HACK FOR GOOD Seville"
                },
                {
                    year: "2016",
                    name: "I Geogebra Video Contest",
                    award: "Second Prize"
                },
                {
                    year: "2015-2019",
                    name: "European Competition 'Canguro Matemático'",
                    note: "Annual participation"
                }
            ]
        },

        // Contact
        contact: {
            title: "Contact",
            subtitle: "Let's talk",
            description: "Share your vision with me. Together, let's explore how to transform your ideas into tangible opportunities.",
            location: "Seville, Spain",
            role: "Computer Engineer",
            buttons: {
                linkedin: "LinkedIn",
                email: "Contact"
            }
        },

        // Footer
        footer: {
            backToTop: "Back to top"
        }
    }
};

// Idioma actual (por defecto español)
let currentLang = localStorage.getItem('portfolioLang') || 'es';

// Función para cambiar idioma
function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') {
        console.error('Idioma no soportado:', lang);
        return;
    }

    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    updateContent();
}

// Función para obtener contenido en el idioma actual
function getContent(path) {
    const keys = path.split('.');
    let content = portfolioContent[currentLang];

    for (const key of keys) {
        if (content && content[key] !== undefined) {
            content = content[key];
        } else {
            console.warn(`Contenido no encontrado: ${path}`);
            return null;
        }
    }

    return content;
}

// Función para actualizar el contenido de la página
function updateContent() {
    // Actualizar atributo lang del HTML
    document.documentElement.lang = currentLang;

    // Actualizar selector de idioma
    const langButtons = document.querySelectorAll('.c-menu_lang a, .c-menu_lang span');
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('lang') || btn.getAttribute('data-lang');
        if (btnLang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Aquí se pueden agregar más actualizaciones dinámicas según sea necesario
    console.log('Idioma actualizado a:', currentLang);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateContent);
} else {
    updateContent();
}

// Exportar para uso global
window.portfolioContent = portfolioContent;
window.setLanguage = setLanguage;
window.getContent = getContent;
window.currentLang = currentLang;
