/**
 * Supabase Database and Application Types
 * Designed for future portfolio content management while preserving
 * compatibility with existing static schemas.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface ProfileRecord {
  id: string;
  full_name: string;
  headline: string;
  bio: string;
  university: string;
  faculty: string;
  academic_year: string;
  bac_year: number;
  location: string;
  status: string;
  email: string;
  github_url: string;
  linkedin_url: string;
  updated_at?: string;
}

export interface EducationRecord {
  id: string | number;
  period: string;
  qualification: string;
  institution: string;
  location: string;
  description: string;
  coursework: string[];
  sort_order?: number;
  created_at?: string;
}

export interface SkillItem {
  name: string;
  status: string;
  desc: string;
}

export interface SkillCategoryRecord {
  id: string | number;
  category: string;
  items: SkillItem[];
  sort_order?: number;
  created_at?: string;
}

/**
 * Raw row schema stored in Supabase projects table (PostgreSQL snake_case convention)
 */
export interface ProjectDbRow {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  github_url: string;
  demo_url: string | null;
  featured: boolean;
  sort_order?: number;
  created_at?: string;
}

/**
 * Normalized application project model consumed by UI components (camelCase convention)
 */
export interface ProjectRecord {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string | null;
  featured: boolean;
  sort_order?: number;
  created_at?: string;
}

export interface ContactMessageRecord {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  status?: "unread" | "read" | "archived";
}

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: ProfileRecord;
        Insert: Partial<ProfileRecord> & Pick<ProfileRecord, "full_name" | "headline">;
        Update: Partial<ProfileRecord>;
        Relationships: [];
      };
      education: {
        Row: EducationRecord;
        Insert: Omit<EducationRecord, "id" | "created_at"> & { id?: string | number };
        Update: Partial<EducationRecord>;
        Relationships: [];
      };
      skills: {
        Row: SkillCategoryRecord;
        Insert: Omit<SkillCategoryRecord, "id" | "created_at"> & { id?: string | number };
        Update: Partial<SkillCategoryRecord>;
        Relationships: [];
      };
      projects: {
        Row: ProjectDbRow;
        Insert: Omit<ProjectDbRow, "created_at">;
        Update: Partial<ProjectDbRow>;
        Relationships: [];
      };
      contact_messages: {
        Row: ContactMessageRecord;
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          created_at?: string;
          status?: "unread" | "read" | "archived";
        };
        Update: Partial<ContactMessageRecord>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
