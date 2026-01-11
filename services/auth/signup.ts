import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";
import { 
  RegisterProps, 
  LoginProps, 
  AuthResult, 
  User, 
  UserWithoutPassword 
} from "@/types/auth";

// Register new user
export const signup = async ({ 
  name, 
  email, 
  password 
}: RegisterProps): Promise<AuthResult> => {
  try {
    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return {
        success: false,
        error: "User already exists with this email"
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          role: "USER" as const,
        },
      ])
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    const user = data as User;
    const { password: _, ...userWithoutPassword } = user;

    return { 
      success: true, 
      user: userWithoutPassword 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

// Login user
export const loginUser = async ({ 
  email, 
  password 
}: LoginProps): Promise<AuthResult> => {
  try {
    // Get user by email
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !data) {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    const user = data as User;

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return { 
      success: true, 
      user: userWithoutPassword 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

// Get user by email (for NextAuth)
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data as User | null;
};