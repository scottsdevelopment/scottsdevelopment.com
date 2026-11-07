/**
 * Healthcare section content.
 *
 * Rules (owner): types of work and architecture only. No patient data, no
 * employer or client names beyond what is on the resume, no compliance or
 * certification claims. The section hides itself if `entries` is emptied.
 */

export const healthcare = {
  heading: 'Work in healthcare',
  intro:
    'A good part of my engineering has been in healthcare and public benefits: systems that take in claims, clinical and demographic data, validate it, and turn it into reports people are measured on. The work is mostly ETL, validation, quality measures and bringing legacy C# forward.',

  entries: [
    {
      title: 'Technology leadership at a healthcare company',
      period: 'Current',
      role: 'Leads the engineering team',
      summary:
        'Day to day I keep reporting and operations automated and accurate for a company of doctors, nurses and medical providers, and I lead the engineers who build features for clinical operations teams and providers. The work helps keep the patient population they serve healthy, which is the part I am proudest of. I bring ceremony and structure to the team, work with executives to align departments and subject-matter experts, and deal with vendors and clients directly.',
      stack: ['Ruby on Rails', 'AWS', 'Pulumi', 'Queue and batch job systems', 'Automated reports and PDF generation (unit-tested)'],
    },
    {
      title: 'Automated healthcare reporting engines',
      period: 'Current',
      summary:
        'Modernising the engines that produce quality reports so analysts can work from clean data: primary-source validation of incoming records, digital quality measures (dQM) built on FHIR resources, and moving legacy reporting code onto current platforms without changing the numbers it produces.',
      stack: ['FHIR', 'dQM', 'SQL', 'Legacy modernisation'],
    },
    {
      title: 'Healthcare web ecosystem modernisation',
      period: '2021 – 2024',
      summary:
        'Led the modernisation of C# web systems for a healthcare programme: performance and scalability work, Grafana and New Relic observability for legacy services, and CI/CD pipelines so releases stopped being events.',
      stack: ['C#/.NET', 'Grafana', 'New Relic', 'CI/CD'],
    },
    {
      title: 'Patient platform, zero-downtime modernisation',
      summary:
        'Security audit and SQL performance work inside a legacy C#/.NET patient-management platform, followed by a staged migration to Salesforce with no downtime for patient-facing systems.',
      stack: ['C#/.NET', 'SQL Server', 'Salesforce', 'Security audit'],
    },
    {
      title: 'Benefits form libraries',
      period: '2021 – 2024',
      summary:
        'Pension and benefits form libraries in Ruby on Rails and React for a federal programme, with accessibility and federal security requirements built in rather than bolted on.',
      stack: ['Ruby on Rails', 'React', 'Accessibility'],
    },
    {
      title: 'Ingestion and validation pipelines',
      summary:
        'Event-driven ETL for claims and audit files (S3 event, SQS queue, Celery worker, Postgres), and a CSV ingestion portal with Pydantic validation, a strategy per file type, background workers and identity resolution that keeps a patient’s ID stable when source files disagree. A small CLI turns structured patient data into a readable summary with an LLM.',
      stack: ['Django', 'Celery', 'Pydantic', 'PostgreSQL', 'AWS S3/SQS', 'HTMX'],
      links: [
        { label: 'django-aws-etl', url: 'https://github.com/scottsdevelopment/django-aws-etl' },
        { label: 'fhir-summary-gpt', url: 'https://github.com/scottsdevelopment/fhir-summary-gpt' },
      ],
    },
  ],
}

export function hasHealthcareContent(content = healthcare) {
  return Array.isArray(content.entries) && content.entries.length > 0
}
