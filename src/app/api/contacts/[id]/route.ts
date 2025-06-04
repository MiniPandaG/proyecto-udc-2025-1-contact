import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

// Helper function para manejar parámetros
async function getParams(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  return { id };
}

export async function GET(request: NextRequest) {
  try {
    const { id } = await getParams(request);
    const token = await getToken({ req: request });
    
    if (!token?.sub) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    await connectToDB();
    
    const contact = await Contact.findOne({
      _id: id,
      userId: token.sub,
    });
    
    if (!contact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id } = await getParams(request);
    const token = await getToken({ req: request });
    
    if (!token?.sub) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { name, phone, email } = await request.json();
    
    await connectToDB();
    
    const updatedContact = await Contact.findOneAndUpdate(
      { 
        _id: id,
        userId: token.sub 
      },
      { 
        name, 
        phone, 
        email,
        updatedAt: new Date() 
      },
      { 
        new: true,
        runValidators: true 
      }
    );
    
    if (!updatedContact) {
      return NextResponse.json(
        { error: "Contact not found or not owned by user" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: "Contact updated successfully",
      data: updatedContact
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await getParams(request);
    const token = await getToken({ req: request });
    
    if (!token?.sub) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    await connectToDB();
    
    const deletedContact = await Contact.findOneAndDelete({
      _id: id,
      userId: token.sub,
    });
    
    if (!deletedContact) {
      return NextResponse.json(
        { error: "Contact not found or not owned by user" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}