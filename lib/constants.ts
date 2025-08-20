import { FormDataType } from "./interface";

export const navItems = [
  { title: "ABOUT", path: "/about" },
  { title: "PRODUCTS", path: "/products" },
  { title: "DEVELOPERS", path: "https://docs.resolutpay.com" },
  { title: "SUPPORT", path: "/support" },
];

// BRAND LOGOS
export const brands = [
  {
    name: "Glo",
    logo: "/assets/brands/glo.svg",
  },
  {
    name: "Globafin",
    logo: "/assets/brands/globafin.svg",
  },
  {
    name: "Kalahari-Resorts",
    logo: "/assets/brands/kalahari-resorts.svg",
  },
  {
    name: "Loyalty-Insurance",
    logo: "/assets/brands/loyalty-insurance.svg",
  },
  {
    name: "Marcel",
    logo: "/assets/brands/marcel.svg",
  },
];

// WHY RESOLUT CARDS
export const chooseResolutCards = [
  {
    imgSrc: "/assets/illustrations/shield.svg",
    imgAlt: "Shield icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: "/assets/illustrations/lightning.svg",
    imgAlt: "Lightning bolt icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: "/assets/illustrations/user.svg",
    imgAlt: "User icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: "/assets/illustrations/mail.svg",
    imgAlt: "Envelope icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: "/assets/illustrations/light-bulb-2.svg",
    imgAlt: "Light bulb icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: "/assets/illustrations/cloud.svg",
    imgAlt: "Cloud icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
];

// UNIQUE CHALLENGES CARDS
export const solution = [
  {
    title: "Insurance",
    description:
      "We provide solutions for the insurance industry from broker to  underwriter to reinsurance",
    imageSrc: "/assets/illustrations/fire.svg",
    imageAlt: "Fire",
  },
  {
    title: "SMEs",
    description:
      "Solving technology gaps for smalland medium scale enterprises",
    imageSrc: "/assets/illustrations/star.svg",
    imageAlt: "Star",
  },
  {
    title: "Point of Sales",
    description:
      "Pay with card or mobile money and get your order delivered in minutes",
    imageSrc: "/assets/illustrations/light-bulb.svg",
    imageAlt: "Bulb",
  },
];
// FOOTER SOCIAL MEDIA LINKS
export const socials = [
  { icon: "/assets/icons/instagram.svg", label: "Instagram" },
  { icon: "/assets/icons/linkedin.svg", label: "LinkedIn" },
  { icon: "/assets/icons/x.svg", label: "X/Twitter" },
  { icon: "/assets/icons/meta.svg", label: "Meta/Facebook" },
];

// TEAM LIST
export const teams = [
  {
    name: "Team Name",
    portfolio: "https://example.com/portfolio1",
    image: "url",
  },
  {
    name: "Team Name",
    portfolio: "https://example.com/portfolio2",
    image: "url",
  },
  {
    name: "Team Name",
    portfolio: "https://example.com/portfolio3",
    image: "url",
  },
  {
    name: "Team Name",
    portfolio: "https://example.com/portfolio4",
    image: "url",
  },
  {
    name: "Team Name",
    portfolio: "https://example.com/portfolio5",
    image: "url",
  },
  {
    name: "Team Name",
    portfolio: "https://example.com/portfolio6",
    image: "url",
  },
];

// RITHM
export const coreValues = [
  {
    id: 0,
    title: "Resolute",
    content: "Unwavering commitment to digital transformation and innovation",
  },
  {
    id: 1,
    title: "Integrity",
    content: "Upholding the highest ethical standards in all actions",
  },
  {
    id: 2,
    title: "Timeless",
    content: "Creating sustainable and scalable solutions",
  },
  {
    id: 3,
    title: "Humanity",
    content: "Prioritizing people and making a positive impact on lives",
  },
  {
    id: 4,
    title: "Mindful",
    content: "Being conscious of our social, environmental",
  },
];

// GET IN TOUCH FORM DATA
export const formFields: {
  id: "fullname" | "companyname" | "email" | "message";
  label: string;
  input: boolean;
}[] = [
  { id: "fullname", label: "Full name", input: true },
  { id: "companyname", label: "Company name", input: true },
  { id: "email", label: "Email address", input: true },
  { id: "message", label: "Type your message", input: false },
];

// FAQS
export const faqs = [
  {
    value: "item-1",
    question: "What credit score do I need to apply for a credit card?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards. Some cards are designed for individuals with lower scores, but they may come with higher interest rates or lower credit limits. It’s always recommended to review the eligibility criteria of the card you are applying for.",
  },
  {
    value: "item-2",
    question: "How can I apply for a credit card online?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lacus nec justo tincidunt, non posuere ligula pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis elementum quam vitae aliquam tempus. Morbi et dui at nulla euismod aliquam vitae ut lectus, sed nec leo cursus sem.",
  },
  {
    value: "item-3",
    question: "Are there any annual fees associated with the credit card?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, sem non dictum interdum, sapien sem aliquet turpis, vel consequat magna eros sed purus. Integer feugiat, ex nec convallis elementum, sem magna volutpat nunc, sit amet facilisis lorem ipsum vel sapien. Aliquam erat volutpat. Nam non eros sed magna consequat facilisis.",
  },
  {
    value: "item-4",
    question: "How long does it take to receive the credit card once approved?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, nibh sed luctus interdum, nulla neque porta ex, at dignissim mi nisl at justo. Ut sit amet tellus in justo viverra consequat. Suspendisse potenti. Nulla facilisi; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    value: "item-5",
    question: "How can I check my credit card balance and transactions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lectus a massa finibus, vitae aliquet libero luctus. Mauris sit amet neque feugiat, elementum mi sit amet, sagittis justo. Phasellus fermentum sapien sit amet neque condimentum cursus. Curabitur quis facilisis ipsum, in egestas lorem.",
  },
  {
    value: "item-6",
    question: "What should I do if my credit card is lost or stolen?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio ac nulla porttitor malesuada sit amet sed augue. Suspendisse potenti. Vivamus viverra, lectus in pulvinar malesuada, turpis sapien dignissim libero, a malesuada justo eros nec libero. Pellentesque sit amet lacus at erat interdum efficitur vel nec lectus.",
  },
  {
    value: "item-7",
    question: "Is my credit card information secure?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien nec nisl pretium, nec tristique ex viverra. Morbi posuere, nunc et facilisis lacinia, sem lacus blandit magna, eget volutpat est mauris nec nunc. Sed vehicula magna non volutpat sagittis. Nullam nec fermentum risus, id commodo est.",
  },
];

// Type of business  Options
export const businessTypeOptions = [
  {
    value: "starter",
    label: "Starter Business",
    description:
      "I'm testing my ideas with real customers, and preparing to register my company",
  },
  {
    value: "registered",
    label: "Registered Business",
    description:
      "My business has the approval, documentation, and licences required to operate legally",
  },
];

export const developerOptions = [
  { value: "yes", label: "Yes, I am" },
  { value: "no", label: "No, I'm not" },
];

export const formData: FormDataType[] = [
  { id: "country", label: "Country", type: "country" },
  {
    id: "businessName",
    label: "Business name",
    type: "input",
  },
  {
    id: "firstName",
    label: "First name",
    type: "input",
  },
  {
    id: "lastName",
    label: "Last name",
    type: "input",
  },

  {
    id: "email",
    label: "Email address",
    type: "input",
  },
  { id: "phone", label: "Phone number", type: "phone" },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "businessType",
    label: "What type of business do you own?",
    type: "business",
  },

  {
    id: "isDeveloper",
    label: "Are you a software developer?",
    type: "developer",
  },
];

export const ABOUT_US_FLEX_ITEMS = [
  {
    image: "/assets/illustrations/rocket.svg",
    title: "Our Vision",
    description:
      "To become a global leader in digital financial innovation, seamlessly integrating financial solutions across industries and geographies, while empowering individuals and businesses to achieve financial health and prosperity.",
  },
  {
    image: "/assets/illustrations/bulb-mission.svg",
    title: "Our Mission",
    description:
      "To revolutionize the global financial ecosystem by delivering accessible, innovative, and customer-centric digital solutions that simplify financial management, enhance liquidity, and unlock the full potential of financial well-being for all.",
  },
];
