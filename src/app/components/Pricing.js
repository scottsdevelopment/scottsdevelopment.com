'use client'

import { useRef, useState } from 'react'
import { colors } from '../../config/colors'
import Card from './Card'

function PricingContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState("")
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("")
    setSubmitting(true)
    const form = formRef.current
    const data = new FormData(form)
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })
      if (response.ok) {
        setStatus("Thanks for your submission!")
        form.reset()
      } else {
        const data = await response.json()
        if (data.errors) {
          setStatus(data.errors.map(error => error.message).join(", "))
        } else {
          setStatus("Oops! There was a problem submitting your form")
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      ref={formRef}
      action="https://formspree.io/f/mgvnddpv"
      method="POST"
      className="mt-4 grid grid-cols-1 gap-3"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        required
        name="name"
        placeholder="Name"
        className={`w-full rounded-md border ${colors.bg.secondary} ${colors.border.primary} px-3 py-2 ${colors.text.heading} focus:outline-none`}
      />
      <input
        name="company"
        placeholder="Company (optional)"
        className={`w-full rounded-md border ${colors.bg.secondary} ${colors.border.primary} px-3 py-2 ${colors.text.heading} focus:outline-none`}
      />
      <input
        required
        name="email"
        type="email"
        placeholder="Email"
        className={`w-full rounded-md border ${colors.bg.secondary} ${colors.border.primary} px-3 py-2 ${colors.text.heading} focus:outline-none`}
      />
      <input
        name="website"
        placeholder="Website (optional)"
        className={`w-full rounded-md border ${colors.bg.secondary} ${colors.border.primary} px-3 py-2 ${colors.text.heading} focus:outline-none`}
      />
      <button
        type="submit"
        disabled={submitting}
        className={`mt-2 rounded-md px-4 py-2 font-medium ${colors.button.primary} ${submitting ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {submitting ? "Submitting..." : "Start the conversation"}
      </button>
      <p
        className={`text-sm mt-2 ${
          status
            ? status.startsWith("Thanks")
              ? colors.status.success
              : colors.status.error
            : ""
        }`}
        data-testid="form-status"
      >
        {status}
      </p>
    </form>
  )
}

export default function Pricing() {

  return (
    <section id="pricing" className="py-12">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <h2 className={`text-2xl font-semibold ${colors.text.heading}`}>Pricing & Engagement</h2>
          <p className={`mt-2 ${colors.text.secondary} max-w-2xl`}>
            We offer flexible engagement models designed to match your project needs:
          </p>
          <div className={`mt-4 space-y-2 ${colors.text.secondary}`}>
            <ul className="list-disc ml-6">
              <li>Fixed-price modernization or greenfield development</li>
              <li>Dedicated engineering teams or staff augmentation</li>
              <li>Ongoing support, compliance, and maintenance contracts</li>
            </ul>
            <div className={`mt-6 ${colors.text.heading} font-medium`}>
              <h3 className="text-lg font-semibold mb-2">Seeking Engineering Opportunities</h3>
              <p className={`${colors.text.secondary} font-normal`}>
                We are currently seeking engineering opportunities where we can contribute as a senior/full-stack engineer. Target compensation is $125,000 per year plus benefits, commensurate with experience and responsibilities.
              </p>
              <p className={`${colors.text.secondary} font-normal mt-2`}>
                Typical short term projects start around $50,000 and scale based on scope, complexity, integrations, and compliance requirements.
              </p>
               <p className={`${colors.text.secondary} font-normal mt-2`}>
                 If you have a project or role in mind—whether consulting, staff augmentation, or a full-time position—let's talk. We are happy to discuss how we can deliver scalable, secure, and high-performing systems for your business.
               </p>
             </div>
           </div>
        </div>

        <div id="#contact" className="lg:col-span-1">
          <Card>
            <h3 className={`font-semibold ${colors.text.heading}`}>Let's Connect</h3>
            <p className={`mt-2 ${colors.text.secondary} text-sm`}>Have a project in mind? Contact us to discuss your goals, explore solutions, and see how we can help deliver scalable, secure, and high-performing systems.</p>
            <PricingContactForm />
          </Card>
        </div>
      </div>
    </section>
  )
}
