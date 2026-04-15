import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Student = {
  id: string
  full_name: string
  email: string
  current_level: string
  avatar_url?: string
}

export type Lesson = {
  id: string
  module_code: string
  skill: 'reading' | 'writing' | 'listening' | 'speaking'
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  sublevel: string
  title: string
  description?: string
  duration_minutes?: number
}

export type Activity = {
  id: string
  student_id: string
  lesson_id: string
  title: string
  description?: string
  status: 'todo' | 'in_progress' | 'review' | 'done'
  priority: 'low' | 'medium' | 'high'
  due_date?: string
  position: number
  lesson?: Lesson
}
