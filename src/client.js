
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://epcmpzuhaqvoxmydezrh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwY21wenVoYXF2b3hteWRlenJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MjY3NjcsImV4cCI6MjAzNjAwMjc2N30.IrV1fy0fWEtz6cmP_tFXwo1RNnMCxmZgDut6ycwUGUc'
export const supabase = createClient(supabaseUrl, supabaseKey)