import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, projectType, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, phone, email, projectType });

    // Send notification email to company
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Web formulár <info@odzakladu.sk>",
        to: ["info@odzakladu.sk"],
        subject: `Nová správa z webu - ${projectType || "Kontakt"}`,
        html: `
          <h2>Nová správa z kontaktného formulára</h2>
          <p><strong>Meno:</strong> ${name}</p>
          <p><strong>Telefón:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Neuvedený"}</p>
          <p><strong>Typ projektu:</strong> ${projectType || "Neuvedený"}</p>
          <p><strong>Správa:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      console.error("Error sending notification email:", error);
      throw new Error(`Failed to send notification email: ${error}`);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to customer if email provided
    if (email) {
      const confirmationRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "OD ZÁKLADU <info@odzakladu.sk>",
          to: [email],
          subject: "Ďakujeme za vašu správu - OD ZÁKLADU",
          html: `
            <h1>Ďakujeme za vašu správu, ${name}!</h1>
            <p>Prijali sme vašu správu a budeme vás kontaktovať čo najskôr.</p>
            <p><strong>Vaša správa:</strong></p>
            <p>${message}</p>
            <br>
            <p>S pozdravom,<br>Tím OD ZÁKLADU</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              OD ZÁKLADU<br>
              Tel: +421 908 867 350<br>
              Email: info@odzakladu.sk
            </p>
          `,
        }),
      });

      if (!confirmationRes.ok) {
        console.error("Error sending confirmation email:", await confirmationRes.text());
      } else {
        console.log("Confirmation email sent successfully");
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
