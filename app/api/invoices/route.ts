import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session.user as { id: string }).id;
  const isAdmin = (session.user as { role: string }).role === "ADMIN";

  const invoices = await db.invoice.findMany({
    where: isAdmin ? {} : { userId },
    orderBy: { createdAt: "desc" },
    include: isAdmin ? { user: { select: { name: true, company: true } } } : undefined,
  });

  return NextResponse.json(invoices);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || (session.user as { role: string }).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, amount, status, dueDate, pdfPath, notes, userId } = body;

  if (!title || !userId || !pdfPath) {
    return NextResponse.json({ error: "Title, userId, and pdfPath are required." }, { status: 400 });
  }

  const invoice = await db.invoice.create({
    data: {
      title,
      amount: amount ?? null,
      status: status ?? "PENDING",
      dueDate: dueDate ? new Date(dueDate) : null,
      pdfPath,
      notes: notes ?? null,
      userId,
    },
  });

  return NextResponse.json(invoice, { status: 201 });
}
