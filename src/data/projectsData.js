const projects = [
  {
    tech: [
      "Node.js",
      "Discord.js",
      "Faster-Whisper",
      "Voice Activity Detection (VAD)",
      "Piper TTS",
      "Three.js",
      "OBS",
      "WebSockets",
      "Vite",
      "Blender (attempted)",
      "Unix piping",
      "Linux CLI tools",
      "HTML/CSS/JS"
    ],
    slug: "glados-bot",
    title: "AI Realtime Chatbot: GLaDOS",
    description: "Real‑time AI chatbot driven by Discord, Whisper, and ThreeJS.",
    date: "2025-07-14",
    mediaSrc: "images/glados-demo.png",
    isVideo: false,
    article: [
    {
      type: "text",
      content: "This is a personal tech project where I tried to bring GLaDOS to life as a reactive, voice-controlled chatbot inside Discord. The AI can talk, listen, and animate in real time based on what’s happening in voice chats or even desktop audio like games and videos."
    },
    {
      type: "img",
      src: "images/glados_main_daemon_output.png",
      alt: "Terminal showing GLaDOS daemons working together"
    },
    
    
    {
      type: "text",
      content: "All the daemons are launched from a single Python script, and their output and errors are piped into one shared terminal. Makes it easy to monitor everything at once."
    },
          {
      type: "text",
      content: "The system is also capable of listening to desktop audio, like characters speaking in games or videos. This part was a little trickier than initially expected. I'm piping raw audio, chunking it into WAVs, and running a smaller Whisper model in addition to VAD for speech confidence scores. It mostly works, about 98% accurate in my tests, but fails on quiet speech or noisy gameplay. These systems really weren't designed for noisy environments like games. Still, not bad for hacked-together audio routing in my opinion."
    },    {
      type: "video",
      src: "videos/glados_playing_portal_2.mp4"
    },
    {
      type: "text",
      content: "Here's a short clip of using the Game Audio system to play a game together, where GLaDOS can react to her own in-game speech."
    },
      {
        type: "text",
        content: "Turn-taking is handled mostly through lockfiles. When transcripts update, the AI immediately generates a response, but won't speak unless no one else is talking. If someone starts talking, that reply gets tossed, and the AI tries again later. It’s a bit wasteful, but it makes her feel a lot more responsive, which was more important to me."
      },
      {
        type: "text",
        content: "The AI's voice is handled by a PiperTTS model I found somewhere online. I'd say where exactly I found it, but I honestly don't remember. Piper’s great because it’s super fast and easily tweakable. If I want the AI to sound like a completely different character, it’s just a single model swap away."
      },
      {
        type: "text",
        content: "Tool-calling is super basic right now. It’s just a function that plays funny sounds like vine boom or the loud metal pipe noise. It works. I'd showcase it but I think I'm saving your ears. Here's a screenshot instead. Hopefully you're no longer interested in hearing what this sounds like."
      },{
      type: "img",
      src: "images/glados_spamming.png",
      alt: "Terminal showing GLaDOS spamming audio"
    },
{
      type: "text",
      content: "Turns out setting the personality to be a passive-aggressive robot that does things for her own entertainment comes at the cost of my sanity. Fixing this is pretty simple, I just add a cooldown or something similar to the tool system, but honestly, I just disabled it. It got old fast. If I hear any more metal pipes or vine booms I'm probably going to need therapy."
    },
	
	{
      type: "video",
      src: "videos/glados_bluescreen.webm"
    },
    {
      type: "text",
      content: "This is a short WebM showing GLaDOS on a solid blue background for chroma keying. It's just a green screen, but blue. I used it for compositing in OBS when I wanted to overlay the AI on top of other visuals while keeping the model clean and isolated."
    },
      
      {
        type: "text",
        content: "There’s a Node.js WebSocket server that acts as a middleman between the bot and the 3D viewer. When the AI talks, the emissive eye glow pulses and the animation switches. That glow doesn’t exist in the original games, but it’s a nice visual cue."
      },
      {
        type: "text",
        content: "Transcripts are streamed as subtitles in an HTML overlay. I toss it in OBS and chroma-key the whole thing alongside the model for livestreams. Pretty simple but looks good."
      },
      {
        type: "text",
        content: "The system works, mostly. The turn-taking still feels robotic. Ideally, I’d want a small neural net trained on transcripts and timing data to decide when she should speak or interrupt. That’s hard though. Even humans suck at that sometimes."
      },
      {
        type: "text",
        content: "Most of the IPC is just writing and reading text files. It’s ugly, but on Linux, it’s fine. Probably a nightmare on Windows. I could use Unix sockets or build a real backend to manage everything, but that’s future me’s problem."
      },
      {
        type: "text",
        content: "Stuff I’d like to add: visual input (like analyzing screenshots), more tool-calling (like real web search or controlling apps), and maybe Twitch/YouTube chat integration so the AI can stream. Open to suggestions too."
      },
      {
        type: "text",
        content: "Anyway, the AI works. It’s rough around the edges, but I’m proud of how it turned out. It was a fun challenge gluing all these systems together, and it’s got a ton of potential from here."
      }
    ]
  }
];

export default projects;
