/**
 * Career history. Drives /about and the background teaser on the home page.
 *
 * OWNER QUESTION: employer names and dates below are taken from the resume
 * Scott supplied. Confirm he is happy naming employers publicly; if not, set
 * `showEmployers` to false and only roles, places and dates are shown.
 */

export const showEmployers = true

/** The story, in Scott's words (lightly edited from his notes). */
export const story = [
  'I got into computers very young: AOL, BASIC and Visual Basic, then games as the excuse to learn C, C++ and Java and how memory and programs actually work. Automation has been the thread ever since: making the computer do the repetitive part.',
  'I spent my teens and early twenties fixing machines and building websites in the PHP era, then a decade in Michigan agencies doing e-commerce and custom web apps: Shopify, Magento, WooCommerce, Laravel, Angular, Node. That is where I learned to ship on time and keep clients informed.',
  'From 2021 to 2024 I worked as a senior full-stack engineer on public-trust systems in Washington, D.C.: benefits form libraries in Rails and React, modernising healthcare C# systems, observability and CI/CD. That is where healthcare became a focus.',
  'Today I work in healthcare quality software by day and run Scott’s Development alongside it. I study machine learning and economic models in my spare time, and I am deliberately working on the soft skills: communicating clearly, leading well, and being the kind of engineer who is easy to work with.',
]

/** Resume timeline, newest first. */
export const timeline = [
  {
    employer: 'A healthcare company',
    role: 'Technology leader, engineering team lead',
    location: 'Remote',
    start: '2024',
    end: 'Present',
    summary:
      'Run engineering for a company of doctors, nurses and medical providers: keep reporting and operations automated and accurate, modernise systems for analytics, and ship features for clinical operations teams. Align executives, subject-matter experts and vendors. Rails, AWS, Pulumi, queue and batch systems, automated reporting and PDF generation, primary-source validation and digital quality measures.',
    tags: ['Ruby on Rails', 'AWS', 'Pulumi', 'Sidekiq-style queues', 'FHIR', 'dQM', 'Team leadership'],
    unnamed: true,
  },
  {
    employer: 'Ad Hoc',
    role: 'Senior Full Stack Developer',
    location: 'Washington, D.C.',
    start: '2021',
    end: '2024',
    summary:
      'Pension form libraries in Ruby on Rails and React. Led modernisation of C# web systems in healthcare. Grafana and New Relic observability for legacy systems, CI/CD improvements, Salesforce backup policy and Tableau reporting for the Library of Congress.',
    tags: ['Ruby on Rails', 'React', 'C#', 'Grafana', 'New Relic', 'CI/CD', 'Salesforce', 'Tableau'],
  },
  {
    employer: 'Developrize',
    role: 'Senior Developer',
    location: 'Novi, MI',
    start: '2020',
    end: '2020',
    summary: 'Angular applications with custom modifications; led sprint planning and resolved technical issues in JIRA.',
    tags: ['Angular', 'Agile'],
  },
  {
    employer: 'Latcha + Associates',
    role: 'Senior Full Stack Developer',
    location: 'Novi, MI',
    start: '2019',
    end: '2020',
    summary:
      'Marketing tools for automotive clients in Angular and TypeScript; Salesforce-integrated email templates for high-traffic campaigns.',
    tags: ['Angular', 'TypeScript', 'Salesforce'],
  },
  {
    employer: 'Plug Digital',
    role: 'Full Stack Developer',
    location: 'Birmingham, MI',
    start: '2019',
    end: '2019',
    summary: 'Shopify Plus store enhancements with Polaris and Liquid; API integrations and responsive campaign templates.',
    tags: ['Shopify Plus', 'Liquid', 'APIs'],
  },
  {
    employer: 'Fuse Technology Group',
    role: 'Full Stack Developer',
    location: 'Ferndale, MI',
    start: '2018',
    end: '2018',
    summary: 'Laravel dashboards and REST APIs for client reporting; Node.js apps with Next.js; SQL performance work on enterprise databases.',
    tags: ['Laravel', 'Next.js', 'SQL'],
  },
  {
    employer: 'Advanced Media Solutions',
    role: 'Full Stack Developer',
    location: 'Utica, MI',
    start: '2018',
    end: '2018',
    summary: 'WooCommerce, Drupal and WordPress stores with custom plugins; CodeIgniter enhancements; REST API integrations.',
    tags: ['WooCommerce', 'WordPress', 'Drupal'],
  },
  {
    employer: 'Brand Labs',
    role: 'Senior Developer / Technical Sales Lead',
    location: 'Rochester, MI',
    start: '2015',
    end: '2017',
    summary:
      'Led B2B and CMS sites on WordPress and Shopify. Custom Laravel integrations including fraud detection and API bridges. Internal reporting tools, automated testing, pagespeed work with Google engineers, trained new developers.',
    tags: ['Laravel', 'Shopify', 'Fraud detection', 'Mentoring'],
  },
  {
    employer: 'Raymond Christopher',
    role: 'Developer / Specialist',
    location: 'Plymouth, MI',
    start: '2014',
    end: '2015',
    summary: 'Laravel automation for EDI processes; Magento and Shopify servers for drop-shipping stores; Java nightly reporting.',
    tags: ['Laravel', 'EDI', 'Magento', 'Java'],
  },
  {
    employer: 'High Level Marketing',
    role: 'Lead Back End Developer',
    location: 'West Bloomfield, MI',
    start: '2013',
    end: '2014',
    summary: 'Laravel apps integrating JIRA with legacy software; PSD to HTML/CSS; FreeNAS file server for the office.',
    tags: ['Laravel', 'JIRA', 'FreeNAS'],
  },
  {
    employer: 'Midwest Color Lab',
    role: 'Lead Back End Developer',
    location: 'Redford, MI',
    start: '2008',
    end: '2011',
    summary: 'Custom e-commerce PHP applications for online sales; Linux servers; secure order upload tools.',
    tags: ['PHP', 'Linux', 'E-commerce'],
  },
]

export const education = [
  { school: 'Eastern Michigan University', detail: 'Courses in Computer Science', years: '2007 – 2010' },
]

/** Skills, grouped so they read as areas rather than a keyword wall. */
export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C#', 'Ruby', 'Java', 'SQL', 'Lua', 'C/C++'] },
  { group: 'Front end', items: ['React', 'Next.js', 'Angular', 'Tailwind', 'HTML/CSS', 'Liquid'] },
  { group: 'Back end', items: ['Node.js', 'NestJS', 'FastAPI', 'Django', 'Laravel', 'Ruby on Rails', 'ASP.NET', 'CodeIgniter'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'REST', 'GraphQL', 'EDI', 'FHIR', 'ETL pipelines'] },
  { group: 'Commerce and CMS', items: ['Shopify Plus', 'Magento', 'WooCommerce', 'BigCommerce', 'WordPress', 'Drupal', 'Salesforce'] },
  { group: 'AI and automation', items: ['OpenAI and GPT-class APIs', 'Agentic workflows', 'Whisper', 'NLP', 'Browser automation', 'Data labeling'] },
  { group: 'Operations', items: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Grafana', 'New Relic', 'Tableau', 'Linux'] },
  { group: 'Ways of working', items: ['Sprint planning', 'Agile', 'Mentorship', 'Technical sales', 'Documentation'] },
]

/** Current interests, for the about page. */
export const interests = [
  'Healthcare quality measurement: NCQA programmes, HEDIS measures and digital quality measures',
  'Digital transformation of healthcare systems and in-home care, and where AI agents genuinely help',
  'Machine learning and economic models',
  'Helping small businesses grow with simple, well-built sites and marketing',
]
