const puestosDeTrabajo = [
  {
    nombre: "Desarrollador Frontend React",
    salario: 75000,
    nivel: "SSR",
    fechaDeCreacion: "2025-09-15",
    modalidad: "Híbrido",
    ubicacion: "Buenos Aires, Argentina",
    habilidades: [
      { nombre: "React", aniosDeExperiencia: 3, excluyente: true },
      {
        nombre: "TypeScript",
        aniosDeExperiencia: 2,
        excluyente: false,
      },
      { nombre: "REST APIs", aniosDeExperiencia: 4, excluyente: true },
    ],
  },
  {
    nombre: "Ingeniero de Backend Python",
    salario: 95000,
    nivel: "SR",
    fechaDeCreacion: "2025-08-05",
    modalidad: "Remoto",
    ubicacion: "Ciudad de México, México",
    habilidades: [
      { nombre: "Django", aniosDeExperiencia: 4, excluyente: true },
      { nombre: "Python", aniosDeExperiencia: 5, excluyente: true },
      {
        nombre: "PostgreSQL",
        aniosDeExperiencia: 3,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Desarrollador Full Stack Jr.",
    salario: 50000,
    nivel: "JR",
    fechaDeCreacion: "2025-09-28",
    modalidad: "Presencial",
    ubicacion: "Santiago, Chile",
    habilidades: [
      { nombre: "Node.js", aniosDeExperiencia: 1, excluyente: true },
      { nombre: "Git", aniosDeExperiencia: 1, excluyente: true },
      { nombre: "Angular", aniosDeExperiencia: 2, excluyente: true },
    ],
  },
  {
    nombre: "Especialista en Bases de Datos SQL",
    salario: 80000,
    nivel: "SSR",
    fechaDeCreacion: "2025-08-20",
    modalidad: "Híbrido",
    ubicacion: "Bogotá, Colombia",
    habilidades: [
      { nombre: "MySQL", aniosDeExperiencia: 3, excluyente: true },
      {
        nombre: "SQL Server",
        aniosDeExperiencia: 4,
        excluyente: false,
      },
      {
        nombre: "Optimización de Consultas",
        aniosDeExperiencia: 3,
        excluyente: true,
      },
    ],
  },
  {
    nombre: "Ingeniero de DevOps Senior",
    salario: 120000,
    nivel: "SR",
    fechaDeCreacion: "2025-09-01",
    modalidad: "Remoto",
    ubicacion: "Madrid, España",
    habilidades: [
      {
        nombre: "Kubernetes",
        aniosDeExperiencia: 5,
        excluyente: true,
      },
      { nombre: "AWS", aniosDeExperiencia: 4, excluyente: true },
      { nombre: "Terraform", aniosDeExperiencia: 41, excluyente: true },
    ],
  },
  {
    nombre: "Desarrollador Móvil Android",
    salario: 85000,
    nivel: "SSR",
    fechaDeCreacion: "2025-08-10",
    modalidad: "Híbrido",
    ubicacion: "Montevideo, Uruguay",
    habilidades: [
      { nombre: "Kotlin", aniosDeExperiencia: 3, excluyente: true },
      {
        nombre: "Android SDK",
        aniosDeExperiencia: 4,
        excluyente: true,
      },
      {
        nombre: "Jetpack Compose",
        aniosDeExperiencia: 1,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Analista Programador C#",
    salario: 70000,
    nivel: "SSR",
    fechaDeCreacion: "2025-09-05",
    modalidad: "Presencial",
    ubicacion: "Lima, Perú",
    habilidades: [
      {
        nombre: ".NET Core",
        aniosDeExperiencia: 3,
        excluyente: true,
      },
      { nombre: "C#", aniosDeExperiencia: 4, excluyente: true },
      {
        nombre: "Entity Framework",
        aniosDeExperiencia: 2,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Ingeniero de Machine Learning",
    salario: 110000,
    nivel: "SR",
    fechaDeCreacion: "2025-08-15",
    modalidad: "Remoto",
    ubicacion: "Barcelona, España",
    habilidades: [
      { nombre: "Python", aniosDeExperiencia: 4, excluyente: true },
      {
        nombre: "TensorFlow/PyTorch",
        aniosDeExperiencia: 3,
        excluyente: true,
      },
      {
        nombre: "Scikit-learn",
        aniosDeExperiencia: 3,
        excluyente: true,
      },
    ],
  },
  {
    nombre: "Desarrollador Java Junior",
    salario: 4,
    nivel: "JR",
    fechaDeCreacion: "2025-09-10",
    modalidad: "Presencial",
    ubicacion: "Córdoba, Argentina",
    habilidades: [
      { nombre: "Java", aniosDeExperiencia: 15, excluyente: true },
      {
        nombre: "Spring Boot",
        aniosDeExperiencia: 21,
        excluyente: true,
      },
      {
        nombre: "Maven/Gradle",
        aniosDeExperiencia: 44,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Arquitecto de Software",
    salario: 140000,
    nivel: "SR",
    fechaDeCreacion: "2025-08-25",
    modalidad: "Remoto",
    ubicacion: "São Paulo, Brasil",
    habilidades: [
      {
        nombre: "Microservicios",
        aniosDeExperiencia: 7,
        excluyente: true,
      },
      {
        nombre: "Cloud (Azure/GCP)",
        aniosDeExperiencia: 5,
        excluyente: true,
      },
      {
        nombre: "Patrones de Diseño",
        aniosDeExperiencia: 8,
        excluyente: true,
      },
    ],
  },
  {
    nombre: "Desarrollador Frontend Vue.js",
    salario: 68000,
    nivel: "SSR",
    fechaDeCreacion: "2025-09-20",
    modalidad: "Híbrido",
    ubicacion: "Medellín, Colombia",
    habilidades: [
      { nombre: "Vue.js", aniosDeExperiencia: 2, excluyente: true },
      {
        nombre: "JavaScript ES6+",
        aniosDeExperiencia: 3,
        excluyente: true,
      },
      {
        nombre: "SASS/LESS",
        aniosDeExperiencia: 2,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Programador de Videojuegos (Unity)",
    salario: 90000,
    nivel: "SR",
    fechaDeCreacion: "2025-08-29",
    modalidad: "Remoto",
    ubicacion: "Guadalajara, México",
    habilidades: [
      { nombre: "C#", aniosDeExperiencia: 4, excluyente: true },
      {
        nombre: "Unity Engine",
        aniosDeExperiencia: 4,
        excluyente: true,
      },
      {
        nombre: "Gráficos 3D",
        aniosDeExperiencia: 3,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Técnico de Soporte L3/Programador",
    salario: 60000,
    nivel: "JR",
    fechaDeCreacion: "2025-08-01",
    modalidad: "Presencial",
    ubicacion: "San José, Costa Rica",
    habilidades: [
      {
        nombre: "Bash/Scripts",
        aniosDeExperiencia: 1,
        excluyente: true,
      },
      { nombre: "Linux", aniosDeExperiencia: 2, excluyente: true },
      {
        nombre: "Networking Básico",
        aniosDeExperiencia: 1,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Desarrollador Elixir/Erlang",
    salario: 100000,
    nivel: "SR",
    fechaDeCreacion: "2025-09-25",
    modalidad: "Remoto",
    ubicacion: "Quito, Ecuador",
    habilidades: [
      { nombre: "Elixir", aniosDeExperiencia: 2, excluyente: true },
      {
        nombre: "Phoenix Framework",
        aniosDeExperiencia: 2,
        excluyente: true,
      },
      {
        nombre: "Bases de Datos NoSQL",
        aniosDeExperiencia: 3,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Programador PHP (Laravel)",
    salario: 65000,
    nivel: "SSR",
    fechaDeCreacion: "2025-08-08",
    modalidad: "Híbrido",
    ubicacion: "Rosario, Argentina",
    habilidades: [
      { nombre: "Laravel", aniosDeExperiencia: 3, excluyente: true },
      { nombre: "PHP", aniosDeExperiencia: 3, excluyente: true },
      {
        nombre: "API RESTful",
        aniosDeExperiencia: 2,
        excluyente: true,
      },
    ],
  },
  {
    nombre: "Desarrollador de Big Data",
    salario: 105000,
    nivel: "SR",
    fechaDeCreacion: "2025-09-03",
    modalidad: "Remoto",
    ubicacion: "Valencia, España",
    habilidades: [
      {
        nombre: "Scala/Python",
        aniosDeExperiencia: 9,
        excluyente: true,
      },
    ],
  },
  {
    nombre: "Desarrollador iOS (Swift)",
    salario: 92000,
    nivel: "SSR",
    fechaDeCreacion: "2025-08-18",
    modalidad: "Híbrido",
    ubicacion: "Santiago, Chile",
    habilidades: [
      { nombre: "Swift", aniosDeExperiencia: 3, excluyente: true },
      { nombre: "Xcode", aniosDeExperiencia: 4, excluyente: true },
    ],
  },
  {
    nombre: "Programador de Testing Automatizado",
    salario: 72000,
    nivel: "SSR",
    fechaDeCreacion: "2025-09-12",
    modalidad: "Híbrido",
    ubicacion: "Buenos Aires, Argentina",
    habilidades: [
      { nombre: "Selenium", aniosDeExperiencia: 3, excluyente: true },
      {
        nombre: "Java/Python",
        aniosDeExperiencia: 4,
        excluyente: true,
      },
      {
        nombre: "JIRA/Confluence",
        aniosDeExperiencia: 2,
        excluyente: false,
      },
    ],
  },
  {
    nombre: "Desarrollador Cloud Junior",
    salario: 58000,
    nivel: "JR",
    fechaDeCreacion: "2025-08-22",
    modalidad: "Presencial",
    ubicacion: "Montevideo, Uruguay",
    habilidades: [
      {
        nombre: "AWS Básico",
        aniosDeExperiencia: 1,
        excluyente: true,
      },
      { nombre: "Linux", aniosDeExperiencia: 2, excluyente: false },
      {
        nombre: "Docker Básico",
        aniosDeExperiencia: 1,
        excluyente: true,
      },
    ],
  },
  {
    nombre: "Científico de Datos",
    salario: 115000,
    nivel: "SR",
    fechaDeCreacion: "2025-09-30",
    modalidad: "Remoto",
    ubicacion: "Ciudad de México, México",
    habilidades: [
      {
        nombre: "Visualización de Datos",
        aniosDeExperiencia: 4,
        excluyente: true,
      },
      { nombre: "Python", aniosDeExperiencia: 5, excluyente: true },
      {
        nombre: "Estadística",
        aniosDeExperiencia: 5,
        excluyente: true,
      },
    ],
  },
];

const otraVariableQueNoSeExporta = ":/";

module.exports = puestosDeTrabajo;
