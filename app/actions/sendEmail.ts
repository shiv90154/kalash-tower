"use server";

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}) {
  // 🔁 Replace with your Formspree endpoint (https://formspree.io/f/xxxxxxx)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      requirement: formData.requirement,
      message: formData.message,
      _subject: `New Enquiry from ${formData.name} - Natraj Properties`,
    }),
  });

  if (!response.ok) {
    return { success: false, error: `Server error (${response.status}). Please check the endpoint or try again.` };
  }

  const result = await response.json();
  if (result.ok) {
    return { success: true };
  } else {
    return { success: false, error: result.error || "Submission failed." };
  }
}