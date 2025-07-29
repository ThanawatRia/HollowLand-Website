import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      discordId?: string
    }
  }
  
  interface User {
    discordId?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    discordId?: string
  }
}

declare module "next-auth/providers/discord" {
  interface DiscordProfile {
    id: string
    username: string
    avatar: string
    discriminator: string
    public_flags: number
    flags: number
    locale: string
    mfa_enabled: boolean
    premium_type: number
  }
} 