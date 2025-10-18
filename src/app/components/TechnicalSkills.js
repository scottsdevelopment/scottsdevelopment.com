import { colors } from '../../config/colors'
import Card from './Card'

export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: "Frontend Development for Modern Web Applications",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Angular2", "Vue", "Tailwind CSS", "HTML5", "CSS3", "PSD to HTML Conversion"]
    },
    {
      title: "Backend & API Development for Scalable Systems",
      skills: ["Node.js", "Express", "Ruby on Rails", "Python", "Django", "PHP", "Laravel", "C#", "ASP.NET", "GraphQL", "REST APIs", "WebSockets"]
    },
    {
      title: "Cloud-Native Infrastructure & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Grafana", "New Relic", "Server Logs", "Real-Time Dashboards"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch", "AWS S3", "SQL Server", "Prisma"]
    },
    {
      title: "Enterprise Security & Compliance",
      skills: ["JWT", "OAuth2", "Data Encryption", "Security Auditing", "Penetration Testing", "SOC 2", "HIPAA", "Data Integrity"]
    },
    {
      title: "AI-Powered Automation & Modern Tools",
      skills: ["OpenAI APIs", "GPT-based Systems", "LangChain", "Natural Language Processing (NLP)", "Whisper", "Data Labeling"]
    },
    {
      title: "Enterprise eCommerce Platform Development",
      skills: ["Shopify", "Shopify Plus", "Magento", "WooCommerce", "Liquid", "Polaris", "Custom PHP Plugins"]
    },
    {
      title: "Enterprise Content Management Systems",
      skills: ["WordPress", "Drupal", "Salesforce", "Salesforce APEX", "CodeIgniter", "Custom CMS Development"]
    },
    {
      title: "Enterprise Development Tools & Workflows",
      skills: ["GitHub", "GitFlow", "JIRA", "Sprint Planning", "Grunt", "Gulp", "Webpack", "Cypress", "Unit Testing"]
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "Windows", "macOS", "FreeNAS", "Server Administration"]
    },
    {
      title: "Design & Media",
      skills: ["Adobe Photoshop", "Responsive Design", "Marketing Templates", "Email Templates", "UI/UX Design"]
    },
    {
      title: "Technical Leadership & Project Management",
      skills: ["Agile Development", "Cross-functional Teams", "Mentorship", "Technical Leadership", "Project Management"]
    }
  ]

  return (
    <section id="skills" className={`py-12 border-t ${colors.border.primary}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-2xl font-semibold ${colors.text.heading}`}>Expertise / Technical Stack</h2>
          <p className={`mt-2 ${colors.text.secondary}`}>15+ years of experience designing, modernizing, and scaling web applications for enterprise clients. Deep expertise across modern frameworks and cloud-native solutions with a focus on performance, security, and user experience.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <h3 className={`text-lg font-medium ${colors.text.heading} mb-4`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 text-xs border font-medium ${colors.bg.secondary} ${colors.text.body} rounded-full ${colors.border.primary}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
