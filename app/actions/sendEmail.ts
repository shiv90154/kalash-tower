"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email) {
      return { 
        success: false, 
        error: "Name and email are required fields." 
      };
    }

    // Sanitize and validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { 
        success: false, 
        error: "Please provide a valid email address." 
      };
    }

    // Ensure all fields are strings and sanitize them
    const sanitizedData = {
      name: String(formData.name).trim(),
      email: String(formData.email).trim(),
      phone: String(formData.phone || "").trim(),
      requirement: String(formData.requirement || "").trim(),
      message: String(formData.message || "").trim(),
    };

    // Check if we have SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP configuration missing");
      return { 
        success: false, 
        error: "Email service is not properly configured. Please contact support." 
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Add timeout and connection settings
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
    });

    // Verify connection configuration
    await transporter.verify();

    // Create email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Enquiry - Natraj Properties</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a472a; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1a472a; margin-bottom: 5px; }
          .value { margin-left: 10px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🏠 Natraj Properties</h2>
            <p>New Enquiry Received</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(sanitizedData.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(sanitizedData.email)}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(sanitizedData.phone) || "Not provided"}</div>
            </div>
            <div class="field">
              <div class="label">Requirement:</div>
              <div class="value">${escapeHtml(sanitizedData.requirement) || "Not specified"}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(sanitizedData.message) || "No message provided"}</div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated message from your website contact form.</p>
            <p>Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
      Natraj Properties - New Enquiry
      ================================
      
      Name: ${sanitizedData.name}
      Email: ${sanitizedData.email}
      Phone: ${sanitizedData.phone || "Not provided"}
      Requirement: ${sanitizedData.requirement || "Not specified"}
      Message: ${sanitizedData.message || "No message provided"}
      
      Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    const mailOptions = {
      from: `"Natraj Properties Website" <${process.env.SMTP_USER}>`,
      to: "iph08@inphora.in",
      replyTo: sanitizedData.email,
      subject: `New Enquiry: ${sanitizedData.name} - Natraj Properties`,
      html: htmlContent,
      text: textContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return { success: true };
    
  } catch (error) {
    console.error("Detailed error in sendEmail:", error);
    
    // Return user-friendly error message
    let errorMessage = "Failed to send your enquiry. Please try again later.";
    
    if (error instanceof Error) {
      if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "Unable to connect to email server. Please try again later.";
      } else if (error.message.includes("authentication")) {
        errorMessage = "Email service authentication failed. Please contact support.";
      } else {
        errorMessage = error.message;
      }
    }
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}

// Helper function to escape HTML characters
function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}