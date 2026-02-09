import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");
        const type = formData.get("type"); // "profile" or "cover"

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Validate file type
        const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: "Invalid file type. Use JPG, PNG, GIF or WebP." }, { status: 400 });
        }

        // Validate file size (2MB max)
        const maxSize = 2 * 1024 * 1024;
        if (file.size > maxSize) {
            return NextResponse.json({ error: "File too large. Max 2MB." }, { status: 400 });
        }

        // Create unique filename
        const ext = file.name.split(".").pop();
        const filename = `${type}/${type}-${Date.now()}.${ext}`;

        // Upload to Vercel Blob
        const { url } = await put(filename, file, { access: "public" });

        return NextResponse.json({ success: true, url });
    } catch (error) {
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
