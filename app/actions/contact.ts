"use server";

import {
  submitContactMessage,
  type ContactSubmissionPayload,
  type ContactSubmissionResult,
} from "@/lib/repositories/contactRepository";

/**
 * Server action to process contact messages.
 * Handles server-side validation and Supabase submission with honest status return.
 */
export async function handleContactSubmission(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  return await submitContactMessage(payload);
}
