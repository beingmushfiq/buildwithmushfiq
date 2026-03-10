import { Request, Response } from 'express';

export const handleContactForm = async (req: Request, res: Response): Promise<void> => {
  const { name, email, projectType, budget, timeline, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  try {
    // In a real production scenario, this is where you'd integrate Resend, SendGrid, or Nodemailer.
    // For this demonstration, we will log it and simulate a successful send.
    console.log("New Lead Received!");
    console.log("------------------");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Project: ${projectType || 'N/A'}`);
    console.log(`Budget: ${budget || 'N/A'}`);
    console.log(`Timeline: ${timeline || 'N/A'}`);
    console.log(`Message: ${message}`);
    console.log("------------------");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.status(200).json({ success: true, message: "Message sent successfully! Mushfiq will get back to you soon." });
  } catch (error) {
    console.error("Contact Form Error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
};
