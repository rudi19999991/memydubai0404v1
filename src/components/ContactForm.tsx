"use client";

import { useRef, useState } from "react";
import { EMAILJS_CONFIG, TARGET_EMAIL } from "@/lib/constants";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!formRef.current) {
      setLoading(false);
      setMessage("Form not found.");
      return;
    }

    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const messageInput = formData.get("message") as string;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: messageInput,
      to_email: TARGET_EMAIL, // Optional: only if needed in EmailJS template
    };

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_CONTACT, // ✅ Correct template ID
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log("SUCCESS!", result.text);
      setMessage("Your message has been sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {message && (
        <div className="mt-4 text-center text-sm">
          {message}
        </div>
      )}
    </div>
  );
}
