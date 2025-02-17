import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qoigforlqmwxfqnbjuud.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvaWdmb3JscW13eGZxbmJqdXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNzQxODgsImV4cCI6MjA1NDk1MDE4OH0.3DADKQckFOzH2ZBdrTL95Vxvl6PMEpFyaQwM0V4uLhs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
