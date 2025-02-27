import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "@/app/firebase/config"
import { getDoc, doc } from "firebase/firestore";

export const { auth, handlers:{GET,POST},signIn,signOut } = NextAuth({
    pages: {
        signIn: "/signin",
        signOut: "/signin",
      },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.sub = user.id; // Ensure user ID is defined
              const currentTime = Math.floor(Date.now() / 1000);
              const expiresIn = 60 * 60;
          
              if (!token.sub) {
                throw new Error("User ID is not defined in the token.");
              }
          
              // Check Firestore for role assignment
              const userDocRef = doc(db, "admins", token.sub); // Now safe to use
              token.exp = currentTime + expiresIn;
          
              const userDoc = await getDoc(userDocRef);
              
              if (userDoc.exists()) {
                token.role = userDoc.data().role; // Assign role from Firestore
              } else {
                const retailerDocRef = doc(db, "retailers", token.sub);
                const retailerDoc = await getDoc(retailerDocRef);
                
                if (retailerDoc.exists()) {
                  token.role = retailerDoc.data().role; // Assign retailer role
                }
              }
            }
          
            return token; // Return the updated token
          },
          
        async session({ session, token }) {
    
          if (token) {
            session.user.id = token.sub; // Set user ID
            session.user.role = token.role || null; // Ensure role is set
          }
    
          return session; // Return the updated session
        },
      },
  ...authConfig,
  adapter: PrismaAdapter(db),
  session:{strategy: "jwt"},
})