import { useState } from 'react'

export function useFormspree(formId) {
    const [status, setStatus] = useState("")
    const [submitting, setSubmitting] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("")
        setSubmitting(true)

        const form = e.target
        const data = new FormData(form)

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
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

    return {
        handleSubmit,
        status,
        submitting
    }
}
