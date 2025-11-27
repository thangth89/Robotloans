// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import PmLanderReloader from "@/components/sections/PmLanderReloader";

export const metadata: Metadata = {
  title: "Trusted Online Loans – A smarter way to borrow",
  description:
    "Get cash fast, deposited right to your bank. Request loans from $200 to $5,000 with all credit scores considered.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/* Tracking permate */}
      <head>
        {/*  <Script
          id="p-lander-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,r){
                var i=t.createElement('script'),n=t.scripts[0];
                i.defer=!0;
                i.src=r+(-1===r.indexOf('?')?'?':'&')+'time='+(new Date).getTime();
                n.parentNode.insertBefore(i,n)
              }(window,document,'https://pmcdn1.com/l.js');
            `,
          }}
        /> */}
        <PmLanderReloader />
      </head>
      <body className="page-body">
      {/* FB Pixel cho toàn site */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '701205933041419');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=701205933041419&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
       {children}
      </body>
    </html>
  );
}
