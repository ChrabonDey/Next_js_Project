import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request) {
  
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
 
  const url = new URL(request.url);
  const postId = url.pathname.match(/^\/post\/post-details\/([^/]+)/)?.[1];  

 
  if (!user) {
    return NextResponse.redirect(
      new URL(`/api/auth/login?post_login_redirect_url=/post/post-details/${postId}`, request.url)
    );
  }
  if (!user) {
    return NextResponse.redirect(
      new URL("/api/auth/login?post_login_redirect_url=/profile", request.url)
    );
  }


  return NextResponse.next();
}

export const config = {
  matcher: ['/post/post-details/:post_id','/profile'],  
};
