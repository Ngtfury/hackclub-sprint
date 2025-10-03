"use client"

import { useState } from "react"
import Stepper, { Step } from "./stepper"

export default function RegistrationStepper() {
  const [membershipId, setMembershipId] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [completed, setCompleted] = useState<null | "success" | "error">(null)
  const [errorMsg, setErrorMsg] = useState<string>("")

  const handleComplete = async () => {
    try {
      setSubmitting(true)
      setErrorMsg("")
      const res = await fetch("https://localhost:8000/sprint/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ membershipId }),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => "")
        throw new Error(text || "Failed to register")
      }
      setCompleted("success")
    } catch (err: any) {
      setCompleted("error")
      setErrorMsg(err?.message || "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-xl">
      <Stepper
        initialStep={1}
        onFinalStepCompleted={handleComplete}
        stepCircleContainerClassName=""
        stepContainerClassName=""
        contentClassName=""
        footerClassName=""
        nextButtonProps={{
          disabled: submitting || membershipId.trim().length === 0,
          "aria-disabled": submitting || membershipId.trim().length === 0,
        }}
      >
        <Step>
          <div className="flex flex-col gap-4">
            <label htmlFor="hc-id" className="text-sm">
              HackClub membership ID
            </label>
            <input
              id="hc-id"
              type="text"
              value={membershipId}
              onChange={(e) => setMembershipId(e.target.value)}
              placeholder="e.g., HC-12345"
              className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-3 text-[var(--color-foreground)] outline-none"
            />
            <p className="text-xs text-[var(--muted-foreground)]">Enter your HackClub membership ID to proceed.</p>
          </div>
        </Step>
        <Step>
          <div className="flex flex-col items-center gap-3 text-center">
            <p>Click Complete to submit your registration.</p>
            {submitting && <p className="text-xs text-[var(--muted-foreground)]">Submitting...</p>}
          </div>
        </Step>
      </Stepper>

      {completed === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-4"
        >
          <p className="font-medium">Registration complete!</p>
          <p className="text-sm text-[var(--muted-foreground)]">We’ve received your membership ID.</p>
        </div>
      )}
      {completed === "error" && (
        <div role="alert" className="mt-4 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="font-medium" style={{ color: "var(--brand-red)" }}>
            Registration failed
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">{errorMsg}</p>
        </div>
      )}
    </div>
  )
}
