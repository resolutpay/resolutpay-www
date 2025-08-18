import glo from "@/assets/brands/glo.svg?url";
import globafin from "@/assets/brands/globafin.svg?url";
import kalahari from "@/assets/brands/kalahari-resorts.svg?url";
import loyalty from "@/assets/brands/loyalty-insurance.svg?url";
import marcel from "@/assets/brands/marcel.svg?url";
import cloud from "@/assets/illustrations/cloud.svg?url";
import lightBulb2 from "@/assets/illustrations/light-bulb-2.svg?url";
import bolt from "@/assets/illustrations/lightning.svg?url";
import envelope from "@/assets/illustrations/mail.svg?url";
import shield from "@/assets/illustrations/shield.svg?url";
import user from "@/assets/illustrations/user.svg?url";
import fire from "@/assets/illustrations/fire.svg?url";
import star from "@/assets/illustrations/star.svg?url";
import bulb from "@/assets/illustrations/light-bulb.svg?url";
import instagram from "@/assets/icons/instagram.svg?url";
import linkedIn from "@/assets/icons/linkedin.svg?url";
import x from "@/assets/icons/x.svg?url";
import meta from "@/assets/icons/meta.svg?url";
import { FormDataType } from "./interface";

export const navItems = [
  { title: "ABOUT", path: "/about" },
  { title: "PRODUCTS", path: "/products" },
  { title: "DEVELOPERS", path: "/developers" },
  { title: "SUPPORT", path: "/support" },
];

// BRAND LOGOS
export const brands = [
  {
    name: "Glo",
    logo: glo,
  },
  {
    name: "Globafin",
    logo: globafin,
  },
  {
    name: "Kalahari-Resorts",
    logo: kalahari,
  },
  {
    name: "Loyalty-Insurance",
    logo: loyalty,
  },
  {
    name: "Marcel",
    logo: marcel,
  },
];

// WHY RESOLUT CARDS
export const chooseResolutCards = [
  {
    imgSrc: shield,
    imgAlt: "Shield icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: bolt,
    imgAlt: "Lightning bolt icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: user,
    imgAlt: "User icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: envelope,
    imgAlt: "Envelope icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: lightBulb2,
    imgAlt: "Light bulb icon",
    title: "Hourly settlements",
    description:
      "Don't wait for days before you get settled. Get your money into your account every hour.",
  },
  {
    imgSrc: cloud,
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
    imageSrc: fire,
    imageAlt: "Fire",
  },
  {
    title: "SMEs",
    description:
      "Solving technology gaps for smalland medium scale enterprises",
    imageSrc: star,
    imageAlt: "Star",
  },
  {
    title: "Point of Sales",
    description:
      "Pay with card or mobile money and get your order delivered in minutes",
    imageSrc: bulb,
    imageAlt: "Bulb",
  },
];
// FOOTER SOCIAL MEDIA LINKS
export const socials = [
  { icon: instagram, label: "Instagram" },
  { icon: linkedIn, label: "LinkedIn" },
  { icon: x, label: "X/Twitter" },
  { icon: meta, label: "Meta/Facebook" },
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
