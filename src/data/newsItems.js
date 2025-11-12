const newsItems = [

    {
        date: "29 June 2025",
        title: "HR tech and the rise of personalised careers: Opportunities and ethical challenges",
        image: "https://th-i.thgim.com/public/incoming/xtf1o0/article70029267.ece/alternates/LANDSCAPE_1200/iStock-1369175697.jpg",
        tags: ["Technology", "Careers", "Human Resources"],
        url: "https://www.thehindu.com/education/hr-tech-and-the-rise-of-personalised-careers-opportunities-and-ethical-challenges/article70029271.ece"
    },
    {
        date: "5 September 2025",
        title: "Explained: New GST Rates And What They Mean For Travel In India",
        image: "https://media.assettype.com/outlooktraveller%2F2024-06%2F529c61a6-956a-4351-ad57-c56df1db777e%2FOutbound_travellers.jpg?rect=0%2C0%2C4075%2C2292&w=1024&auto=format%2Ccompress&fit=max",
        tags: ["Travel", "Finance", "GST"],
        url: "https://www.outlooktraveller.com/News/explained-new-gst-rates-and-what-they-mean-for-travel-in-india"
    },
    {
        date: "31 August 2025",
        title: "Combat monsoon hair fall with Ayurvedic hair care",
        image: "https://static.toiimg.com/thumb/msid-123618405,width-1070,height-580,imgsize-52256,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/123618405.jpg",
        tags: ["Health", "Ayurveda", "Lifestyle"],
        url: "https://timesofindia.indiatimes.com/life-style/beauty/combat-monsoon-hair-fall-with-ayurvedic-hair-care/articleshow/123618405.cms"
    },
    {
        date: "27 January 2025",
        title: "Users will soon be able to send money globally via post offices using UPI",
        image: "https://images.cnbctv18.com/uploads/2025/08/digital-payments-upi-2025-08-6e97696aafcd5ee8b8fb662fe86f6441.jpg?impolicy=website&width=640&height=360",
        tags: ["Finance", "Technology", "UPI"],
        url: "https://www.cnbctv18.com/personal-finance/users-will-soon-be-able-to-send-money-globally-via-post-offices-using-upi-upu-19667253.htm"
    },
    {
        date: "30 August 2025",
        title: "Navya Naveli Nanda recalls her dadi gifting her life insurance for Christmas",
        image: "https://images.indianexpress.com/2025/08/navya.jpg?w=640",
        tags: ["Lifestyle", "Finance", "Insurance"],
        url: "https://indianexpress.com/article/lifestyle/navya-nanda-gift-life-insurance-for-christmas-10190979/"
    },
    {
        date: "1 September 2025",
        title: "Protein in one meal, fibre in the other: Why then did this 32-year-old not lose weight?",
        image: "https://images.indianexpress.com/2025/09/sept1.jpg?w=640",
        tags: ["Health", "Diet", "Wellness"],
        url: "https://indianexpress.com/article/health-wellness/protein-one-meal-fibre-weight-loss-meal-plans-diet-10223120/"
    },
    {
        date: "1 September 2025",
        title: "Davaindia rolls out e-commerce services in Jaipur",
        image: "https://etimg.etb2bimg.com/thumb/msid-123623937,imgsize-32712,width-1200,height-628,overlay-etpharma/davaindia-rolls-out-e-commerce-services-in-jaipur.jpg",
        tags: ["Business", "E-commerce", "Pharmaceuticals"],
        url: "https://pharma.economictimes.indiatimes.com/news/pharma-industry/davaindia-rolls-out-e-commerce-services-in-jaipur/123623937"
    },
    {
        date: "2 September 2025",
        title: "Ransomware surge and rising cyber threats put Asia, India on high alert: Cyble report",
        image: "https://etimg.etb2bimg.com/thumb/msid-123646885,imgsize-46986,width-1200,height-628,overlay-etciso/ransomware-surge-and-rising-cyber-threats-put-asia-india-on-high-alert-cyble-report.jpg",
        tags: ["Cybersecurity", "Technology", "Business"],
        url: "https://ciso.economictimes.indiatimes.com/news/cybercrime-fraud/ransomware-surge-and-rising-cyber-threats-put-asia-india-on-high-alert-cyble-report/123646885"
    },
    {
        date: "1 July 2025",
        title: "Multiple entry-exit system in schools: Disruptive or inclusive?",
        image: "https://th-i.thgim.com/public/incoming/yyteqf/article69934335.ece/alternates/LANDSCAPE_1200/iStock-1347249753.jpg",
        tags: ["Education", "Policy"],
        url: "https://www.thehindu.com/education/multiple-entry-exit-system-in-schools-disruptive-or-inclusive/article69934329.ece"
    },
    {
        date: "14 September 2025",
        title: "Saving The Peaks: Smart Tourism Solutions To Protect Our Mountains",
        image: "https://static.businessworld.in/Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Slider%20for%20website%20Final.ai%20(7)_20250818125124_original_image_22.webp",
        tags: ["Travel", "Environment", "Technology"],
        url: "https://www.bwhotelier.com/article/saving-the-peaks-smart-tourism-solutions-to-protect-our-mountains-567746"
    },
    {
        date: "21 August 2025",
        title: "HDFC Bank invests in BharatGPT creator CoRover",
        image: "https://etimg.etb2bimg.com/thumb/msid-123395141,imgsize-26524,width-1200,height-628,overlay-etcio/hdfc-bank-invests-in-bharatgpt-creator-corover.jpg",
        tags: ["Finance", "Technology", "AI"],
        url: "https://m.economictimes.com/tech/artificial-intelligence/hdfc-bank-invests-in-bharatgpt-creator-corover/amp_articleshow/123395141.cms"
    },
    {
        date: "21 August 2025",
        title: "HDFC Bank Invests in CoRover to Propel India's AI Landscape with BharatGPT",
        image: "https://etimg.etb2bimg.com/thumb/msid-123403316,imgsize-26524,width-1200,height-628,overlay-etcio/hdfc-bank-invests-in-corover-to-propel-indias-ai-landscape-with-bharatgpt.jpg",
        tags: ["Finance", "Technology", "AI"],
        url: "https://cio.economictimes.indiatimes.com/amp/news/investments/hdfc-bank-invests-in-corover-to-propel-indias-ai-landscape-with-bharatgpt/123403316"
    },
    {
        date: "24 August 2025",
        title: "Fixing India's cyber skills gap with AI",
        image: "https://images.yourstory.com/cs/2/f02aced0d86311e98e0865c1f0fe59a2/cybersecurity-1627497213478.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
        tags: ["Technology", "AI", "Cybersecurity"],
        url: "https://yourstory.com/ai-story/fixing-indias-cyber-skills-gap-with-ai"
    },
    {
        date: "25 August 2025",
        title: "Switching jobs? How it can make or break your personal loan approval",
        image: "https://www.livemint.com/lm-img/img/2025/08/25/600x338/magic_of_compounding_1742038303693_1756102789480.jpg",
        tags: ["Finance", "Careers", "Personal Finance"],
        url: "https://www.livemint.com/money/personal-finance/switching-jobs-how-it-can-make-or-break-your-personal-loan-approval-credit-score-11756102691198.html"
    },
    {
        date: "24 August 2025",
        title: "Festive hiring 2025 sees surge in gig jobs, e-commerce, and Tier II cities",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202508/festive-hiring-2025-sees-surge-in-gig-jobs--e-commerce--and-tier-ii-cities-2451340-16x9_0.png?VersionId=WUf.yOJlzoQ5nuGBi4ve4BMvb_RgKuAU&size=690:388",
        tags: ["Business", "E-commerce", "Jobs"],
        url: "https://www.indiatoday.in/education-today/featurephilia/story/festive-hiring-2025-sees-surge-in-gig-jobs-e-commerce-and-tier-ii-cities-2776006-2025-08-24"
    },
    {
        date: "3 July 2025",
        title: "5 smarter ways kids can cut screen time and build real-life skills",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202507/5-smarter-ways-kids-can-cut-screen-time-and-build-real-life-skills-031643909-16x9_0.png?VersionId=Re1IIm68OXm9mL5fF2nhK2q0C1OQ9Oe4&size=690:388",
        tags: ["Industry Press", "Wins", "Awards"],
        url: "https://www.indiatoday.in/education-today/featurephilia/story/how-kids-can-grow-beyond-gadgets-with-five-offline-summer-habits-2750094-2025-07-03"
    },
    {
        date: "2 July 2025",
        title: "Cold or sinusitis? Key symptoms to watch for",
        image: "https://static.toiimg.com/thumb/msid-122205784,imgsize-453691,width-400,resizemode-4/122205784.jpg",
        tags: ["Industry Press", "Work", "Wins"],
        url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/cold-or-sinusitis-key-symptoms-to-watch-for/articleshow/122205790.cms"
    },
    {
        date: "04 July 2025",
        title: "Zota Health Care expands Davaindia network to 1,760 operational stores",
        image: "https://www.indianpharmapost.com/public/uploads/news/2025/07/17355/Zota_Health_Care_Limited.png",
        tags: ["Awards"],
        url: "https://www.indianpharmapost.com/news/zota-health-care-expands-davaindia-network-to-1760-operational-stores-17355"
    },
    {
        date: "06 July 2025",
        title: "Quiet quitting at work: Why employees lose motivation and 5 signs to recognise it before team productivity takes a hit",
        image: "https://www.hindustantimes.com/ht-img/img/2025/07/06/550x309/employee_12_1751808048447_1751808048705.jpg",
        tags: ["People", "Insights"],
        url: "https://www.hindustantimes.com/lifestyle/health/quiet-quitting-at-work-why-employees-lose-motivation-and-5-signs-to-recognise-it-before-team-productivity-takes-a-hit-101751803502695.html"
    },

    {
        date: "07 July 2025",
        title: "Why actor Mona Singh’s home‑made nut mix makes for a natural protein shake",
        image: "https://images.indianexpress.com/2025/07/resize-88.jpg?w=640",
        tags: ["Health", "Wellness"],
        url: "https://indianexpress.com/article/health-wellness/why-actor-mona-singhs-home-made-nut-mix-makes-for-a-natural-protein-shake-10110678/"
    },
    {
        date: "04 July 2025",
        title: "Nutrition and lifestyle tips to ease menstrual discomfort",
        image: "https://static.toiimg.com/thumb/msid-122086326,imgsize-96026,width-400,resizemode-4/122086326.jpg",
        tags: ["Health", "Wellness"],
        url: "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/nutrition-and-lifestyle-tips-to-ease-menstrual-discomfort/articleshow/122086088.cms"
    },
    {
        date: "10 July 2025",
        title: "Revolutionizing AI in India: CoRover and BharatGPT’s impact on enterprise solutions",
        image: "https://etimg.etb2bimg.com/photo/122355318.cms",
        tags: ["Technology", "AI"],
        url: "https://enterpriseai.economictimes.indiatimes.com/news/case-studies/revolutionizing-ai-in-india-corover-and-bharatgpts-impact-on-enterprise-solutions/122355313"
    },
    {
        date: "10 July 2025",
        title: "Namibia to launch India UPI for real‑time digital payments this year",
        image: "https://images.cnbctv18.com/uploads/2024/09/shutterstock-2318730277-2024-09-3ead5fd8157ec663fa9d41cb0caa89be-scaled.jpg?impolicy=website&width=640&height=360",
        tags: ["Finance", "Fintech"],
        url: "https://www.cnbctv18.com/business/finance/namibia-to-launch-india-upi-for-real-time-digital-payments-this-year-19634964.htm"
    },

    {
        date: "12 July 2025",
        title: "Kajol, Ajay Devgn spend less on luxury designer items: her money mindset",
        image: "https://images.indianexpress.com/2025/06/kajol-ajay.jpg?w=640",
        tags: ["Lifestyle", "Celebrity"],
        url: "https://indianexpress.com/article/lifestyle/kajol-ajay-devgn-spend-on-luxury-designer-items-10064214/"
    },
    {
        date: "12 July 2025",
        title: "Overeating derailing your weight loss plans? Dietician suggests 3 hacks",
        image: "https://www.hindustantimes.com/ht-img/img/2025/07/12/550x309/overeating_12_1752302159029_1752302159190.jpg",
        tags: ["Health", "Fitness"],
        url: "https://www.hindustantimes.com/lifestyle/health/overeating-derailing-your-weight-loss-plans-dietician-suggests-3-hacks-to-control-your-cravings-101752302111211.html"
    },
    {
        date: "12 July 2025", // date not fetched
        title: "Conversational AI Architect: AI & chatbot trends with Enterprise coverage",
        image: "https://assets.entrepreneur.com/content/3x2/2000/1752225222-TheIntegrationofGenerativeArtificialIntelligenceGenAIintoe-commerceentertainmentandothersectorsisopeningnewdoorsformarketerstomakecustomerexperiencemoreseamles-2025-07-11T144243286.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380",
        tags: ["Technology", "AI"],
        url: "https://www.entrepreneur.com/en-in/news-and-trends/conversational-ai-architect/494520"
    },
    {
        date: "16 July 2025",
        title: "Beyond text: Why voice is emerging as India’s next frontier for AI interaction",
        image: "https://www.livemint.com/lm-img/img/2025/07/15/600x338/2-0-1248141349-676364084-1024x1024-0_1679614519708_1752577846394.jpg",
        tags: ["Technology", "AI"],
        url: "https://www.livemint.com/ai/beyond-text-why-voice-is-emerging-as-indias-next-frontier-for-ai-interaction-languages-indiaai-mission-11752567979437.html"
    },
    {
        date: "16 July 2025",
        title: "AI Appreciation Day 2025: Why India’s tech leaders are optimistic",
        image: "https://images.yourstory.com/cs/286/fe056c90507811eea8de27f99b086345/Imagebzvn-1752664201689.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
        tags: ["Technology", "AI"],
        url: "https://yourstory.com/ai-story/ai-appreciation-day-2025-why-indias-tech-leaders-are-optimistic"
    },
    {
        date: "16 July 2025",
        title: "AI vs AI: Cyber wars unfold as autonomous agents clash",
        image: "https://bl-i.thgim.com/public/incoming/2xh9qn/article69831782.ece/alternates/LANDSCAPE_1200/BL16_Think_AI_brain.jpg",
        tags: ["Technology", "Cybersecurity"],
        url: "https://www.thehindubusinessline.com/info-tech/ai-vs-ai-the-cyber-wars-new-frontier-unfolds-as-autonomous-agents-clash/article69831543.ece"
    },
    {
        date: "22 July 2025",
        title: "Loan via UPI soon: Withdraw money from credit lines taken against property, gold, FDs, shares, MFs",
        image: "https://img.etimg.com/thumb/width-300,height-225,imgsize-2497441,resizemode-75,msid-122781867/wealth/spend/loan-via-upi-soon-you-can-use-upi-to-withdraw-money-from-credit-line-taken-against-property-gold-fd-share-mfs-others/loan-account-through-upi.jpg",
        tags: ["Finance", "Fintech"],
        url: "https://m.economictimes.com/wealth/spend/loan-via-upi-soon-you-can-use-upi-to-withdraw-money-from-credit-line-taken-against-property-gold-fd-share-mfs-others/articleshow/122781736.cms"
    },
    {
        date: "21 July 2025",
        title: "Urgent reforms needed as India's inbound tourism stagnates amidst global recovery",
        image: "https://etimg.etb2bimg.com/photo/122813632.cms",
        tags: ["Travel", "Economy"],
        url: "https://travel.economictimes.indiatimes.com/news/travel-agents/inbound/urgent-reforms-needed-as-indias-inbound-tourism-stagnates-amidst-global-recovery/122813654"
    },
    {
        date: "21 July 2025",
        title: "From Mahakumbh to Metaverse: Taking AI beyond Internet connectivity",
        image: "https://media.assettype.com/analyticsinsight%2F2025-07-21%2F23552i3a%2FAnkush-Sabharwal-Founder-CEO-of-CoRover.jpg?w=1200&auto=format%2Ccompress&fit=max",
        tags: ["Technology", "Interview"],
        url: "https://www.analyticsinsight.net/interview/from-mahakumbh-to-metaverse-taking-ai-beyond-internet-connectivity-inside-ankush-sabharwals-founder-ceo-corover-ai-revolution"
    },
    {
        date: "22 July 2025",
        title: "Crypto heist: Why passwords remain the Achilles heel",
        image: "https://bl-i.thgim.com/public/incoming/rxt4n0/article69838680.ece/alternates/LANDSCAPE_1200/2025-05-16T111932Z_1508768048_RC2YIEAU63RL_RTRMADP_3_CRYPTO-CRIME.JPG",
        tags: ["Technology", "Cybersecurity"],
        url: "https://www.thehindubusinessline.com/info-tech/crypto-heist-why-passwords-remain-the-achilles-heel/article69838552.ece"
    }
];

export default newsItems;