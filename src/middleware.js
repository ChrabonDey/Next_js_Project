import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    const url = new URL(request.url);
    const redirectPath = url.pathname.includes("/post/post-details/")
      ? `/api/auth/login?post_login_redirect_url=${url.pathname}`
      : "/api/auth/login?post_login_redirect_url=/profile";

    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/post/post-details/:path*", "/profile"], 
};
