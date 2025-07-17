const projects = [
  {
    slug: "test",
    title: "Three.js GLaDOS Bot",
    description: "Real‑time avatar driven by Discord voice.",
    date: "2025-07-14",
    mediaSrc: "/images/glados-demo.png",
    isVideo: false,
    article: [
      { type: "text", content: "This bot links Discord voice to a Three.js avatar in real time." },
      { type: "video", src: `videos/glados-demo.mp4` },
      { type: "text", content: "Audio is analysed with VAD, then TTS drives lip‑sync and expressions." },
    ],
  },
  {
    title: "Neural‑net Shader Demo",
    description: "WebGPU compute preview.",
    date: "2025-07-10",
    mediaSrc: `images/Pasted.png`,
    isVideo: false,
    article: [
      { type: "text", content: "Early prototype of a ternary‑weight neural net on the GPU." },
      { type: "img", src: `images/Pasted.png`, alt: "Shader preview" },
    ],
  },
  {
    title: "1M Cube Renderer",
    description:
      "A WebGPU experiment rendering one million cubes with fixed‑camera perspective and flat lighting.",
    date: "2025-06-30",
    mediaSrc: `images/Pasted.png`,
    isVideo: false,
    article: [
      { type: "text", content: "Benchmarked at 240 fps on a 4070 Ti." },
    ],
  },
  {
    title: "Terminal‑based MMO Prototype",
    description:
      "ASCII world powered by SpaceTimeDB; demonstrates partial‑table streaming for low‑latency SSH play.",
    date: "2025-06-18",
    mediaSrc: `videos/glados-demo.mp4`,
    isVideo: true,
    article: [{ type: "text", content: "Massive persistent world, no sharding." }],
  },
  {
    title: "Zig WebAssembly Logic Sim",
    description:
      "Proof‑of‑concept neural logic simulator using Zig → WASM + WGSL compute shaders.",
    date: "2025-06-05",
    mediaSrc: `images/Pasted.png`,
    isVideo: false,
    article: [{ type: "text", content: "Part of my emergent intelligence research track." }],
  },
  {
    title: "OBD‑II UART Device",
    description: "Battery‑powered diagnostic reader with custom C terminal dashboard.",
    date: "2024-08-01",
    mediaSrc: `images/Pasted.png`,
    isVideo: false,
    article: [
      { type: "text", content: "Hand‑soldered prototype interfacing with vehicle ECUs." },
    ],
  },
  {
    title: "Rust Tic‑Tac‑Toe Engine",
    description: "Raw‑input TUI with ANSI cursor moves and bitwise game state.",
    date: "2024-07-20",
    mediaSrc: "/videos/glados-demo.mp4",
    isVideo: true,
    article: [{ type: "text", content: "Focus on clean state management and unit tests." }],
  },
  {
    title: "3D Portfolio Space Scene",
    description:
      "Interactive Three.js scene featuring a spaceman, Earth, Moon, and scroll‑based zoom.",
    date: "2024-05-12",
    mediaSrc: `images/Pasted.png`,
    isVideo: false,
    article: [{ type: "text", content: "My first deep dive into Three.js animations." }],
  },
];


export default projects;
