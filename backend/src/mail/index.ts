const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");

/**
 * @description Generates an HTML email template for notifying a user about their account creation by an admin.
 * @param email - The email address of the user.
 * @param password - The temporary password assigned to the user.
 * @param loginUrl - (Optional) The URL for the user to log in. Defaults to the LOGIN_URL environment variable.
 * @returns A string containing the HTML email template.
 */
export const mailForCreateUserByAdmin = (
    email: string,
    password: string,
    loginUrl: string = process.env.LOGIN_URL ?? ""
) => {
    const safeEmail = escapeHtml(email);
    const safePassword = escapeHtml(password);
    const safeLoginUrl = loginUrl ? escapeHtml(loginUrl) : "";
    const year = new Date().getFullYear();

    return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Your NASL-Lab Account</title>
        <!--[if mso]>
            <noscript>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
            </noscript>
        <![endif]-->
        <style>
            /* Light reset */
            html, body { margin: 0 !important; padding: 0 !important; height: 100% !important; width: 100% !important; }
            * { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
            table, td { mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; }
            table { border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important; }
            img { -ms-interpolation-mode: bicubic; }
            a { text-decoration: no     ne; }

            /* Responsive */
            @media screen and (max-width: 620px) {
                .container { width: 100% !important; }
                .px { padding-left: 16px !important; padding-right: 16px !important; }
                .card { border-radius: 14px !important; }
                .h1 { font-size: 22px !important; line-height: 28px !important; }
                .btn { display: block !important; width: 100% !important; }
                .btn a { display: block !important; }
            }
        </style>
    </head>
    <body style="margin:0; padding:0; background:#f6f8fc; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; color:#0f172a;">
        <!-- Preheader (hidden) -->
        <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
            Your NASL-Lab account has been created. Sign in with the credentials below.
        </div>

        <table role="presentation" width="100%" style="background:#f6f8fc;">
            <tr>
                <td align="center" style="padding: 28px 12px;">
                    <table role="presentation" width="600" class="container" style="width:600px; max-width:600px;">
                        <!-- Header -->
                        <tr>
                            <td class="px" style="padding: 0 24px 14px 24px;">
                                <table role="presentation" width="100%" style="border-radius: 18px; overflow:hidden;">
                                    <tr>
                                        <td style="padding: 18px 20px; background: linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 45%, #22c55e 100%);">
                                            <div style="font-weight:700; letter-spacing:0.3px; font-size:16px; color:#ffffff;">NASL-Lab</div>
                                            <div style="font-size:12px; opacity:0.9; color:#ffffff; margin-top:4px;">Next-Generation Adaptive System Lab</div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Card -->
                        <tr>
                            <td class="px" style="padding: 0 24px;">
                                <table role="presentation" width="100%" class="card" style="background:#ffffff; border-radius:18px; box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);">
                                    <tr>
                                        <td style="padding: 22px 22px 8px 22px;">
                                            <div class="h1" style="font-size:24px; line-height:30px; font-weight:800; margin:0;">Your account has been created</div>
                                            <div style="margin-top:10px; font-size:14px; line-height:20px; color:#334155;">
						Hi ${safeEmail},<br />
						An administrator has created your NASL-Lab account. Use the credentials below to sign in.
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- Credentials -->
                                    <tr>
                                        <td style="padding: 0 22px 18px 22px;">
                                            <table role="presentation" width="100%" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px;">
                                                <tr>
                                                    <td style="padding: 14px 14px 10px 14px; font-size:12px; color:#475569; font-weight:700; letter-spacing:0.2px;">
                                                        SIGN-IN DETAILS
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 14px 14px 14px;">
                                                        <table role="presentation" width="100%">
                                                            <tr>
                                                                <td style="padding: 8px 0; width: 160px; font-size:13px; color:#64748b;">Email</td>
                                                                <td style="padding: 8px 0; font-size:13px; color:#0f172a; font-weight:700;">${safeEmail}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 8px 0; width: 160px; font-size:13px; color:#64748b;">Temporary password</td>
                                                                <td style="padding: 8px 0; font-size:13px; color:#0f172a; font-weight:700;">
                                                                    <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; background:#0b1220; color:#e2e8f0; padding: 6px 10px; border-radius: 10px; display:inline-block;">${safePassword}</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- CTA -->
                                    ${safeLoginUrl
            ? `
                                    <tr>
                                        <td style="padding: 0 22px 10px 22px;">
                                            <table role="presentation" class="btn" style="margin: 0 auto;">
                                                <tr>
                                                    <td align="center" style="border-radius: 12px; background:#1d4ed8;">
                                                        <a href="${safeLoginUrl}" style="display:inline-block; padding: 12px 18px; color:#ffffff; font-weight:700; font-size:14px;">Open NASL-Lab</a>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div style="margin-top:10px; font-size:12px; line-height:18px; color:#64748b; text-align:center;">
                                                If the button doesn’t work, copy and paste this link: <span style="color:#1d4ed8;">${safeLoginUrl}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    `
            : ""}

                                    <!-- Security note -->
                                    <tr>
                                        <td style="padding: 6px 22px 22px 22px;">
                                            <div style="font-size:12px; line-height:18px; color:#475569;">
                                                For security, please change your password after your first login and do not share your credentials.
                                            </div>
                                            <div style="margin-top:10px; font-size:12px; line-height:18px; color:#94a3b8;">
                                                If you didn’t request this account, you can ignore this email.
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td class="px" style="padding: 14px 24px 0 24px;">
                                <div style="text-align:center; font-size:12px; line-height:18px; color:#94a3b8;">
                                    © ${year} NASL-Lab. All rights reserved.
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>`;
};