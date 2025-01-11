const sampleHackathon = [
  {
      title: "KU Hackathon 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL4at2kUxpmM2x5cO13NZqnxQxrXcxkVuZA&s",
      entryPrice: 0,
      location: "Kalinga University, India",
      url: "https://www.eventbrite.com/e/ku-hackathon-2025-tickets-1075486682619",
      registration: "https://www.eventbrite.com/register-kuhackathon2025",
      description: "A national-level 24-hour hackathon starting at 11:00 AM on February 13, 2025, focused on innovation and collaboration."
  },
  {
      title: "Kharagpur Data Science Hackathon 2025",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hackathon-flyer-design-template-4fc2cfe7a4d4b3913e5192047a0bb29d_screen.jpg?ts=1709877074",
      entryPrice: 1500,
      location: "IIT Kharagpur, India",
      url: "https://unstop.com/hackathons/kharagpur-data-science-hackathon-2025",
      registration: "https://unstop.com/register-kdsh2025",
      description: "The 5th edition organized by the Kharagpur Data Analytics Group, tackling real-world data science challenges."
  },
  {
      title: "Tem-(E)-Thon",
      image: "https://img.freepik.com/free-vector/meet-teacher-flyer-template_742173-15938.jpg",
      entryPrice: 500,
      location: "Chennai, Tamil Nadu",
      url: "https://www.hackerearth.com/challenges/hackathon/tem-e-thon/rules/",
      registration: "https://www.hackerearth.com/register-temethon2025",
      description: "A hackathon from January 7 to January 8, 2025, in Chennai, fostering innovation and creativity."
  },
  {
      title: "Brandeis India Innovation Launchpad 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK81h5VC-UyISvffJDA2N2q_D-yT_9ylQEQ&s",
      entryPrice: 1000,
      location: "Mumbai, India",
      url: "https://www.brandeis.edu/global/about/centers/india/hackathon.html",
      registration: "https://www.brandeis.edu/register-innovation2025",
      description: "An event aimed at solving social challenges aligned with the UN SDGs, bringing together graduate students."
  },
  {
      title: "IMAGINE HACKATHON",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214",
      entryPrice: 0,
      location: "Online and Offline",
      url: "https://imagine-hackathon.devpost.com",
      registration: "https://imagine-hackathon.devpost.com/register",
      description: "India's first design and code hackathon to build interactive solutions across devices in 2025."
  },
  {
      title: "Code Battle 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElBZf7OMr-fjrnF0vxqPwSVjsPxNYAYpzlA&s",
      entryPrice: 300,
      location: "Bangalore, India",
      url: "https://example.com/code-battle",
      registration: "https://example.com/register-codebattle2025",
      description: "A competitive programming hackathon with exciting prizes for winners."
  },
  {
      title: "AI & Robotics Hackathon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzsybzt4gBYsyYci2zEmT-sh5oRLmmJxxwA&s",
      entryPrice: 700,
      location: "Hyderabad, India",
      url: "https://example.com/ai-robotics-hackathon",
      registration: "https://example.com/register-airobotics2025",
      description: "Build the future with cutting-edge projects in AI and robotics."
  },
  {
      title: "Smart City Innovators Hackathon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIUPTFuDtDhPi6M7D9YDNY_nTe1q8Wpe4Tw&s",
      entryPrice: 0,
      location: "Delhi, India",
      url: "https://example.com/smart-city-innovators",
      registration: "https://example.com/register-smartcity2025",
      description: "Join a government-backed initiative to develop solutions for smart cities."
  },
  {
      title: "Blockchain India Hackathon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7l0Yc505TclL7esiPrQMDFO8P6jU-gG6uQ&s",
      entryPrice: 1000,
      location: "Pune, India",
      url: "https://example.com/blockchain-hackathon",
      registration: "https://example.com/register-blockchain2025",
      description: "Dive into blockchain technology with this hands-on event for enthusiasts."
  },
  {
      title: "AgriTech Hackathon 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBBtFtNNDd2_ZbU515jaFAcfIMeAykRX1JQ&s",
      entryPrice: 0,
      location: "Jaipur, India",
      url: "https://example.com/agritech-hackathon",
      registration: "https://example.com/register-agritech2025",
      description: "Innovate and design tech solutions for the agriculture sector."
  },
  {
      title: "Energy Future Hackathon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65lqJ31_3rE-ePo29AjtZT7__kbLpIrnp4Q&s",
      entryPrice: 200,
      location: "Mumbai, India",
      url: "https://example.com/energy-future-hackathon",
      registration: "https://example.com/register-energyfuture2025",
      description: "Create new ideas to shape the future of sustainable energy."
  },
  {
      title: "VR/AR Immersion Hackathon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIF2Parl4A6Ah4iXLSndXBoNMB2EsuI1qLgA&s",
      entryPrice: 500,
      location: "Chennai, India",
      url: "https://example.com/vr-ar-hackathon",
      registration: "https://example.com/register-vrar2025",
      description: "Develop immersive VR/AR experiences and showcase your skills."
  },
  {
      title: "Game Dev Clash",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumoHn6sv1PGktwoOSVR-GokYZzTeYCvAxuA&s",
      entryPrice: 100,
      location: "Pune, India",
      url: "https://example.com/game-dev-clash",
      registration: "https://example.com/register-gamedev2025",
      description: "A hackathon for game developers to create fun and engaging experiences."
  },
  {
      title: "Cyber Security Hackathon",
      image: "https://i.pinimg.com/236x/73/ea/0a/73ea0a10b09f1af036eb2f2bbd315f08.jpg",
      entryPrice: 750,
      location: "Kolkata, India",
      url: "https://example.com/cyber-security-hackathon",
      registration: "https://example.com/register-cybersecurity2025",
      description: "Showcase your expertise by solving real-world cybersecurity challenges."
  },
  {
      title: "Climate Action Hackathon",
      image: "https://cdn3.f-cdn.com//files/download/92895821/Poster%20%281%29.jpg?width=780&height=1103&fit=crop",
      entryPrice: 0,
      location: "Delhi, India",
      url: "https://example.com/climate-action-hackathon",
      registration: "https://example.com/register-climateaction2025",
      description: "Develop solutions to combat climate change and promote sustainability."
  }
];

module.exports = { data: sampleHackathon };
