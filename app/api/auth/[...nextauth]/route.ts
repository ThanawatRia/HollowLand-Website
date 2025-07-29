import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // เก็บข้อมูลเพิ่มเติมจาก Discord
      if (account && profile) {
        token.accessToken = account.access_token
        // Type assertion to ensure profile has id property - Fixed for Vercel deployment
        const discordProfile = profile as any
        token.discordId = discordProfile.id
      }
      return token
    },
    async session({ session, token }) {
      // ส่งข้อมูลไปยัง client session
      session.accessToken = token.accessToken
      session.user.discordId = token.discordId
      return session
    },
  },
  pages: {
    signIn: '/auth/signin', // หน้า custom sign in (ถ้าต้องการ)
  },
})

export { handler as GET, handler as POST } 