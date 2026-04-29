type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message || !isValidEmail(email)) {
      return Response.json(
        { ok: false, message: "Name, valid email, and message are required." },
        { status: 400 },
      );
    }

    return Response.json({
      ok: true,
      message: "Contact request received.",
      lead: {
        name,
        email,
        projectType: body.projectType?.trim() || "Not specified",
        message,
        receivedAt: new Date().toISOString(),
      },
    });
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request payload." },
      { status: 400 },
    );
  }
}
