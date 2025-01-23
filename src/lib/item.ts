import discordBlack from "@/public/assets/facebook.svg";
import facebook from "@/public/assets/background.jpg";
import telegram from "@/public/assets/background.jpg";
import instagram from "@/public/assets/background.jpg";
import twitter from "@/public/assets/background.jpg";
import dic from ",/public/prodc10.png"

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Retailer Assistance",
    href: "/",
    description:
        "A chatbot service designed to help retailers manage customer inquiries, inventory updates, and track sales in real-time.",
},
{
    title: "Student Helpdesk",
    href: "/",
    description:
        "An AI-powered assistant to answer student questions regarding courses, deadlines, and campus events, with personalized study reminders and guidance.",
},
{
    title: "Insurance Claim Assistant",
    href: "/",
    description:
        "An intelligent assistant helping insurance companies manage claims, process documents, and provide real-time customer support for claims status.",
},
{
    title: "Customer Feedback Collection",
    href: "/",
    description:
        "Enables businesses to collect customer feedback efficiently by using natural language processing to understand their responses, driving service improvements.",
},
{
    title: "24/7 Support Chatbot",
    href: "/",
    description:
        "A chatbot providing 24/7 support for customers across different industries like healthcare, retail, and education, helping solve common issues without human intervention.",
},
{
    title: "Personalized Shopping Assistant",
    href: "/",
    description:
        "A chatbot designed for retailers that assists customers by providing product recommendations, stock availability, and guiding them through the checkout process.",
},
  ]

  
  export const paidcomp: { title: string; href: string; description: string }[] = [
    {
      title: "Retailer Chatbot Service (Paid)",
      href: "/retailer-chatbot",
      description:
        "A chatbot service designed for retailers that helps streamline customer support, handle orders, and provide product recommendations. This premium service includes advanced AI-driven responses and customer interaction analytics.",
    },
    {
      title: "Student Assistance Chatbot (Free)",
      href: "/student-chatbot",
      description:
        "A free chatbot service that aids students by providing study resources, answering queries, and assisting with timetable management. It is ideal for educational institutions looking to enhance student experience.",
    },
    {
      title: "Insurance Claims Chatbot (Paid)",
      href: "/insurance-chatbot",
      description:
        "A paid service aimed at insurance companies, automating the claims process. It simplifies the submission of claims, checks claim statuses, and offers 24/7 assistance, improving both customer service and operational efficiency.",
    },
    {
      title: "Customer Feedback Chatbot (Free)",
      href: "/customer-feedback-chatbot",
      description:
        "This free chatbot assists businesses in gathering customer feedback in real-time. It can conduct surveys, ask questions, and analyze sentiment to improve customer experience.",
    },
    {
      title: "FAQ Bot for Retailers (Free)",
      href: "/faq-bot-retailers",
      description:
        "A free service helping retailers manage frequently asked questions with an automated chatbot that provides instant responses to common inquiries about products, pricing, and policies.",
    },
    {
      title: "Insurance Policy Advisor (Paid)",
      href: "/insurance-policy-advisor",
      description:
        "A paid AI service tailored for insurance companies, providing potential customers with personalized policy recommendations, premium estimates, and assistance with policy queries.",
    },
    {
      title: "Product Inquiry Bot (Paid)",
      href: "/product-inquiry-bot",
      description:
        "This premium chatbot service caters to retail businesses, offering personalized assistance regarding product inquiries, availability, and order statuses, providing customers a seamless shopping experience.",
    },
    {
      title: "Personalized Study Companion (Paid)",
      href: "/personalized-study-companion",
      description:
        "A paid service for students that personalizes study plans, offers content recommendations, and assists with exam preparation using AI-powered algorithms. Ideal for learning institutions looking for modern tools to improve student outcomes.",
    }
];


export const problem = [
  {
    title: "Alert Dialog",
    href: "/assets/user-icon.png",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/assets/user-icon.png",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/assets/user-icon.png",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/assets/user-icon.png",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/assets/user-icon.png",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/assets/user-icon.png",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const solution = [
  {
    title: "Alert Dialog",
    href: "/assets/user-icon.png",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/assets/user-icon.png",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/assets/user-icon.png",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/assets/user-icon.png",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/assets/user-icon.png",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/assets/user-icon.png",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: "/assets/facebook.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl:"/assets/facebook.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: "/assets/facebook.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl:"/assets/facebook.svg",
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: "/assets/facebook.svg",
    url: "#",
  },
];

  export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
  }))
  
  export const projects = [
    {
      title: "Matthias Leidinger",
      description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "/app-ui.png",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#0c0e0c"
    },
    {
      title: "Clément Chapillon",
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "/app-ui.png",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#0c0e0c"
    },
    {
      title: "Zissou",
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "/app-ui.png",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#0c0e0c"
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "/app-ui.png",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#0c0e0c"
    },
    {
      title: "Mark Rammers",
      description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "/app-ui.png",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#0c0e0c"
    }
  ]