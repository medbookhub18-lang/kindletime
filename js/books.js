const BOOKS = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    rating: 4.9,
    pages: 320,
    year: 2018,
    featured: true,
    coverColor: ["#FF6B35", "#FF9900"],
    isbn: "0735211299",
    description: "Tiny changes, remarkable results. Discover how 1% improvements compound into life-changing outcomes through the science of habit formation.",
    summary: `<h3>The Compound Effect of Small Actions</h3>
<p>James Clear's <em>Atomic Habits</em> reframes how we think about self-improvement. Forget dramatic transformations — the secret lies in making tiny, consistent changes that compound over time. Improving by just 1% every day leads to being 37 times better by year's end. The reverse is equally true: tiny degradations accumulate into failure.</p>

<h3>The Four Laws of Behavior Change</h3>
<p>Clear's framework distills habit formation into four actionable laws. To build a good habit: <strong>Make it obvious</strong> (design your environment), <strong>Make it attractive</strong> (pair habits with rewards), <strong>Make it easy</strong> (reduce friction), and <strong>Make it satisfying</strong> (celebrate small wins). Breaking bad habits requires reversing each law — make them invisible, unattractive, difficult, and unsatisfying.</p>

<h3>Identity-Based Change</h3>
<p>The most powerful insight in the book is that lasting habit change must come from identity, not outcomes. Instead of "I want to quit smoking," the shift becomes "I am not a smoker." Every action is a vote cast for the type of person you want to be. Accumulate enough votes, and your identity shifts — making the behavior feel natural rather than forced.</p>

<h3>The Habit Loop</h3>
<p>Every habit follows a four-stage cycle: cue, craving, response, reward. Understanding this loop allows you to design environments that automatically trigger desired behaviors. Clear introduces the concept of "habit stacking" — attaching new habits to existing ones — as one of the most reliable implementation strategies.</p>

<h3>Key Takeaway</h3>
<p>You do not rise to the level of your goals — you fall to the level of your systems. Build better systems by engineering your environment, shaping your identity, and treating every small win as proof of who you're becoming.</p>`
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Finance",
    rating: 4.7,
    pages: 336,
    year: 1997,
    featured: false,
    coverColor: ["#4776E6", "#8E54E9"],
    isbn: "1612680194",
    description: "What the rich teach their kids about money that the poor and middle class do not. A foundational guide to financial literacy and building wealth.",
    summary: `<h3>Two Dads, Two Mindsets</h3>
<p>Robert Kiyosaki grew up with two father figures: his biological "Poor Dad" — a highly educated government employee — and his best friend's "Rich Dad," a self-made entrepreneur. Their contrasting advice about money forms the backbone of this landmark book. The core tension: one believed in working for money, the other believed in making money work for you.</p>

<h3>Assets vs. Liabilities</h3>
<p>Kiyosaki's most powerful insight is deceptively simple: <strong>the rich buy assets; the poor and middle class buy liabilities they think are assets</strong>. An asset puts money in your pocket — stocks, rental properties, businesses. A liability takes money out — your personal home (which most people misclassify as an asset), car loans, and consumer debt.</p>

<h3>The Rat Race</h3>
<p>Most people are trapped in the "rat race" — they earn more, spend more, and never build wealth. The cycle of earn → tax → spend → debt keeps people financially dependent on their employer. Financial freedom requires building income streams that do not depend on your time.</p>

<h3>Financial Education Over Formal Education</h3>
<p>The school system teaches children to be employees, not entrepreneurs. Rich Dad argues that accounting, investing, and understanding markets are life skills that schools ignore. True financial intelligence means understanding cash flow, leverage, and how to use the tax code to your advantage.</p>

<h3>Key Takeaway</h3>
<p>Stop working for money — start building systems that generate income. Focus on acquiring assets, minimizing liabilities, and continually expanding your financial education. The goal is passive income that exceeds your expenses.</p>`
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    rating: 4.8,
    pages: 296,
    year: 2016,
    featured: true,
    coverColor: ["#11998e", "#38ef7d"],
    isbn: "1455586692",
    description: "Rules for focused success in a distracted world. Learn to master the art of concentration and produce high-value work in an age of constant interruption.",
    summary: `<h3>The Deep Work Hypothesis</h3>
<p>Cal Newport opens with a bold claim: the ability to perform deep work — cognitively demanding tasks executed in a state of distraction-free concentration — is becoming increasingly rare and increasingly valuable. Those who cultivate it will thrive; those who cannot will struggle. Newport argues this isn't just productivity advice — it's career strategy.</p>

<h3>What Is Deep Work?</h3>
<p>Deep work is professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve skills, and are hard to replicate. In contrast, "shallow work" — emails, meetings, administrative tasks — is logistically necessary but cognitively undemanding and easy to replicate.</p>

<h3>The Four Philosophies</h3>
<p>Newport presents four approaches to scheduling deep work: the <strong>Monastic</strong> (eliminate all shallow work completely), <strong>Bimodal</strong> (alternate long deep blocks with shallow periods), <strong>Rhythmic</strong> (build a daily deep work habit at a consistent time), and <strong>Journalistic</strong> (insert deep work wherever opportunities appear). Most knowledge workers benefit most from the Rhythmic approach.</p>

<h3>Draining the Shallows</h3>
<p>Newport provides tactics for reducing shallow work: schedule every minute of your workday, quantify the depth of every activity, set a fixed shutdown time, and practice the "any benefit" mindset replacement — don't use a tool unless its benefits outweigh its costs. Embrace boredom, quit social media, and make depth a default.</p>

<h3>Key Takeaway</h3>
<p>In a world optimized for distraction, the ability to focus deeply is your competitive edge. Treat attention like the scarce resource it is, ruthlessly eliminate the shallow, and invest your best cognitive hours in work that genuinely matters.</p>`
  },
  {
    id: 4,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psychology",
    rating: 4.8,
    pages: 499,
    year: 2011,
    featured: false,
    coverColor: ["#8360c3", "#2ebf91"],
    isbn: "0374533555",
    description: "A Nobel laureate's exploration of the two systems that drive the way we think — and how their interplay shapes every decision we make.",
    summary: `<h3>Two Systems of Thought</h3>
<p>Nobel Prize-winning psychologist Daniel Kahneman presents the idea that human thinking operates through two systems. <strong>System 1</strong> is fast, intuitive, and emotional — it runs automatically, making snap judgments and pattern-matching with minimal effort. <strong>System 2</strong> is slow, deliberate, and logical — it handles complex calculations, conscious decision-making, and nuanced analysis, but is mentally taxing and lazy by nature.</p>

<h3>Cognitive Biases and Heuristics</h3>
<p>The book catalogs dozens of systematic errors that arise from over-relying on System 1. Anchoring bias causes irrelevant numbers to distort estimates. Availability heuristic leads us to overestimate the likelihood of vivid events. Confirmation bias makes us seek evidence that supports existing beliefs. Understanding these biases is the first step toward correcting them.</p>

<h3>Prospect Theory</h3>
<p>One of Kahneman's most celebrated contributions is Prospect Theory: losses loom psychologically larger than equivalent gains. The pain of losing $100 is roughly twice as intense as the pleasure of gaining $100. This asymmetry explains why people make irrational financial decisions — avoiding losses even when the expected value of taking a risk is positive.</p>

<h3>The Experiencing Self vs. the Remembering Self</h3>
<p>We have two "selves" with different interests: the experiencing self lives in the moment, while the remembering self creates narratives about past experiences. Happiness research is complicated by the fact that what we remember about events differs significantly from what we felt during them — the "peak-end rule" means we judge experiences by their peak intensity and how they ended, not their duration.</p>

<h3>Key Takeaway</h3>
<p>We are not as rational as we believe. Recognizing when System 1 is steering — and deliberately engaging System 2 — is the key to better decisions in finance, relationships, health, and beyond.</p>`
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    rating: 4.8,
    pages: 443,
    year: 2011,
    featured: true,
    coverColor: ["#c94b4b", "#4b134f"],
    isbn: "0062316095",
    description: "A brief history of humankind — from the cognitive revolution 70,000 years ago to the present day, asking what made Homo sapiens the dominant species on Earth.",
    summary: `<h3>The Cognitive Revolution</h3>
<p>Around 70,000 years ago, Homo sapiens underwent a remarkable cognitive transformation that enabled complex language, abstract thinking, and most crucially — the ability to believe in things that don't physically exist: gods, nations, money, human rights. Harari argues this capacity for "shared myths" is what allowed large-scale human cooperation and ultimately our dominance over the planet.</p>

<h3>The Agricultural Revolution: A Trap?</h3>
<p>Roughly 10,000 years ago, humans transitioned from foraging to farming. Harari provocatively calls this "history's biggest fraud." Agriculture allowed for population growth and civilization — but the average farmer worked harder, ate worse, and lived more precariously than the average forager. Wheat didn't serve humans; humans served wheat.</p>

<h3>The Unifying Forces</h3>
<p>Three forces gradually united humanity into a single global civilization: money (a universal system of trust), empires (which spread cultures and technologies despite their violence), and universal religions (which provided moral frameworks across tribal lines). Each overcame the biological limits of tribal cooperation by creating intersubjective realities — things that exist because people collectively believe in them.</p>

<h3>The Scientific Revolution</h3>
<p>The scientific revolution was driven by a startling admission: acknowledging ignorance. European powers that embraced empiricism, exploration, and the willingness to say "we don't know" rapidly outpaced civilizations that believed their sacred texts contained all necessary knowledge. Science combined with capitalism and imperialism fueled unprecedented expansion — for better and worse.</p>

<h3>Key Takeaway</h3>
<p>The most important things in human civilization — laws, economies, nations, corporations — exist only because enough people believe in them. Understanding the fictional nature of our social constructs gives us both humility about current arrangements and freedom to reimagine them.</p>`
  },
  {
    id: 6,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    rating: 4.6,
    pages: 336,
    year: 2011,
    featured: false,
    coverColor: ["#0575E6", "#021B79"],
    isbn: "0307887898",
    description: "How today's entrepreneurs use continuous innovation to create radically successful businesses — a methodology for launching under conditions of extreme uncertainty.",
    summary: `<h3>The Problem with Traditional Startups</h3>
<p>Eric Ries observed that many startups follow a "just do it" philosophy — build a product in secret, launch with fanfare, then fail because nobody wants it. Traditional management techniques, optimized for known markets with predictable outcomes, are poorly suited to startups navigating extreme uncertainty. A new methodology was needed.</p>

<h3>Build-Measure-Learn</h3>
<p>The Lean Startup methodology centers on a feedback loop: <strong>Build</strong> a minimum viable product (MVP), <strong>Measure</strong> its impact with real customers, and <strong>Learn</strong> whether to persevere or pivot. The goal is to minimize the total time through this loop. Every product decision should be framed as an experiment designed to test a hypothesis about customer behavior.</p>

<h3>The Minimum Viable Product</h3>
<p>An MVP is not a stripped-down version of your dream product — it's the fastest way to begin learning. It can be a landing page, a manual service, or a simple prototype. The purpose is to test fundamental assumptions before investing heavily in features that customers may not want. Dropbox launched with a demo video, not a product, and validated demand before writing a line of backend code.</p>

<h3>Pivot or Persevere</h3>
<p>The hardest decision for any startup team is whether disappointing metrics mean you should change direction (pivot) or stay the course (persevere). Ries outlines several types of pivots: customer segment pivot, platform pivot, business architecture pivot, and zoom-in pivot. The key is making this decision based on validated learning, not intuition or sunk cost.</p>

<h3>Key Takeaway</h3>
<p>Start with the smallest possible experiment, learn fast, and iterate. The goal is not to build the best product — it's to discover what product is worth building. Speed of learning is the ultimate competitive advantage for any new venture.</p>`
  },
  {
    id: 7,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "Psychology",
    rating: 4.9,
    pages: 200,
    year: 1946,
    featured: false,
    coverColor: ["#6a3093", "#a044ff"],
    isbn: "0807014273",
    description: "A psychiatrist's account of surviving Nazi concentration camps, and the psychological framework — logotherapy — he developed from that experience.",
    summary: `<h3>Surviving the Unimaginable</h3>
<p>Viktor Frankl, a Viennese psychiatrist, spent three years in Nazi concentration camps including Auschwitz. Unlike most Holocaust memoirs, this book is less about the horror of the camps and more about the inner psychological life that either sustained or destroyed prisoners. Frankl observed that those who survived longest were not necessarily the physically strongest — they were those who found a reason to live.</p>

<h3>The Last Human Freedom</h3>
<p>"Everything can be taken from a man but one thing: the last of the human freedoms — to choose one's attitude in any given set of circumstances." This single insight is the philosophical core of the book. Between stimulus and response, there is always a space — and in that space lies our power and our freedom. Oppressors can control circumstances; they cannot control meaning.</p>

<h3>Logotherapy</h3>
<p>Frankl's therapeutic framework — logotherapy — holds that the primary human drive is not pleasure (Freud) or power (Adler) but the pursuit of meaning. When people find a compelling "why" to live, they can endure almost any "how." The three main sources of meaning are: creating work or doing a deed, experiencing something or encountering someone, and choosing one's attitude toward unavoidable suffering.</p>

<h3>The Existential Vacuum</h3>
<p>Frankl's post-war observation was equally important: modernity creates an "existential vacuum" — a widespread feeling of meaninglessness. Boredom, cynicism, and depression flourish not from too much suffering but from too little meaning. The pursuit of happiness as a goal is self-defeating; happiness is a byproduct of living a meaningful life.</p>

<h3>Key Takeaway</h3>
<p>Meaning is not found — it is created. In every situation, including the most brutal, we retain the freedom to assign meaning to our experience. That freedom, once recognized, is indestructible.</p>`
  },
  {
    id: 8,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Spirituality",
    rating: 4.7,
    pages: 229,
    year: 1997,
    featured: false,
    coverColor: ["#f093fb", "#f5576c"],
    isbn: "1577314808",
    description: "A guide to spiritual enlightenment that teaches how living fully in the present moment is the path to peace, freedom, and authentic joy.",
    summary: `<h3>The Mind as Obstacle</h3>
<p>Eckhart Tolle's central argument is that most human suffering is self-created through the compulsive activity of the mind — specifically, its tendency to dwell on the past (producing guilt and regret) or project into the future (producing anxiety and fear). The mind is not who you are; it is a tool that most people have allowed to run unchecked, generating an incessant stream of thought that masquerades as identity.</p>

<h3>The Present Moment as Portal</h3>
<p>The "Now" is the only moment in which life actually happens. Past and future exist only as mental constructs — the past is memory, the future is imagination, and both are experienced only in the present. Tolle argues that full presence — complete attention to what is happening right now — dissolves psychological pain and reveals a state of inner peace that is always available, regardless of external circumstances.</p>

<h3>The Pain Body</h3>
<p>Tolle introduces the concept of the "pain body" — an accumulated residue of emotional pain that lives in the body and periodically becomes activated, feeding on negativity and conflict. By observing the pain body with non-judgmental awareness rather than being consumed by it, its hold weakens. Presence is the antidote to pain body activation.</p>

<h3>Acceptance and Surrender</h3>
<p>Acceptance does not mean passivity — it means not creating inner resistance to what is. "What you resist persists; what you accept transforms." Surrendering to the present moment doesn't mean you stop taking action; it means you act from a place of clarity rather than reactivity. The quality of action taken from a state of presence is fundamentally different from action driven by anxiety.</p>

<h3>Key Takeaway</h3>
<p>You are not your thoughts. By learning to observe the mind rather than identify with it, you access a deeper dimension of consciousness — peaceful, spacious, and present — that is your true nature.</p>`
  },
  {
    id: 9,
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    rating: 4.7,
    pages: 224,
    year: 2014,
    featured: true,
    coverColor: ["#00c6ff", "#0072ff"],
    isbn: "0804139296",
    description: "Notes on startups, or how to build the future. Thiel argues that true innovation means creating something genuinely new — going from zero to one, not from one to many.",
    summary: `<h3>The Contrarian Question</h3>
<p>Peter Thiel opens with his famous interview question: "What important truth do few people agree with you on?" Great companies are built on contrarian insights — things that are true but widely disbelieved. The best businesses are built not by copying existing models (going from 1 to n) but by creating something genuinely new (going from 0 to 1). Vertical progress is harder and rarer than horizontal progress, but its value is orders of magnitude greater.</p>

<h3>Competition Is for Losers</h3>
<p>Thiel makes a provocative argument: competition destroys value. In perfectly competitive markets, no firm makes economic profit. The businesses that create and capture lasting value are monopolies — not through illegal coercion, but through creating something so good that no reasonable substitute exists. Google's search monopoly, for example, allowed it to invest in moonshots that competitive businesses never could.</p>

<h3>Building a Monopoly</h3>
<p>Successful monopolies are built through a combination of proprietary technology (10x better than the alternative), network effects (more users = more value), economies of scale, and strong branding. Critically, monopolies should begin with a small, dominated market — then systematically expand. Amazon dominated online book sales before tackling all retail. Don't try to disrupt a large market; capture a small one first.</p>

<h3>The Founder's Paradox</h3>
<p>Founders of legendary companies often share a paradoxical mix of traits: simultaneously insider and outsider, ordinary and extraordinary, pragmatic and visionary. Thiel argues we should be skeptical of the "wisdom of crowds" — great leaps forward in any field tend to come from singular, obsessed individuals willing to act on convictions others find insane.</p>

<h3>Key Takeaway</h3>
<p>The best businesses start by asking "what valuable company is nobody building?" — then going and building it. Think for yourself, seek genuine secrets about how the world works, and build something that doesn't yet exist.</p>`
  },
  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Self-Help",
    rating: 4.6,
    pages: 224,
    year: 2016,
    featured: false,
    coverColor: ["#ff416c", "#ff4b2b"],
    isbn: "0062457713",
    description: "A counterintuitive approach to living a good life — not by chasing positivity, but by choosing what truly deserves your energy and attention.",
    summary: `<h3>The Feedback Loop from Hell</h3>
<p>Mark Manson argues that modern culture's obsession with positivity makes people feel worse, not better. The more you chase feeling good all the time, the more anxious you become when you don't feel good. This creates a "feedback loop from hell" — feeling bad about feeling bad. The solution isn't to seek more positive experiences but to get better at handling negative ones.</p>

<h3>The Backwards Law</h3>
<p>Borrowing from philosopher Alan Watts, Manson presents the Backwards Law: the more you pursue something, the more you signal to yourself that you lack it. The desire for more positive experience is itself a negative experience; the acceptance of negative experience is itself a positive experience. This counterintuitive insight underpins the entire book.</p>

<h3>Choose Your Problems Wisely</h3>
<p>We all have problems. The question is which problems are worth having. Happiness is not the absence of problems — it's finding problems worth solving. The key is choosing your "f*cks" carefully: invest your energy in things aligned with your core values, not in things you pursue because of social comparison, fear, or others' expectations.</p>

<h3>You Are Always Choosing</h3>
<p>Even in circumstances beyond our control, we always choose how to respond. Manson distinguishes between fault and responsibility: it may not be your fault that you were dealt a bad hand, but it is absolutely your responsibility how you play it. Accepting total responsibility — even for things that weren't your fault — is the most empowering stance available.</p>

<h3>Key Takeaway</h3>
<p>The good life is not about having everything go right. It's about developing the courage to face your problems honestly, embrace discomfort, choose your values deliberately, and invest your limited attention in things that genuinely matter to you.</p>`
  },
  {
    id: 11,
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    category: "Science",
    rating: 4.7,
    pages: 240,
    year: 2008,
    featured: false,
    coverColor: ["#1a9850", "#66bd63"],
    isbn: "1603580557",
    description: "A primer on systems thinking — understanding why the world behaves the way it does, and how to intervene effectively in complex systems.",
    summary: `<h3>What Is a System?</h3>
<p>A system is a set of elements interconnected in ways that produce behavior over time. Systems are everywhere: ecosystems, economies, organizations, families, your body. Donella Meadows argues that most of the world's most intractable problems — poverty, pollution, war, inequality — arise from the structure of the systems in which they're embedded, not from isolated bad actors or unlucky events.</p>

<h3>Stocks, Flows, and Feedback</h3>
<p>Every system contains stocks (accumulated quantities, like water in a bathtub or money in a bank), flows (rates of change that fill or drain stocks), and feedback loops. <strong>Reinforcing feedback loops</strong> amplify change — population growth, compound interest, viral spread. <strong>Balancing feedback loops</strong> resist change and maintain stability — a thermostat, predator-prey cycles, supply and demand. Understanding which loops dominate explains a system's behavior.</p>

<h3>Why Systems Surprise Us</h3>
<p>Systems consistently confuse human intuition because of delays, nonlinearity, and the gap between events and their causes. We see symptoms without their sources, solutions that create new problems, and policies that work in the short term while undermining the long term. "Policy resistance" — the tendency of systems to frustrate intervention — is a fundamental property, not an exception.</p>

<h3>Leverage Points</h3>
<p>Meadows identifies places within a system where small changes can produce big shifts. Counterintuitively, the most obvious leverage points (numbers, parameters) are among the least powerful. The most powerful leverage points are: changing the goal of the system, changing the rules, and most powerfully — changing the paradigm, or shared beliefs, out of which the system arises.</p>

<h3>Key Takeaway</h3>
<p>Before trying to fix a problem, understand the system producing it. The most effective interventions are rarely the most obvious ones — they target the structural causes rather than the symptomatic events.</p>`
  },
  {
    id: 12,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    category: "Philosophy",
    rating: 4.5,
    pages: 480,
    year: 1998,
    featured: false,
    coverColor: ["#2c3e50", "#4ca1af"],
    isbn: "0140280197",
    description: "Three thousand years of history distilled into 48 laws — a candid, often disturbing manual for understanding the dynamics of power in human relationships.",
    summary: `<h3>Power Is Amoral</h3>
<p>Robert Greene opens by asserting that power is a constant in human interaction — the only question is whether you understand it or not. The 48 Laws are drawn from the historical strategies of figures like Machiavelli, Sun Tzu, Queen Elizabeth I, and P.T. Barnum. Greene presents them without moral judgment: these are observations about how power actually works, not prescriptions for how it should work.</p>

<h3>Key Laws</h3>
<p><strong>Law 1: Never outshine the master.</strong> Make those above you feel comfortably superior. <strong>Law 3: Conceal your intentions.</strong> People will work to stop you if they know your plans. <strong>Law 6: Court attention at all costs.</strong> Obscurity is a social death; stand out. <strong>Law 15: Crush your enemy totally.</strong> Half-measures create enemies who return stronger. Each law is illustrated with vivid historical stories of those who applied it and those who violated it.</p>

<h3>The Court Dynamic</h3>
<p>Greene argues that human organizations — from medieval courts to modern corporations — operate on surprisingly similar political dynamics. Appearances matter as much as reality, alliances shift based on self-interest, and those who ignore politics inevitably become victims of it. Understanding power dynamics is not optional for those who wish to maintain autonomy and influence.</p>

<h3>Defense as Well as Offense</h3>
<p>Many of the laws serve a defensive purpose: recognizing when others are using power tactics against you. Knowing that people conceal intentions, manufacture dependence, or use selective honesty allows you to see these moves for what they are and respond with clarity rather than naivety.</p>

<h3>Key Takeaway</h3>
<p>Whether you choose to use these laws or reject them, understanding them is essential. Power dynamics are omnipresent — and those who pretend otherwise are simply more vulnerable to manipulation by those who do not.</p>`
  },
  {
    id: 13,
    title: "Dune",
    author: "Frank Herbert",
    category: "Fiction",
    rating: 4.9,
    pages: 412,
    year: 1965,
    featured: true,
    coverColor: ["#f7971e", "#ffd200"],
    isbn: "0441013597",
    description: "On the desert planet Arrakis, young Paul Atreides discovers his destiny amid political intrigue, ecological struggle, and the most valuable substance in the universe.",
    summary: `<h3>A World of Sand and Power</h3>
<p>Set far in the future when humanity has spread across the galaxy, <em>Dune</em> centers on Arrakis — a harsh desert planet that is the sole source of "spice melange," a substance that extends life, enhances perception, and enables interstellar navigation. Control of Arrakis means control of the known universe, making it the most coveted and contested world in existence.</p>

<h3>House Atreides</h3>
<p>Duke Leto Atreides accepts stewardship of Arrakis — a political trap engineered by the Harkonnens and the Emperor. His son Paul, trained by a Bene Gesserit mother and a weaponsmaster, arrives on a world that will test and transform him. Paul begins experiencing prescient visions, suggesting he may be the Kwisatz Haderach — a messianic figure generations in the making.</p>

<h3>Ecology as Politics</h3>
<p>Herbert weaves ecological thinking throughout the narrative. The Fremen — indigenous people of Arrakis — have spent generations working toward a single dream: transforming their desert world into a green paradise. Their ecological project parallels the political transformation Paul brings. The planet's sandworms, producers of the spice, are integral to a carefully balanced ecosystem that determines everyone's fate.</p>

<h3>Themes of Prophecy and Danger</h3>
<p>Herbert wrote <em>Dune</em> as a warning about charismatic leadership and the dangers of messianic figures. Paul Atreides achieves everything a hero is supposed to — and the reader senses throughout that this is precisely the problem. Power concentrated in one visionary individual, however noble, carries the seeds of catastrophe.</p>

<h3>Key Takeaway</h3>
<p><em>Dune</em> is simultaneously a gripping adventure and a meditation on ecology, religion, politics, and the dangerous seduction of power. It remains the bestselling science fiction novel of all time for good reason.</p>`
  },
  {
    id: 14,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    rating: 4.9,
    pages: 328,
    year: 1949,
    featured: false,
    coverColor: ["#232526", "#414345"],
    isbn: "0451524934",
    description: "Winston Smith struggles to maintain his humanity in a totalitarian society where the Party controls all aspects of life — including history, language, and thought itself.",
    summary: `<h3>Oceania and the Party</h3>
<p>George Orwell's dystopian masterpiece imagines a world of three superstates locked in perpetual warfare, where Oceania is ruled by a totalitarian party led by the enigmatic figure of Big Brother. The Party's power rests not merely on surveillance and force, but on something far more insidious: the systematic destruction of objective reality through the manipulation of language and history.</p>

<h3>Winston's Rebellion</h3>
<p>Winston Smith, a minor Party functionary, secretly despises the regime. He begins keeping a diary — an act punishable by death — and enters a forbidden relationship with Julia. Their rebellion is intimate and personal before it is political, driven by the elemental desire to be human in a system designed to erase humanity. Their romance is both tender and doomed.</p>

<h3>Newspeak and Doublethink</h3>
<p>The Party's most chilling innovation is linguistic: Newspeak, a language engineered to make thoughtcrime literally impossible by eliminating the words needed to express unorthodox ideas. Doublethink — the ability to hold two contradictory beliefs simultaneously — is the cognitive foundation of Party loyalty. "War is Peace. Freedom is Slavery. Ignorance is Strength."</p>

<h3>Room 101</h3>
<p>The novel's final third descends into a harrowing portrait of psychological destruction. O'Brien, the Inner Party official Winston trusted, reveals that the Party's goal is not utility or stability but power for its own sake — pure, unadulterated domination. "If you want a picture of the future, imagine a boot stamping on a human face — forever."</p>

<h3>Key Takeaway</h3>
<p>Orwell's warning is both timeless and urgent: freedom begins with language, truth, and the refusal to accept that two plus two equals five simply because power demands it. The struggle for reality is the most fundamental political struggle there is.</p>`
  },
  {
    id: 15,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    rating: 4.8,
    pages: 212,
    year: 1988,
    featured: false,
    coverColor: ["#4facfe", "#00f2fe"],
    isbn: "0553380168",
    description: "One of the most celebrated science books ever written — Hawking's accessible tour of cosmology, from the Big Bang to black holes to the nature of time itself.",
    summary: `<h3>The Universe's Origin Story</h3>
<p>Stephen Hawking begins at the beginning: the Big Bang, the moment roughly 13.8 billion years ago when all matter, energy, space, and time sprang into existence from a state of infinite density. The question "what happened before the Big Bang?" is meaningless, Hawking argues — time itself began at the Big Bang. There was no "before."</p>

<h3>The Nature of Time</h3>
<p>Time's "arrow" — the fact that it moves forward rather than backward — is one of the deepest puzzles in physics. The second law of thermodynamics (entropy always increases) gives time its direction; but at the quantum level, fundamental laws are symmetric with respect to time. Hawking's discussion of imaginary time — a mathematical tool that makes time behave like a spatial dimension — offers a provocative model for avoiding the singularity problem.</p>

<h3>Black Holes</h3>
<p>Hawking's most famous contribution to physics is Hawking radiation: the theoretical prediction that black holes slowly emit thermal radiation due to quantum effects near the event horizon, and will eventually evaporate entirely. This discovery elegantly bridges quantum mechanics and general relativity — the two pillars of modern physics that otherwise refuse to cooperate — and has profound implications for information theory and the fate of the universe.</p>

<h3>The Search for a Unified Theory</h3>
<p>Hawking's ultimate dream — and the dream of theoretical physics broadly — is a "Theory of Everything": a single framework unifying quantum mechanics, general relativity, and the other fundamental forces. He believed such a theory was within reach, and that it would not merely describe the universe but explain why the universe exists at all.</p>

<h3>Key Takeaway</h3>
<p>The cosmos operates on principles both deeply strange and rigorously logical. Understanding the universe's fundamental rules — even partially — transforms our sense of scale, time, and our place in an almost incomprehensibly vast cosmos.</p>`
  },
  {
    id: 16,
    title: "Educated",
    author: "Tara Westover",
    category: "Memoir",
    rating: 4.8,
    pages: 334,
    year: 2018,
    featured: false,
    coverColor: ["#43e97b", "#38f9d7"],
    isbn: "0399590501",
    description: "A memoir of a young woman who grew up with no formal education in a survivalist family in the Idaho mountains, and her journey to Cambridge and Oxford.",
    summary: `<h3>A Childhood Without School</h3>
<p>Tara Westover grew up in a survivalist Mormon family in the mountains of Idaho, the youngest of seven children. Her father, convinced the government and public education were instruments of corruption, kept his children out of school entirely. Tara had no birth certificate, never saw a doctor, and spent her childhood working in the family junkyard and preparing for "the Days of Abomination."</p>

<h3>Violence and Silence</h3>
<p>One of her brothers was dangerously abusive — physically and psychologically — and the family's response was silence and denial. The book's central psychological drama is the tension between the story Westover was taught to believe about her family and the reality she slowly, painfully acknowledged. Memory itself becomes unreliable when the people who shaped your earliest experiences insist on a different version of events.</p>

<h3>The Power of Education</h3>
<p>Largely self-taught, Westover eventually passed the ACT and enrolled at Brigham Young University. The experience was disorienting — she had never heard of the Holocaust, had no concept of what contemporary scholars meant by "race" or "gender," and had to learn basic facts that other students had absorbed in grade school. Yet her mind, unencumbered by years of conventional schooling, proved formidably capable.</p>

<h3>Cambridge and the Rupture</h3>
<p>After winning a Gates Cambridge Scholarship and earning a PhD in history from Cambridge University, Westover faced the ultimate cost of her education: a complete rupture with most of her family. Education had given her the tools to see her past clearly — and that clarity was incompatible with the family's myths. She chose truth over belonging.</p>

<h3>Key Takeaway</h3>
<p>Education is not merely the acquisition of knowledge — it is the development of the capacity to question, to revise, and ultimately to determine one's own identity. Westover's story is a testament to both the violence that can lurk within families and the transformative, irreversible power of learning to think for yourself.</p>`
  },
  {
    id: 17,
    title: "The Art of War",
    author: "Sun Tzu",
    category: "Philosophy",
    rating: 4.7,
    pages: 112,
    year: 500,
    featured: false,
    coverColor: ["#b71c1c", "#e53935"],
    isbn: "1590302255",
    description: "Written 2,500 years ago, this ancient Chinese military treatise contains timeless principles of strategy, leadership, and conflict resolution applicable far beyond warfare.",
    summary: `<h3>Know Yourself and Your Enemy</h3>
<p>Sun Tzu's most quoted maxim frames the book's fundamental logic: "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle." Self-knowledge and intelligence about opposition are the twin foundations of strategic success.</p>

<h3>Win Without Fighting</h3>
<p>The supreme art of war is to subdue the enemy without fighting. The highest form of generalship is not winning a hundred battles — it is breaking the enemy's resistance without open conflict. Strategies of deception, psychological pressure, and positioning can achieve objectives without the costs and risks of direct confrontation. Victory should be achieved through strategic superiority, not brute force.</p>

<h3>Adaptability and Terrain</h3>
<p>Sun Tzu devotes extensive attention to terrain — the physical environment in which battles occur — as a metaphor for context. The effective strategist adapts to circumstances rather than imposing a rigid plan. "In war, there are not more than two methods of attack — the direct and the indirect; yet these two in combination give rise to an endless series of maneuvers." Rigidity is the enemy of success.</p>

<h3>Leadership and Discipline</h3>
<p>A general must be simultaneously benevolent and strict, unpredictable to the enemy but trustworthy to his troops. Discipline must flow from understanding, not mere fear. The great leader rewards merit, punishes failure consistently, and maintains strategic ambiguity — appearing where unexpected and acting in ways the enemy cannot anticipate.</p>

<h3>Key Takeaway</h3>
<p>Strategy is the art of achieving objectives by understanding, positioning, and adapting rather than overpowering. Sun Tzu's principles have survived 2,500 years because they describe something permanent about conflict, competition, and human nature.</p>`
  },
  {
    id: 18,
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    category: "Psychology",
    rating: 4.6,
    pages: 384,
    year: 1995,
    featured: false,
    coverColor: ["#e040fb", "#7b1fa2"],
    isbn: "055338371X",
    description: "Why emotional intelligence — the ability to understand and manage emotions — may matter more than IQ in determining success in life and work.",
    summary: `<h3>Beyond IQ</h3>
<p>When Daniel Goleman published this book in 1995, it landed as a provocation: IQ and technical skill alone do not determine success in life or work. Studies of top performers consistently showed that emotional competencies — self-awareness, self-regulation, motivation, empathy, social skills — distinguished the best from the merely competent. Goleman named this cluster of capabilities "Emotional Intelligence" and launched a global conversation.</p>

<h3>The Architecture of Emotion</h3>
<p>The brain's emotional circuitry evolved long before the rational prefrontal cortex. The amygdala — the brain's alarm system — can hijack rational thought in moments of perceived threat, producing what Goleman calls an "amygdala hijack." Understanding this biology helps explain why intelligent people sometimes act in ways that undermine their interests, and why emotional regulation is a learnable skill, not just a personality trait.</p>

<h3>The Five Domains</h3>
<p>Goleman outlines five core dimensions: <strong>Self-awareness</strong> (knowing your emotions as they arise), <strong>Self-regulation</strong> (managing disruptive emotions and impulses), <strong>Motivation</strong> (channeling emotions toward achieving goals), <strong>Empathy</strong> (recognizing emotions in others), and <strong>Social skills</strong> (managing relationships effectively). Each domain builds on the previous one.</p>

<h3>Emotional Intelligence at Work</h3>
<p>In the workplace, Goleman finds that emotional intelligence becomes more important than IQ as people rise through organizations. Technical skills are threshold competencies — you need them to get in the door, but they don't differentiate stars from average performers. At the leadership level, emotional competencies account for the majority of what distinguishes outstanding leaders.</p>

<h3>Key Takeaway</h3>
<p>Emotions are data, not noise. Learning to read, manage, and leverage emotional information — in yourself and others — is a trainable skill that may do more for your success and wellbeing than any technical expertise you could acquire.</p>`
  },
  {
    id: 19,
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    category: "Business",
    rating: 4.6,
    pages: 288,
    year: 1997,
    featured: false,
    coverColor: ["#1565c0", "#42a5f5"],
    isbn: "0062060244",
    description: "Why successful, well-managed companies consistently fail when confronted with disruptive innovations — and what to do about it.",
    summary: `<h3>Why Good Management Can Lead to Failure</h3>
<p>Clayton Christensen's central paradox is one of the most unsettling in business: companies that fail to adapt to disruptive change often do so not because of bad management, but because of good management. By listening to their best customers, investing in the highest-margin products, and optimizing their core operations, these companies rationally optimize themselves out of existence when disruptive technologies emerge.</p>

<h3>Sustaining vs. Disruptive Innovation</h3>
<p><strong>Sustaining innovations</strong> improve existing products for existing customers — they are what most R&D produces and what most organizations reward. <strong>Disruptive innovations</strong> start by targeting segments that mainstream companies ignore (too small, too low-margin), offering inferior products by mainstream metrics but superior on dimensions those customers actually value. Over time, disruptive innovations improve and eventually displace the incumbent.</p>

<h3>The Disk Drive Industry</h3>
<p>Christensen's foundational case study is the disk drive industry, where successive generations of drives — 14-inch, 8-inch, 5.25-inch, 3.5-inch — disrupted their predecessors every decade. In each case, the dominant incumbent company continued serving its best customers with improving products while failing to commercialize the next generation, which initially appealed only to niche markets they considered beneath them.</p>

<h3>What Incumbents Should Do</h3>
<p>The organizational response Christensen recommends is creating a separate, autonomous unit to pursue disruptive opportunities — insulated from the resource allocation processes of the parent company that would otherwise starve the initiative. This is harder than it sounds; the business case for disruption is never compelling early, and internal political dynamics typically kill these efforts before they mature.</p>

<h3>Key Takeaway</h3>
<p>The forces that make an incumbent great also make it vulnerable to disruption. Survival requires watching the low end of the market, resisting the tyranny of existing customers, and creating organizational structures that can nurture fragile new business models alongside the core.</p>`
  },
  {
    id: 20,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    rating: 4.8,
    pages: 197,
    year: 1988,
    featured: true,
    coverColor: ["#f9a825", "#ff6f00"],
    isbn: "0062315007",
    description: "A young Andalusian shepherd embarks on a journey to find treasure near the Egyptian pyramids, discovering along the way that the real treasure lies within.",
    summary: `<h3>The Personal Legend</h3>
<p>Paulo Coelho's beloved fable opens with Santiago, an Andalusian shepherd who dreams of discovering treasure near the Egyptian pyramids. After consulting with a Gypsy woman and the mysterious Melchizedek — who reveals himself as the King of Salem — Santiago decides to follow his "Personal Legend," Coelho's term for the unique dream that every soul comes into the world with the calling to fulfill.</p>

<h3>The Language of the World</h3>
<p>As Santiago travels across the Sahara and encounters alchemists, merchants, oasis dwellers, and warriors, he learns to read "the Soul of the World" — the idea that everything in the universe is connected through an invisible force that speaks through omens, coincidences, and the language of the heart. The universe, Coelho suggests, conspires to help those who genuinely pursue their dreams.</p>

<h3>The Alchemist's Lessons</h3>
<p>The Alchemist himself, whom Santiago encounters in the desert, teaches the most advanced lessons. To transform lead into gold — the alchemist's literal goal — one must first understand that all things are one expression of the same divine reality. The journey outward mirrors a journey inward; mastery of the physical world reflects mastery of the self.</p>

<h3>The Treasure's True Location</h3>
<p>The book's famous twist — often called one of literature's most satisfying resolutions — reveals that Santiago's treasure was always near his starting point. But had he not made the entire journey, he would never have received the wisdom to recognize it. The journey was the point; the transformation was the treasure.</p>

<h3>Key Takeaway</h3>
<p>"When you want something, all the universe conspires in helping you to achieve it." The Alchemist is an argument that the pursuit of your deepest desire is not selfish — it is your unique contribution to the Soul of the World, and the path to it is always available if you listen.</p>`
  }
];

const CATEGORIES = ['All', 'Self-Help', 'Finance', 'Productivity', 'Psychology', 'History', 'Business', 'Spirituality', 'Science', 'Philosophy', 'Fiction', 'Memoir'];
