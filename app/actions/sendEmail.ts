"use server";

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}) {
  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY"; // yahan apni key daalein

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Enquiry from Natraj Properties Website",
      from_name: formData.name,
      replyto: formData.email,
      message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Requirement: ${formData.requirement}
Message: ${formData.message}
      `.trim(),
    }),
  });

  const result = await response.json();
  if (result.success) {
    return { success: true };
  } else {
    return { success: false, error: result.message };
  }
}