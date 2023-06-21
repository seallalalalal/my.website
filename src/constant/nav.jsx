const NAV_WORD_EN = ["About", "Experience", "Education", "Portfolio"];
const NAV_WORD_CN = ["關於我", "經歷", "學歷", "作品集"];
const NAV_LINK = ["#about", "#experience", "#education", "#portfolio"];

const NAV = [
  { word: "About", link: "#about" },
  { word: "Experience", link: "#experience" },
  { word: "Education", link: "#education" },
  { word: "Portfolio", link: "#about" },
];

const EXPERIENCE = [
  {
    name: "Novel Cralwer App Practice",
    organization: "Graduation Project",
    tools: [
      "Backend: Vapor.codes(Swift)",
      "Frontend: Flutter(dart)",
      "Database: PostgreSQL",
    ],
    startTime: "2022,7",
    endTime: "present",
    description: [
      "畢業專題，一人獨立開發前端與後端",
      "使用Figma Prototype設計前端UI/UX",
      "以Flutter 作框架，開發 web, Android, Ios等跨平台應用程式",
      "學習 Vapor框架，進行後端API開發，以及爬蟲定時喚醒功能",
      "使用swiftSoup分析分析html",
      "學習對 PostgreSQL database CRUD",
    ],
  },
  {
    name: "校務系統協作開發-請假系統",
    organization: "台北市立大學",
    tools: [
      "Backend: FastAPI(Python)",
      "Frontend: React(Javascript)",
      "Database: mySQL",
      "Others: Docker, gitlab CI/CD, Grafana",
    ],
    startTime: "2022,10",
    endTime: "present",
    description: [
      "團隊合作，十名大學學生共同開發出屬於學校的點名系統",
      "學習 Git 的使用，增強團隊開發版本控制的能力",
      "運用微服務架構，有 DevOps 團隊使前後端團隊能分離開發",
      "Agile development with CI/CD 以React 作框架，運用 web debugger開發 web application",
      "學習 http status，進行 API 串接",
      "學習對mysQL database CRUD",
    ],
  },
  {
    name: "Flutter前端實習生",
    organization: "zencher友教股份有限公司",
    tools: ["Frontend: Flutter(Dart)", "Others: Flutter Bloc State Management"],
    startTime: "2022,7",
    endTime: "2023,3",
    description: [
      "zencher友教股份有限公司",
      "使用Figma Prototype設計前端UI/UX",
      "Flutter開發技術",
      "Flutter Bloc State Management狀態管理",
      "MVC專案架構程式開發",
      "前後端API串接",
    ],
  },
];

export { NAV, EXPERIENCE };
