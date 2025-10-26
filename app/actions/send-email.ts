'use server';

import { Resend } from 'resend';

import type { ContactFormResponse } from '@/lib/types';

const resend = new Resend(process.env.RESEND_API_KEY);

const RESEND_FROM = process.env.RESEND_FROM_EMAIL ?? 'EVABO Kenya <notifications@resend.dev>';
const RESEND_TO = process.env.RESEND_TO_EMAIL ?? 'hello@evabokenya.org';

const missingCredentials = !process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL;

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function sendContactEmail(formData: FormData): Promise<ContactFormResponse> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email) {
    return {
      success: false,
      message: 'Please provide your name and a valid email so we can reach you.'
    };
  }

  if (missingCredentials) {
    console.warn('RESEND credentials missing. Skipping email send.');
    return {
      success: true,
      message: 'Thanks for reaching out! We will contact you shortly.'
    };
  }

  try {
    const plainText = `New EVABO Kenya enquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nMessage: ${message}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
        <h2 style="color: #2A6B47;">New EVABO Kenya website enquiry</h2>
        <p>You have received a new contact request from the EVABO marketing site.</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 8px; background: #F5F8F7;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email</td>
              <td style="padding: 8px; background: #F5F8F7;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Organisation</td>
              <td style="padding: 8px; background: #F5F8F7;">${escapeHtml(company || 'N/A')}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone</td>
              <td style="padding: 8px; background: #F5F8F7;">${escapeHtml(phone || 'N/A')}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 16px;">
          <p style="font-weight: bold;">Message</p>
          <p style="background: #F5F8F7; padding: 12px; border-radius: 12px;">${
            escapeHtml(message || 'The sender did not include additional notes.')
          }</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: RESEND_FROM,
      to: [RESEND_TO],
      reply_to: email,
      subject: `New enquiry from ${name}`,
      text: plainText,
      html
    });

    return {
      success: true,
      message: 'Thanks for reaching out! Our team will contact you within 48 hours.'
    };
  } catch (error) {
    console.error('Resend error', error);
    return {
      success: false,
      message: 'Something went wrong while sending your message. Please try again later or call us.'
    };
  }
}
