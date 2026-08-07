import React, { useState, useMemo } from "react";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Building2,
  Rocket,
  ShieldCheck,
  Clock,
  CreditCard,
  Trophy,
  Zap,
  CheckCircle2,
  Send,
  RotateCcw,
  Sliders,
  TrendingUp,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Search,
  Users,
  Briefcase,
  GraduationCap,
  DollarSign,
  Globe,
  Award,
  BookOpen,
  Calendar,
  Layers,
  Star,
  FileText,
  UserCheck,
  Heart,
  Share2,
  Filter,
  CheckSquare
} from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------------------------------------------------- */
/*  Directories & Ecosystem Data                                          */
/* ---------------------------------------------------------------------- */

const TRUSTED_LOGOS = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", category: "Enterprise" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", category: "Enterprise" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", category: "Enterprise" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg", category: "Fintech" },
  { name: "Y Combinator", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg", category: "Accelerator" },
  { name: "Sequoia Capital", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sequoia_Capital_logo.svg", category: "Investor" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", category: "Enterprise" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", category: "AI Tech" },
];

const ENTERPRISE_DIRECTORY = [
  {
    name: "Stripe",
    category: "Fintech & Payments",
    size: "8,000+ employees",
    location: "San Francisco / Remote",
    techStack: ["React", "Ruby", "Go", "AWS", "Python"],
    openJobs: 14,
    openInternships: 6,
    hiringManager: "Sarah Chen (Head of Talent)",
    linkedIn: "#",
    logo: "💳",
    badge: "Verified Hiring Partner",
    perks: "₹80k/mo Internship stipend · Remote-First · Learning Credits"
  },
  {
    name: "OpenAI",
    category: "Artificial Intelligence",
    size: "1,200+ employees",
    location: "San Francisco, CA",
    techStack: ["PyTorch", "Python", "Kubernetes", "CUDA", "TypeScript"],
    openJobs: 28,
    openInternships: 9,
    hiringManager: "Dr. Alex Rivera (AI Campus Recruiting)",
    linkedIn: "#",
    logo: "🤖",
    badge: "Top AI Research Org",
    perks: "Equity Grant · Unlimited Computing Credits · Mentorship"
  },
  {
    name: "Microsoft Accelerate",
    category: "Cloud & Enterprise SaaS",
    size: "220,000+ employees",
    location: "Global / India / US",
    techStack: ["Azure", "C#", "TypeScript", "React", "AI Copilot"],
    openJobs: 45,
    openInternships: 20,
    hiringManager: "Vikram Malhotra (University Relations)",
    linkedIn: "#",
    logo: "💻",
    badge: "Enterprise Sponsor",
    perks: "Global Fast-Track Hiring · Startup Grant Credits"
  },
  {
    name: "Y Combinator Network",
    category: "Startup Accelerator",
    size: "4,000+ Portfolio Companies",
    location: "San Francisco / Global",
    techStack: ["Full Stack", "AI/ML", "Mobile", "DevTools"],
    openJobs: 320,
    openInternships: 150,
    hiringManager: "Garry Tan & YC Talent Team",
    linkedIn: "#",
    logo: "🚀",
    badge: "Premier Startup Network",
    perks: "Direct Founder Hiring · Fast-Track Funding Access"
  }
];

const STARTUP_DIRECTORY = [
  {
    name: "DevScale AI",
    founder: "Arjun Mehta (IIT Bombay ex-Google)",
    stage: "Seed ($3.5M raised)",
    team: "12 members",
    industry: "AI Developer Tools",
    hiring: "2 Full Stack Engineers, 1 AI Intern",
    tech: "TypeScript, Python, PyTorch, Next.js",
    pitchDeck: "Public Deck (12 Slides)",
    accelerator: "Y Combinator W24",
    logo: "⚡"
  },
  {
    name: "BioNexus Health",
    founder: "Dr. Elena Rostova (Stanford PhD)",
    stage: "Series A ($12M raised)",
    team: "28 members",
    industry: "HealthTech & Genomics",
    hiring: "Data Scientist, UX Researcher",
    tech: "Python, BioPython, React Native, AWS",
    pitchDeck: "Investor Portal Active",
    accelerator: "Sequoia Surge",
    logo: "🧬"
  },
  {
    name: "FinPulse",
    founder: "Rohan Varma & Ananya Iyer",
    stage: "Pre-Seed ($800K raised)",
    team: "6 members",
    industry: "Neobanking & Credit",
    hiring: "Growth Lead, Frontend Intern",
    tech: "Node.js, React, Flutter, Postgres",
    pitchDeck: "Request Deck Access",
    accelerator: "Techstars 2024",
    logo: "📈"
  }
];

const INVESTOR_DIRECTORY = [
  {
    name: "Sequoia Capital India & SEA",
    fundSize: "$850M Fund IX",
    stage: "Seed to Series B",
    ticketSize: "$500K - $10M",
    focus: "AI, Consumer, SaaS, Fintech",
    portfolio: "Unacademy, Pine Labs, CRED, Razorpay",
    officeHours: "Every Thursday 4 PM IST (Free via Bingo)",
    contact: "Surge Investment Team",
    logo: "🌲"
  },
  {
    name: "Elevation Capital",
    fundSize: "$400M Fund VIII",
    stage: "Early Stage (Seed & Series A)",
    ticketSize: "$1M - $5M",
    focus: "Enterprise Tech, Consumer Internet",
    portfolio: "Swiggy, Paytm, Meesho, Urban Company",
    officeHours: "Alternate Tuesdays (Bingo Founder Room)",
    contact: "Mukul Arora (Managing Partner)",
    logo: "⛰️"
  },
  {
    name: "YC Continuity & Angels",
    fundSize: "$1B+ Global Network",
    stage: "Pre-Seed / Seed / Angel",
    ticketSize: "$100K - $500K",
    focus: "Agile Software, Deep Tech, Developer Tools",
    portfolio: "Stripe, Airbnb, Coinbase, DoorDash",
    officeHours: "Weekly Open Office Hours",
    contact: "YC Visiting Partners",
    logo: "🍊"
  }
];

const JOBS_INTERNSHIPS = [
  {
    title: "AI Research Intern",
    company: "OpenAI Labs",
    type: "Internship",
    location: "Remote / Hybrid",
    stipend: "₹80,000 / month",
    duration: "6 Months",
    tags: ["Python", "PyTorch", "LLMs"],
    logo: "🤖",
    applicants: 142
  },
  {
    title: "Full Stack Engineer (Founding Team)",
    company: "DevScale AI (YC W24)",
    type: "Full Time Job",
    location: "Remote",
    stipend: "₹24,000,000 - ₹36,000,000 / yr + 1.5% Equity",
    duration: "Permanent",
    tags: ["React", "TypeScript", "Node.js"],
    logo: "⚡",
    applicants: 89
  },
  {
    title: "Product Growth & Marketing Associate",
    company: "Stripe Community",
    type: "Full Time Job",
    location: "Bangalore / Remote",
    stipend: "₹18,000,000 - ₹24,000,000 / yr",
    duration: "Permanent",
    tags: ["Growth", "SEO", "Community", "Analytics"],
    logo: "💳",
    applicants: 210
  },
  {
    title: "UI/UX Design Fellow",
    company: "FinPulse Neobank",
    type: "Fellowship / Internship",
    location: "Remote",
    stipend: "₹50,000 / month + Mentorship",
    duration: "3 Months",
    tags: ["Figma", "User Research", "Design Systems"],
    logo: "🎨",
    applicants: 64
  }
];

const COMMUNITIES = [
  { name: "Founder & Builder Room", members: "45,000+", desc: "Connect with YC, Sequoia & Techstars founders. Share pitch decks & get co-founder matches.", icon: "🚀" },
  { name: "AI & LLM Developers", members: "62,000+", desc: "Hackathons, open-source AI projects, API credits, and GPU access.", icon: "🧠" },
  { name: "Student Tech Clubs & Interns", members: "120,000+", desc: "Resume reviews, mentorship, university chapters, and fast-track job referrals.", icon: "🎓" },
  { name: "Product Managers & Growth Leaders", members: "38,000+", desc: "Product teardowns, growth experiments, and executive PM job alerts.", icon: "📊" },
];

const BINGO_MASTER_BOARD = [
  [
    { feature: "Enterprise Directory", category: "Network", benefit: "Direct access to top 500+ tech companies & recruiters.", step: "Browse verified enterprise profiles.", metric: "Direct messages sent", icon: "🏢" },
    { feature: "AI Resume Review", category: "Career", benefit: "Instant AI score & tailored recommendations for job roles.", step: "Upload or paste your resume text.", metric: "Resume match score", icon: "📄" },
    { feature: "Startup Pitch Desk", category: "Funding", benefit: "Get your pitch deck reviewed by YC & VC mentors.", step: "Upload pitch deck or executive summary.", metric: "Investor interest score", icon: "🚀" },
    { feature: "Verified Mentors", category: "Growth", benefit: "1-on-1 office hours with CXOs, Founders, and Senior Engineers.", step: "Book a free 30-min mentor session.", metric: "Mentorship sessions completed", icon: "🤝" },
    { feature: "Remote Job Board", category: "Career", benefit: "Unlimited high-paying remote roles & equity startup positions.", step: "Apply with 1-click Bingo Profile.", metric: "Applications submitted", icon: "💼" },
  ],
  [
    { feature: "Student Internship Hub", category: "Career", benefit: "Guaranteed stipend internships with top startups & MNCs.", step: "Filter internships by stipend & tech stack.", metric: "Internship offers received", icon: "🎓" },
    { feature: "Investor Office Hours", category: "Funding", benefit: "Meet Sequoia, Elevation & Angel investors directly.", step: "Register for open pitch office hours.", metric: "Pitches scheduled", icon: "🌲" },
    { feature: "Founder Matcher", category: "Network", benefit: "AI-matched co-founders based on skills, vision & domain.", step: "Set your founder preferences.", metric: "Co-founder connections", icon: "👥" },
    { feature: "Hackathons & Challenges", category: "Growth", benefit: "Win cash prizes, credits & direct job offers in global hackathons.", step: "Join an upcoming hackathon team.", metric: "Hackathons participated", icon: "🏆" },
    { feature: "Learning Certifications", category: "Growth", benefit: "Free industry-recognized certificates in AI, Full Stack & Product.", step: "Complete a 1-hour skill pathway.", metric: "Certificates earned", icon: "📜" },
  ],
  [
    { feature: "AI Career Coach", category: "Career", benefit: "24/7 AI mentor guiding your interview prep & salary negotiations.", step: "Ask AI Coach career questions.", metric: "AI coaching interactions", icon: "🤖" },
    { feature: "Global Alumni Network", category: "Network", benefit: "Connect with university & corporate alumni worldwide.", step: "Join your university alumni group.", metric: "Alumni connections", icon: "🌐" },
    { free: true, feature: "FREE OPPORTUNITY PASS", category: "Core", benefit: "100% Free Access to the entire ecosystem forever.", step: "Instant zero-cost registration.", metric: "Unlimited Value", icon: "🎉" },
    { feature: "Exclusive Masterclasses", category: "Growth", benefit: "Live webinars by YC partners, Unicorn CXOs & Top Creators.", step: "RSVP to this week's live session.", metric: "Masterclasses attended", icon: "🎥" },
    { feature: "Referral Rewards Engine", category: "Network", benefit: "Earn XP, badges & priority investor placement by inviting friends.", step: "Share your personal invite link.", metric: "Successful referrals", icon: "🎁" },
  ],
  [
    { feature: "Discussion Forums", category: "Growth", benefit: "Ask questions, post startup ideas, and get instant community feedback.", step: "Create your first community post.", metric: "Forum upvotes & replies", icon: "💬" },
    { feature: "AI Investor Matcher", category: "Funding", benefit: "AI matches your startup stage with funds actively investing now.", step: "Run investor matching simulation.", metric: "Investor matches generated", icon: "🎯" },
    { feature: "Founder Live Rooms", category: "Network", benefit: "Drop-in audio & video rooms with active startup founders.", step: "Join a live founder room.", metric: "Room participation hours", icon: "🎙️" },
    { feature: "Corporate Perks & Credits", category: "Growth", benefit: "Claim over $150,000 in free AWS, Stripe, and OpenAI credits.", step: "Claim your free founder perks.", metric: "Credits claimed ($)", icon: "💳" },
    { feature: "Unified Message Inbox", category: "Network", benefit: "One inbox for recruiter chats, investor replies & mentor DMs.", step: "Send a direct networking request.", metric: "Messages exchanged", icon: "📥" },
  ],
  [
    { feature: "AI Pitch Deck Reviewer", category: "Funding", benefit: "Get instant slide-by-slide feedback on market size, traction & model.", step: "Paste your pitch deck summary.", metric: "Pitch readiness rating", icon: "📊" },
    { feature: "Job Match Alerts", category: "Career", benefit: "Instant WhatsApp & email alerts when companies post matching roles.", step: "Set job preferences & salary target.", metric: "High-match job alerts", icon: "🔔" },
    { feature: "Community Groups", category: "Network", benefit: "Join 100+ specialized groups in AI, SaaS, Design, Marketing & Sales.", step: "Join 3 focus communities.", metric: "Communities active in", icon: "🤝" },
    { feature: "Verified Professional Badge", category: "Career", benefit: "Stand out to hiring managers & investors with verified credentials.", step: "Complete profile verification.", metric: "Profile credibility score", icon: "🛡️" },
    { feature: "Bingo Leadership Board", category: "Gamification", benefit: "Climb the ecosystem leaderboard and get featured to top recruiters.", step: "Earn XP by completing challenges.", metric: "Global rank position", icon: "🌟" },
  ],
];

const WHY_JOIN_PILLARS = [
  { title: "Build Your Network", copy: "Connect with 500,000+ founders, enterprise leaders, investors, and engineers.", icon: "🌐" },
  { title: "Find VCs & Investors", copy: "Pitch top seed funds, angel syndicates, and accelerators directly.", icon: "💰" },
  { title: "Meet Co-Founders", copy: "Find complementary technical & business partners for your next startup.", icon: "👥" },
  { title: "Get High-Paying Jobs", copy: "Access unlisted remote roles, startup positions, and MNC career tracks.", icon: "💼" },
  { title: "Land Stipend Internships", copy: "Guaranteed paid internships for students & freshers with top startups.", icon: "🎓" },
  { title: "Launch Your Startup", copy: "Get free AWS credits, legal templates, pitch reviews, and launch support.", icon: "🚀" },
  { title: "Learn Business & Tech", copy: "Free certificates, hands-on pathways, and live masterclasses from CXOs.", icon: "📚" },
  { title: "Attend Exclusive Events", copy: "Free access to hackathons, founder meetups, and investor demo days.", icon: "🎟️" },
  { title: "Join Focused Communities", copy: "100+ active groups across AI, Marketing, Product, Sales, and Design.", icon: "💬" },
  { title: "Find 1-on-1 Mentors", copy: "Book office hours with experienced tech leads, VCs, and startup founders.", icon: "🤝" },
  { title: "Raise Seed Funding", copy: "Direct application pathways to Y Combinator, Techstars, and top funds.", icon: "📈" },
  { title: "Hire Top Talent", copy: "Post unlimited jobs & internships for free and connect with top builders.", icon: "⚡" },
];

const HOW_IT_WORKS_STEPS = [
  { step: "01", title: "Join FREE Today", copy: "Create your free Bingo account in under 30 seconds with no credit card." },
  { step: "02", title: "Complete Profile", copy: "Add your skills, background, startup ideas, or hiring goals." },
  { step: "03", title: "AI Matches You", copy: "Our AI engine scans 10,000+ jobs, investors, startups, and mentors for your ideal fit." },
  { step: "04", title: "Discover Opportunities", copy: "Browse verified enterprise roles, stipend internships, and pitch office hours." },
  { step: "05", title: "Connect With Enterprises", copy: "Directly message recruiters, hiring leads, and company sponsors." },
  { step: "06", title: "Join Communities", copy: "Participate in live founder rooms, developer groups, and hackathons." },
  { step: "07", title: "Meet Founders & VCs", copy: "Share pitch decks, book mentor office hours, and find co-founders." },
  { step: "08", title: "Attend Live Events", copy: "Join free masterclasses, demo days, and skill bootcamps." },
  { step: "09", title: "Grow Career & Startup", copy: "Unlock exponential career progression and business growth for free!" },
];

const FAQS = [
  { q: "Is Bingo really 100% FREE for students, founders, and professionals?", a: "Yes! Bingo is 100% free. Anyone can join, build a profile, search enterprise and startup directories, apply for jobs & internships, join communities, and book mentor sessions with zero fees." },
  { q: "How is Bingo different from LinkedIn, AngelList, or Product Hunt?", a: "Instead of charging subscription paywalls, restricting InMails, or charging $400/mo for recruiter software, Bingo combines networking, startup fundraising, hiring, and AI tools into ONE completely free ecosystem." },
  { q: "How can enterprise companies and startups hire talent for free?", a: "Companies can post unlimited open roles, internships, and host hackathons at zero cost. We believe access to human potential should be open to everyone." },
  { q: "What AI features are included in the free account?", a: "Free accounts include AI Resume Review, AI Pitch Deck Analysis, AI Founder/Investor Matcher, and 24/7 AI Career Coaching." }
];

/* ---------------------------------------------------------------------- */
/*  Main Component                                                         */
/* ---------------------------------------------------------------------- */

export default function App() {
  const [activeDirectoryTab, setActiveDirectoryTab] = useState("enterprise");
  const [selectedBingoCell, setSelectedBingoCell] = useState({ row: 2, col: 2 });
  const [activeDashboardTab, setActiveDashboardTab] = useState("candidate");
  
  // Interactive Bingo Board State
  const [markedBoard, setMarkedBoard] = useState(() => {
    const initial = Array(5).fill(null).map(() => Array(5).fill(false));
    initial[2][2] = true; // Free center square
    return initial;
  });
  const [hasWonBingo, setHasWonBingo] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  // AI Resume Review Simulator State
  const [resumeInput, setResumeInput] = useState("");
  const [aiAnalysisResult, setAiAnalysisResult] = useState(null);
  const [isAnalyzingResume, setIsAnalyzingResume] = useState(false);

  // Registration Form State
  const [userRole, setUserRole] = useState("Student");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCollegeOrCompany, setUserCollegeOrCompany] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Search filter query
  const [searchQuery, setSearchQuery] = useState("");

  // Chat Widget State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Welcome to Bingo! 🚀 I'm your AI Opportunity Assistant. How can I help you grow today? Try asking about Remote Jobs, Investors, or AI Resume Review!" }
  ]);
  const [chatInput, setChatInput] = useState("");

  const activeBingoCellData = BINGO_MASTER_BOARD[selectedBingoCell.row][selectedBingoCell.col];

  // Helper for Bingo Win
  const checkBingoWin = (board) => {
    let win = false;
    for (let r = 0; r < 5; r++) if (board[r].every(Boolean)) win = true;
    for (let c = 0; c < 5; c++) if (board.map(row => row[c]).every(Boolean)) win = true;
    if ([0,1,2,3,4].every(i => board[i][i])) win = true;
    if ([0,1,2,3,4].every(i => board[i][4 - i])) win = true;
    return win;
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 130,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#2563EB", "#00C896", "#F4C542", "#7C3AED", "#3BB6FF"]
    });
  };

  const toggleSquare = (r, c) => {
    setSelectedBingoCell({ row: r, col: c });
    const nextBoard = markedBoard.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === r && cIdx === c ? !cell : cell))
    );
    nextBoard[2][2] = true;
    setMarkedBoard(nextBoard);

    const win = checkBingoWin(nextBoard);
    if (win && !hasWonBingo) {
      setHasWonBingo(true);
      setShowWinModal(true);
      triggerConfetti();
    }
  };

  const markAllSquares = () => {
    const full = Array(5).fill(null).map(() => Array(5).fill(true));
    setMarkedBoard(full);
    setHasWonBingo(true);
    setShowWinModal(true);
    triggerConfetti();
  };

  const resetBoard = () => {
    const reset = Array(5).fill(null).map(() => Array(5).fill(false));
    reset[2][2] = true;
    setMarkedBoard(reset);
    setHasWonBingo(false);
    setShowWinModal(false);
  };

  const markedCount = useMemo(() => {
    return markedBoard.flat().filter(Boolean).length;
  }, [markedBoard]);

  // AI Resume Analyzer Handler
  const handleAnalyzeResume = (e) => {
    e.preventDefault();
    if (!resumeInput.trim()) return;
    setIsAnalyzingResume(true);
    setTimeout(() => {
      setAiAnalysisResult({
        score: 94,
        strengths: ["Strong technical keywords detected (React, Python, LLMs)", "Clear impact-driven achievements", "Ideal match for Founding Engineer & AI Intern roles"],
        recommendations: ["Highlight open-source contributions", "Add quantitative metrics (e.g. % performance lift)", "Connect with Sequoia portfolio recruiters on Bingo"],
        matchedJobs: ["AI Research Intern @ OpenAI", "Full Stack Engineer @ DevScale AI"]
      });
      setIsAnalyzingResume(false);
      triggerConfetti();
    }, 800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userEmail) return;
    setFormSubmitted(true);
    triggerConfetti();
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const query = chatInput;
    setChatMessages(prev => [...prev, { sender: "user", text: query }]);
    setChatInput("");

    setTimeout(() => {
      let reply = "Bingo gives you 100% FREE access to top enterprises, startup jobs, investors, and AI tools! Search our directories above or click 'Join FREE Today'.";
      const q = query.toLowerCase();
      if (q.includes("job") || q.includes("intern") || q.includes("hiring")) {
        reply = "We have 500+ active remote jobs & stipend internships listed! Check out the Remote Job Board & Internship Hub in Section 3.";
      } else if (q.includes("investor") || q.includes("fund") || q.includes("pitch")) {
        reply = "Meet investors from Sequoia, Elevation, and Y Combinator! You can submit your pitch deck or register for VC office hours completely free.";
      } else if (q.includes("resume") || q.includes("ai")) {
        reply = "Try our interactive AI Resume Reviewer in Section 7 to get an instant match score and candidate optimization suggestions!";
      }
      setChatMessages(prev => [...prev, { sender: "bot", text: reply }]);
    }, 500);
  };

  return (
    <div className="font-body bg-[#F8FAFC] text-[#0F172A] min-h-screen relative overflow-x-hidden selection:bg-[#2563EB] selection:text-white">

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0F172A]/95 text-white border-b border-[#334155] shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#3BB6FF] flex items-center justify-center font-display font-black text-2xl text-white shadow-blue-glow">
              B
            </div>
            <div>
              <a href="#" className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
                Bingo<span className="text-[#3BB6FF]">.</span>
              </a>
              <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase block -mt-1">
                World's #1 Opportunity Platform
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-[#94A3B8]">
            <a href="#directories" className="hover:text-white hover:underline underline-offset-4 transition-all">Directories</a>
            <a href="#board" className="hover:text-white hover:underline underline-offset-4 transition-all">Opportunity Board</a>
            <a href="#ai-suite" className="hover:text-white hover:underline underline-offset-4 transition-all">AI Copilot</a>
            <a href="#why-bingo" className="hover:text-white hover:underline underline-offset-4 transition-all">Why Bingo</a>
            <a href="#dashboards" className="hover:text-white hover:underline underline-offset-4 transition-all">Dashboards</a>
            <a href="#join" className="hover:text-white hover:underline underline-offset-4 transition-all">Join FREE</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#join"
              className="font-mono text-xs uppercase tracking-wider bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-6 py-2.5 rounded-full font-extrabold hover:from-[#3BB6FF] hover:to-[#2563EB] transition-all transform hover:scale-105 shadow-blue-glow flex items-center gap-1.5"
            >
              <Zap size={14} className="text-[#F4C542]" /> Join FREE Today
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO BANNER */}
      <section className="bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-20 pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3BB6FF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-[#2563EB]/20 text-[#3BB6FF] border border-[#2563EB]/40 px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={14} className="text-[#F4C542]" /> 100% Free Ecosystem · Zero Subscription Fees
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Join Bingo <span className="text-gradient-gold">FREE.</span>
              <br />
              Unlock Unlimited <span className="text-gradient-primary underline decoration-[#00C896] decoration-4 underline-offset-8">Opportunities.</span>
            </h1>

            <p className="font-body text-[#94A3B8] text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
              Get <strong className="text-white">FREE access</strong> to Enterprise Organizations, Startups, Investors, Hiring Partners, Mentors, Communities, AI Tools, Exclusive Events, Career Opportunities, and Business Resources—all from one powerful platform.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-display font-extrabold px-8 py-4 rounded-full text-base hover:from-[#3BB6FF] hover:to-[#2563EB] transition-all transform hover:scale-105 shadow-blue-glow"
              >
                Join FREE Today <ArrowRight size={20} />
              </a>
              <a
                href="#directories"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white bg-white/10 border border-white/20 px-6 py-4 rounded-full hover:bg-white/20 transition-all"
              >
                Explore Opportunities <Search size={16} className="text-[#3BB6FF]" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-xs text-[#94A3B8] border-t border-white/10 pt-6">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00C896]"/> No Credit Card Required</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00C896]"/> Unlimited Profiles & Messaging</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00C896]"/> Instant Enterprise Access</span>
            </div>
          </div>

          {/* Floating Opportunity Cards & Hero Board Preview */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#3BB6FF] rounded-3xl blur-2xl opacity-40 animate-pulse" />

            <div className="relative bg-[#0F172A] text-white rounded-3xl p-6 border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#F4C542] uppercase font-bold tracking-widest block">Live Opportunity Stream</span>
                  <h3 className="font-display font-bold text-lg">Ecosystem Pass #001</h3>
                </div>
                <span className="bg-[#00C896]/20 text-[#00C896] font-mono text-xs font-bold px-3 py-1 rounded-full border border-[#00C896]/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00C896] animate-ping" /> 100% Free Forever
                </span>
              </div>

              {/* Sample Floating Cards */}
              <div className="space-y-3">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 text-[#3BB6FF] flex items-center justify-center text-xl font-bold">🤖</div>
                    <div>
                      <h4 className="font-display font-bold text-sm">OpenAI AI Research Fellowship</h4>
                      <p className="text-xs text-[#94A3B8]">Remote · ₹80,000 / mo · Stipend Internship</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#00C896] font-bold bg-[#00C896]/10 px-2.5 py-1 rounded-lg">Apply Free</span>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4C542]/20 text-[#F4C542] flex items-center justify-center text-xl font-bold">🌲</div>
                    <div>
                      <h4 className="font-display font-bold text-sm">Sequoia Capital Founder Office Hours</h4>
                      <p className="text-xs text-[#94A3B8]"> Pitch Open · $500K - $10M Seed Fund</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#F4C542] font-bold bg-[#F4C542]/10 px-2.5 py-1 rounded-lg">RSVP Free</span>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center text-xl font-bold">🚀</div>
                    <div>
                      <h4 className="font-display font-bold text-sm">DevScale AI (YC W24) Founding Lead</h4>
                      <p className="text-xs text-[#94A3B8]">Full Time · ₹24L - ₹36L + 1.5% Equity</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#3BB6FF] font-bold bg-[#3BB6FF]/10 px-2.5 py-1 rounded-lg">Connect</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a href="#directories" className="font-mono text-xs text-[#3BB6FF] hover:underline font-bold inline-flex items-center gap-1">
                  View all 10,000+ opportunities <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED BY ECOSYSTEM LOGO TICKER */}
      <section className="bg-[#0F172A] text-white py-10 border-y border-[#334155] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] font-bold">
            Trusted By Top Enterprises, Startup Accelerators, Universities & Global Investors
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
            {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                <span className="font-display font-bold text-sm text-white">{item.name}</span>
                <span className="font-mono text-[10px] text-[#3BB6FF] uppercase bg-[#3BB6FF]/15 px-2 py-0.5 rounded-full">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EVERYTHING YOU GET FREE (DIRECTORIES & OPPORTUNITY SWITCHER) */}
      <section id="directories" className="py-24 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 px-3.5 py-1 rounded-full mb-3 font-bold">
              Explore The Ecosystem
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Everything You Get Completely FREE
            </h2>
            <p className="font-body text-[#475467] text-lg mt-4 leading-relaxed">
              No hidden paywalls. Access enterprise directories, startup networks, investor office hours, stipend internships, AI tools, and founder rooms at zero cost.
            </p>
          </div>

          {/* Directory Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {[
              { id: "enterprise", label: "Enterprise Directory", icon: "🏢" },
              { id: "startups", label: "Startup Network", icon: "🚀" },
              { id: "investors", label: "Investor Directory", icon: "💰" },
              { id: "jobs", label: "Jobs & Internships", icon: "💼" },
              { id: "communities", label: "Communities & Rooms", icon: "💬" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDirectoryTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold text-sm transition-all cursor-pointer ${
                  activeDirectoryTab === tab.id
                    ? "bg-[#2563EB] text-white shadow-blue-glow scale-105"
                    : "bg-white text-[#475467] border border-[#E2E8F0] hover:bg-[#F1F5F9]"
                }`}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar Filter */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <Search className="absolute left-4 top-3.5 text-[#94A3B8]" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, tech stacks, internships, pitch decks..."
              className="w-full bg-white border border-[#E2E8F0] rounded-2xl pl-12 pr-4 py-3 text-sm text-[#0F172A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          {/* Tab Content Display */}
          <AnimatePresence mode="wait">
            {activeDirectoryTab === "enterprise" && (
              <motion.div
                key="enterprise"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {ENTERPRISE_DIRECTORY.map((item) => (
                  <div key={item.name} className="bg-white p-7 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#2563EB] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center text-2xl font-bold">
                            {item.logo}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xl text-[#0F172A]">{item.name}</h3>
                            <p className="text-xs text-[#475467]">{item.category} · {item.location}</p>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] bg-[#00C896]/15 text-[#00C896] border border-[#00C896]/30 px-3 py-1 rounded-full font-bold">
                          {item.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[#475467] mb-4 bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] font-mono">
                        🎁 {item.perks}
                      </p>

                      <div className="space-y-2 text-xs text-[#475467] mb-5">
                        <div className="flex items-center justify-between">
                          <span>Open Roles:</span>
                          <strong className="text-[#2563EB] font-bold">{item.openJobs} Jobs · {item.openInternships} Internships</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Hiring Manager:</span>
                          <span className="font-medium text-[#0F172A]">{item.hiringManager}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.techStack.map(t => (
                          <span key={t} className="font-mono text-[10px] bg-[#F1F5F9] text-[#0F172A] px-2.5 py-1 rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#join"
                      className="w-full bg-[#0F172A] text-white font-display font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all text-center flex items-center justify-center gap-2"
                    >
                      Connect with Enterprise <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {activeDirectoryTab === "startups" && (
              <motion.div
                key="startups"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {STARTUP_DIRECTORY.map((item) => (
                  <div key={item.name} className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center text-xl">
                          {item.logo}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-[#0F172A]">{item.name}</h3>
                          <span className="font-mono text-[10px] bg-[#2563EB]/10 text-[#2563EB] px-2 py-0.5 rounded font-bold">
                            {item.stage}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-[#475467] mb-4">
                        <div><strong>Founder:</strong> {item.founder}</div>
                        <div><strong>Accelerator:</strong> {item.accelerator}</div>
                        <div><strong>Hiring:</strong> {item.hiring}</div>
                        <div><strong>Pitch Deck:</strong> <span className="text-[#00C896] font-bold">{item.pitchDeck}</span></div>
                      </div>
                    </div>

                    <a
                      href="#join"
                      className="w-full bg-[#2563EB] text-white font-display font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      View Startup Profile <ChevronRight size={14} />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {activeDirectoryTab === "investors" && (
              <motion.div
                key="investors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {INVESTOR_DIRECTORY.map((item) => (
                  <div key={item.name} className="bg-[#0F172A] text-white p-7 rounded-3xl border border-[#334155] shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                          {item.logo}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-white">{item.name}</h3>
                          <span className="font-mono text-[10px] text-[#F4C542] font-bold">{item.fundSize}</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-[#94A3B8] mb-5 font-mono">
                        <div>Stage: <strong className="text-white">{item.stage}</strong></div>
                        <div>Check Size: <strong className="text-[#3BB6FF]">{item.ticketSize}</strong></div>
                        <div>Focus: <span className="text-white">{item.focus}</span></div>
                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-white mt-2">
                          🕒 {item.officeHours}
                        </div>
                      </div>
                    </div>

                    <a
                      href="#join"
                      className="w-full bg-[#F4C542] text-[#0F172A] font-display font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-[#3BB6FF] transition-all text-center flex items-center justify-center gap-1.5 shadow-gold-glow"
                    >
                      Submit Pitch Deck <Zap size={14} />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {activeDirectoryTab === "jobs" && (
              <motion.div
                key="jobs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {JOBS_INTERNSHIPS.map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center text-2xl">
                        {item.logo}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                        <h3 className="font-display font-bold text-base text-[#0F172A] mt-1">{item.title}</h3>
                        <p className="text-xs text-[#475467]">{item.company} · {item.location}</p>
                        <p className="text-xs font-mono font-bold text-[#00C896] mt-1">💰 {item.stipend}</p>
                      </div>
                    </div>

                    <a
                      href="#join"
                      className="bg-[#2563EB] text-white font-display font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-all whitespace-nowrap"
                    >
                      1-Click Apply
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {activeDirectoryTab === "communities" && (
              <motion.div
                key="communities"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {COMMUNITIES.map((item) => (
                  <div key={item.name} className="bg-white p-7 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center text-2xl shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-lg text-[#0F172A]">{item.name}</h3>
                          <span className="font-mono text-[10px] bg-[#00C896]/15 text-[#00C896] px-2 py-0.5 rounded-full font-bold">
                            {item.members} Active
                          </span>
                        </div>
                        <p className="text-xs text-[#475467] mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <a
                      href="#join"
                      className="bg-[#7C3AED] text-white font-display font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all whitespace-nowrap ml-4"
                    >
                      Join Room
                    </a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 4: WHY JOIN BINGO (12 PILLARS) */}
      <section id="why-bingo" className="py-24 bg-[#0F172A] text-white border-t border-[#334155]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#3BB6FF]/15 text-[#3BB6FF] border border-[#3BB6FF]/30 px-3.5 py-1 rounded-full mb-3 font-bold">
              Built For Everyone
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
              Why 500,000+ Builders Choose Bingo
            </h2>
            <p className="font-body text-[#94A3B8] text-lg mt-4 leading-relaxed">
              Whether you're a student looking for your first job, a founder raising a seed round, or an enterprise looking to hire top talent — Bingo empowers your journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_JOIN_PILLARS.map((item) => (
              <div key={item.title} className="bg-white/5 p-7 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#3BB6FF] transition-all group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-display font-bold text-xl mb-2 text-white">{item.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS (9 STEP PROGRESSION) */}
      <section className="py-24 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#00C896]/15 text-[#00C896] border border-[#00C896]/30 px-3.5 py-1 rounded-full mb-3 font-bold">
              Simple 9-Step Journey
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              How Bingo Accelerates Your Career & Business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div key={s.step} className="bg-white p-7 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all relative">
                <span className="font-display font-black text-3xl text-[#2563EB]/20 absolute top-4 right-6">{s.step}</span>
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-[#0F172A]">{s.title}</h3>
                <p className="text-xs text-[#475467] leading-relaxed">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE 5x5 OPPORTUNITY BINGO CARD GAME */}
      <section id="board" className="py-24 bg-[#1E293B] text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#F4C542]/20 text-[#F4C542] border border-[#F4C542]/40 px-3.5 py-1 rounded-full mb-3 font-bold">
              Interactive Game Board
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
              Play The Opportunity Board
            </h2>
            <p className="font-body text-[#94A3B8] text-lg mt-4 leading-relaxed">
              Every square represents an ecosystem superpower. Click any square to explore its benefits, or mark squares to complete a line and win your **Unlimited Opportunity Pass**!
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-[#0F172A] p-4 rounded-2xl border border-[#334155] font-mono text-xs shadow-lg">
            <div className="flex items-center gap-4">
              <span className="text-[#94A3B8]">Card Status: <strong className="text-[#F4C542]">{markedCount} / 25 Unlocked</strong></span>
              {hasWonBingo && (
                <span className="bg-[#F4C542] text-[#0F172A] font-bold px-3 py-1 rounded-full animate-bounce">
                  🎉 BINGO WINNER!
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={markAllSquares}
                className="flex items-center gap-1.5 bg-[#2563EB] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#3BB6FF] hover:text-[#0F172A] transition-all shadow"
              >
                <Zap size={14} /> Auto-Fill Board
              </button>
              <button
                onClick={resetBoard}
                className="flex items-center gap-1.5 bg-white/10 text-[#94A3B8] border border-white/15 px-3.5 py-2 rounded-xl hover:text-white transition-all"
              >
                <RotateCcw size={14} /> Reset
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* The 5x5 Grid */}
            <div className="bg-white text-[#0F172A] rounded-3xl p-5 md:p-7 shadow-2xl border border-[#E2E8F0]">
              <div className="grid grid-cols-5 gap-2.5 mb-3">
                {["B", "I", "N", "G", "O"].map((letter, i) => (
                  <div key={letter} className="text-center bg-[#0F172A] text-white p-3 rounded-2xl border border-[#2563EB]/30">
                    <div className="font-display font-black text-2xl md:text-3xl text-[#F4C542]">{letter}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-2.5">
                {BINGO_MASTER_BOARD.map((row, r) =>
                  row.map((cell, c) => {
                    const isSelected = selectedBingoCell.row === r && selectedBingoCell.col === c;
                    const isMarked = markedBoard[r][c];

                    return (
                      <button
                        key={`bingo-${r}-${c}`}
                        onClick={() => toggleSquare(r, c)}
                        className={`group aspect-square rounded-2xl flex flex-col items-center justify-between p-2.5 text-center transition-all duration-200 cursor-pointer relative overflow-hidden border ${
                          cell.free
                            ? "bg-[#F4C542] text-[#0F172A] font-display font-black border-[#D4A017] shadow-lg"
                            : isSelected
                            ? "bg-[#0F172A] text-white border-[#3BB6FF] shadow-2xl scale-[1.04] z-10"
                            : isMarked
                            ? "bg-[#2563EB] text-white border-[#1D4ED8] font-semibold shadow"
                            : "bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0] hover:bg-[#E2E8F0]"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full text-[10px] opacity-80">
                          <span>{cell.icon}</span>
                          {isMarked && <CheckCircle2 size={13} className={cell.free ? "text-[#0F172A]" : "text-[#3BB6FF]"} />}
                        </div>

                        <span className="font-mono text-[9px] md:text-[11px] leading-tight font-bold my-auto line-clamp-2">
                          {cell.free ? "FREE PASS" : cell.feature}
                        </span>

                        <span className="text-[8px] font-mono opacity-60 uppercase">
                          {isMarked ? "ACTIVE" : "CLICK"}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Sidebar Detail Panel */}
            <div className="bg-[#0F172A] rounded-3xl p-7 border border-[#334155] lg:sticky lg:top-24 shadow-2xl text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedBingoCell.row}-${selectedBingoCell.col}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {activeBingoCellData.free ? (
                    <>
                      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider bg-[#F4C542]/20 text-[#F4C542] border border-[#F4C542]/40 px-3 py-1 rounded-full mb-4 font-bold">
                        Center Square · Free Access Pass
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-3 flex items-center gap-2 text-white">
                        <span>🎉</span> Free Opportunity Pass
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                        Full access to all enterprise directories, startup networks, VC office hours, stipend internships, and AI career tools completely free forever.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#3BB6FF] bg-[#3BB6FF]/15 border border-[#3BB6FF]/30 px-3 py-1 rounded-full mb-4 font-bold">
                        Category: {activeBingoCellData.category}
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-3 flex items-center gap-2 text-white">
                        <span>{activeBingoCellData.icon}</span> {activeBingoCellData.feature}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                        {activeBingoCellData.benefit}
                      </p>

                      <div className="space-y-4 border-t border-white/15 pt-5">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8] mb-1.5">Action Step</div>
                          <div className="text-sm text-white bg-white/10 p-3 rounded-xl border border-white/15 font-medium flex items-center gap-2">
                            <ChevronRight size={16} className="text-[#3BB6FF]" /> {activeBingoCellData.step}
                          </div>
                        </div>

                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8] mb-1.5">Measured By</div>
                          <div className="text-xs text-[#00C896] bg-[#00C896]/15 p-3 rounded-xl border border-[#00C896]/30 font-mono font-semibold flex items-center gap-2">
                            <TrendingUp size={16} /> {activeBingoCellData.metric}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-5 border-t border-white/15">
                        <button
                          onClick={() => toggleSquare(selectedBingoCell.row, selectedBingoCell.col)}
                          className={`w-full py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            markedBoard[selectedBingoCell.row][selectedBingoCell.col]
                              ? "bg-[#00C896] text-white"
                              : "bg-[#2563EB] text-white hover:bg-[#3BB6FF] hover:text-[#0F172A]"
                          }`}
                        >
                          {markedBoard[selectedBingoCell.row][selectedBingoCell.col] ? (
                            <> <Check size={16} /> Marked as Unlocked </>
                          ) : (
                            <> <CheckCircle2 size={16} /> Unlock Square </>
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INTERACTIVE AI COPILOT SUITE */}
      <section id="ai-suite" className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#2563EB]/20 text-[#3BB6FF] border border-[#2563EB]/40 px-3.5 py-1 rounded-full mb-3 font-bold">
              AI Copilot Suite
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
              Free AI Tools For Your Growth
            </h2>
            <p className="font-body text-[#94A3B8] text-lg mt-4 leading-relaxed">
              Test your resume, evaluate your startup pitch deck, or match with top investors using Bingo's free built-in AI assistant.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* AI Resume Reviewer */}
            <div className="bg-[#1E293B] p-8 rounded-3xl border border-[#334155] shadow-2xl">
              <h3 className="font-display font-bold text-xl mb-3 text-white flex items-center gap-2">
                <span>📄</span> AI Resume Reviewer & Matcher
              </h3>
              <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
                Paste your resume summary or skills below to get instant AI scoring, gap analysis, and tailored job matches.
              </p>

              <form onSubmit={handleAnalyzeResume} className="space-y-4">
                <textarea
                  rows={4}
                  value={resumeInput}
                  onChange={(e) => setResumeInput(e.target.value)}
                  placeholder="Paste your resume text, top skills, or experience here..."
                  className="w-full bg-[#0F172A] border border-[#334155] rounded-2xl p-4 text-xs text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />

                <button
                  type="submit"
                  disabled={isAnalyzingResume}
                  className="w-full bg-[#2563EB] text-white font-display font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#3BB6FF] hover:text-[#0F172A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-blue-glow"
                >
                  {isAnalyzingResume ? (
                    <span>Analyzing with AI...</span>
                  ) : (
                    <> Run AI Resume Analysis <Zap size={14} /> </>
                  )}
                </button>
              </form>

              {aiAnalysisResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 bg-[#0F172A] rounded-2xl border border-[#00C896]/30 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs text-[#94A3B8]">AI Profile Score:</span>
                    <span className="font-display font-black text-2xl text-[#00C896]">{aiAnalysisResult.score}/100</span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#3BB6FF] uppercase font-bold">Strengths:</span>
                    <ul className="text-xs text-[#94A3B8] space-y-1 mt-1">
                      {aiAnalysisResult.strengths.map((s, i) => (
                        <li key={i} className="flex items-center gap-1.5"><Check size={14} className="text-[#00C896]" /> {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#F4C542] uppercase font-bold">Top Matched Roles:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {aiAnalysisResult.matchedJobs.map((j, i) => (
                        <span key={i} className="font-mono text-[10px] bg-[#2563EB]/20 text-[#3BB6FF] px-2.5 py-1 rounded-lg">
                          {j}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* AI Pitch Deck & Founder Advisor */}
            <div className="bg-[#1E293B] p-8 rounded-3xl border border-[#334155] shadow-2xl space-y-6">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <span>🚀</span> AI Startup & Investor Matcher
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Our AI model automatically matches founders with early-stage VCs based on thesis, stage, and cheque size.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-[#0F172A] rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-sm text-white">AI Founder Matching Engine</span>
                    <span className="font-mono text-[10px] bg-[#00C896]/20 text-[#00C896] px-2.5 py-0.5 rounded-full font-bold">Active</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">Matches technical co-founders with business leads based on vision & skill matrix.</p>
                </div>

                <div className="p-4 bg-[#0F172A] rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-sm text-white">AI Pitch Deck Evaluator</span>
                    <span className="font-mono text-[10px] bg-[#F4C542]/20 text-[#F4C542] px-2.5 py-0.5 rounded-full font-bold">Instant Analysis</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">Slide-by-slide feedback on TAM, unit economics, competition, and traction metrics.</p>
                </div>
              </div>

              <a
                href="#join"
                className="w-full bg-[#F4C542] text-[#0F172A] font-display font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-[#3BB6FF] transition-all text-center flex items-center justify-center gap-2 shadow-gold-glow"
              >
                Access All Free AI Tools <Zap size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: ROLE-BASED DASHBOARD PREVIEWS */}
      <section id="dashboards" className="py-24 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 px-3.5 py-1 rounded-full mb-3 font-bold">
              Tailored Experiences
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Dashboards Purpose-Built For You
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
            {[
              { id: "candidate", label: "Candidate & Student", icon: "🎓" },
              { id: "founder", label: "Startup Founder", icon: "🚀" },
              { id: "investor", label: "Investor & VC", icon: "💰" },
              { id: "enterprise", label: "Enterprise Recruiter", icon: "🏢" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveDashboardTab(t.id)}
                className={`px-6 py-3 rounded-full font-display font-bold text-sm transition-all cursor-pointer ${
                  activeDashboardTab === t.id
                    ? "bg-[#0F172A] text-white shadow-xl scale-105"
                    : "bg-white text-[#475467] border border-[#E2E8F0] hover:bg-[#F1F5F9]"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-xl max-w-4xl mx-auto">
            {activeDashboardTab === "candidate" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="font-mono text-xs text-[#2563EB] font-bold">Welcome Back, Alex!</span>
                    <h3 className="font-display font-bold text-2xl text-[#0F172A]">Candidate Opportunity Hub</h3>
                  </div>
                  <span className="font-mono text-xs bg-[#00C896]/15 text-[#00C896] px-3 py-1 rounded-full font-bold">Profile Score: 94%</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Applied Jobs</div>
                    <div className="font-display font-bold text-2xl text-[#2563EB]">14</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Saved Opportunities</div>
                    <div className="font-display font-bold text-2xl text-[#7C3AED]">28</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Bingo XP Points</div>
                    <div className="font-display font-bold text-2xl text-[#F4C542]">2,450 XP</div>
                  </div>
                </div>
              </div>
            )}

            {activeDashboardTab === "founder" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="font-mono text-xs text-[#7C3AED] font-bold">DevScale AI Pitch Portal</span>
                    <h3 className="font-display font-bold text-2xl text-[#0F172A]">Founder & Investor Dashboard</h3>
                  </div>
                  <span className="font-mono text-xs bg-[#F4C542]/20 text-[#D4A017] px-3 py-1 rounded-full font-bold">Seed Round Active</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Investor Deck Views</div>
                    <div className="font-display font-bold text-2xl text-[#2563EB]">184</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">VC Meetings Scheduled</div>
                    <div className="font-display font-bold text-2xl text-[#00C896]">8</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Talent Applicants</div>
                    <div className="font-display font-bold text-2xl text-[#7C3AED]">142</div>
                  </div>
                </div>
              </div>
            )}

            {activeDashboardTab === "investor" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="font-mono text-xs text-[#00C896] font-bold">Sequoia Surge Dealflow</span>
                    <h3 className="font-display font-bold text-2xl text-[#0F172A]">VC Dealflow & Founder Desk</h3>
                  </div>
                  <span className="font-mono text-xs bg-[#2563EB]/15 text-[#2563EB] px-3 py-1 rounded-full font-bold">Active Office Hours</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Pitches Submitted</div>
                    <div className="font-display font-bold text-2xl text-[#0F172A]">312</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Office Hours Booked</div>
                    <div className="font-display font-bold text-2xl text-[#00C896]">24</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Portfolio Founders</div>
                    <div className="font-display font-bold text-2xl text-[#F4C542]">64</div>
                  </div>
                </div>
              </div>
            )}

            {activeDashboardTab === "enterprise" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="font-mono text-xs text-[#0F172A] font-bold">Stripe Talent & University Recruiting</span>
                    <h3 className="font-display font-bold text-2xl text-[#0F172A]">Enterprise Talent Pipeline</h3>
                  </div>
                  <span className="font-mono text-xs bg-[#00C896]/15 text-[#00C896] px-3 py-1 rounded-full font-bold">Verified Org</span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Active Open Roles</div>
                    <div className="font-display font-bold text-2xl text-[#2563EB]">20</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Candidates Matched</div>
                    <div className="font-display font-bold text-2xl text-[#00C896]">1,280</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="font-mono text-[10px] text-[#475467]">Campus Hackathons</div>
                    <div className="font-display font-bold text-2xl text-[#7C3AED]">4</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ ACCORDION */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[#0F172A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={faq.q} className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden">
                <button
                  onClick={() => setSelectedBingoCell(prev => ({ ...prev, faqOpen: prev.faqOpen === idx ? null : idx }))}
                  className="w-full p-6 text-left font-display font-bold text-lg flex items-center justify-between text-[#0F172A] hover:text-[#2563EB] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="text-[#94A3B8]" />
                </button>
                <div className="px-6 pb-6 text-[#475467] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: REGISTRATION / CLAIM CTA FORM */}
      <section id="join" className="py-24 bg-[#0F172A] text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#F4C542]/20 text-[#F4C542] border border-[#F4C542]/40 px-3.5 py-1 rounded-full mb-4 font-bold">
            Instant Access Pass
          </div>

          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight mb-6">
            Join Bingo FREE Today.
          </h2>

          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Create your free account in under 30 seconds. Unlock enterprise directories, remote jobs, VC pitch desks, and AI tools with zero credit card required.
          </p>

          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#1E293B] p-8 rounded-3xl border border-[#00C896] text-center max-w-md mx-auto shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-[#00C896]/20 text-[#00C896] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2 text-white">Welcome to Bingo! 🎉</h3>
              <p className="text-sm text-[#94A3B8] mb-4">
                We sent your Free Access Pass confirmation to <strong className="text-white">{userEmail}</strong>!
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="font-mono text-xs uppercase tracking-wider text-[#3BB6FF] hover:underline"
              >
                Register another profile
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="bg-[#1E293B] p-8 rounded-3xl border border-[#334155] shadow-2xl max-w-xl mx-auto space-y-4"
            >
              <div className="flex bg-[#0F172A] p-1.5 rounded-2xl border border-[#334155] mb-2">
                {["Student", "Founder", "Professional", "Recruiter"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setUserRole(role)}
                    className={`flex-1 py-2 font-display font-bold text-xs rounded-xl transition-all ${
                      userRole === role ? "bg-[#2563EB] text-white shadow-md" : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full bg-[#0F172A] border border-[#334155] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-[#0F172A] border border-[#334155] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <input
                type="text"
                value={userCollegeOrCompany}
                onChange={(e) => setUserCollegeOrCompany(e.target.value)}
                placeholder="University / Company / Startup Name"
                className="w-full bg-[#0F172A] border border-[#334155] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-display font-bold text-base px-8 py-4 rounded-xl hover:from-[#3BB6FF] hover:to-[#2563EB] transition-all transform hover:scale-[1.02] shadow-blue-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                Get FREE Access Pass <ArrowRight size={20} />
              </button>
              <p className="font-mono text-[11px] text-[#94A3B8] mt-3">
                🔒 100% Free Ecosystem · No Credit Card Required
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#334155] py-10 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white font-display font-black flex items-center justify-center text-sm">
              B
            </div>
            <div className="font-display font-bold text-xl">Bingo<span className="text-[#3BB6FF]">.</span></div>
          </div>
          <div className="font-mono text-xs text-[#94A3B8]">
            World's #1 Free Opportunity Ecosystem & Platform
          </div>
          <div className="font-mono text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Bingo Opportunity Platform. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING AI ASSISTANT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer border-2 border-[#3BB6FF]"
            title="Open AI Opportunity Assistant"
          >
            <MessageSquare size={24} />
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-80 sm:w-96 bg-[#1E293B] border border-[#334155] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[480px]"
          >
            <div className="bg-[#0F172A] p-4 border-b border-[#334155] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00C896] animate-pulse" />
                <span className="font-display font-bold text-sm text-white">Bingo AI Assistant</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-[#94A3B8] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-body text-xs text-white">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-[#2563EB] text-white font-medium"
                        : "bg-[#0F172A] text-white border border-[#334155]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendChat} className="p-3 bg-[#0F172A] border-t border-[#334155] flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about jobs, VCs, resumes..."
                className="flex-1 bg-[#1E293B] border border-[#334155] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              />
              <button
                type="submit"
                className="bg-[#2563EB] text-white p-2 rounded-xl hover:bg-[#3BB6FF] transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </div>

      {/* BINGO WINNER CELEBRATORY MODAL */}
      <AnimatePresence>
        {showWinModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#0F172A] text-white rounded-3xl p-8 max-w-md w-full border-2 border-[#F4C542] text-center shadow-2xl relative"
            >
              <button
                onClick={() => setShowWinModal(false)}
                className="absolute top-4 right-4 text-[#94A3B8] hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 bg-[#F4C542]/20 text-[#F4C542] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F4C542]/40">
                <Trophy size={48} />
              </div>

              <div className="font-mono text-xs uppercase tracking-widest text-[#3BB6FF] font-bold mb-1">
                Ecosystem Pass Unlocked
              </div>
              <h3 className="font-display font-extrabold text-3xl mb-2 text-white">
                BINGO! 🎉
              </h3>
              <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                You've completed a winning line on the Free Opportunity Board! You have unlocked 100% free access to Enterprise Directories, VC pitch desks, Remote Job Boards, AI tools, and Founder Rooms.
              </p>

              <div className="space-y-3">
                <a
                  href="#join"
                  onClick={() => setShowWinModal(false)}
                  className="w-full bg-[#F4C542] text-[#0F172A] font-display font-extrabold py-3.5 rounded-xl block hover:bg-[#3BB6FF] transition-all shadow-gold-glow"
                >
                  Claim Your Free Pass
                </a>
                <button
                  onClick={() => setShowWinModal(false)}
                  className="w-full bg-white/10 text-[#94A3B8] font-mono text-xs py-2.5 rounded-xl hover:text-white"
                >
                  Continue exploring board
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
