// app/apply/page.tsx
import Script from "next/script";

export default function ApplyPage() {
  return (
    <main className="apply-page">
      {/* SCRIPT TRACKING CHỈ DÙNG CHO PAGE NÀY */}
      <Script
        id="p-offer-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,t,r){
              var i=t.createElement("script"),n=t.scripts[0];
              i.defer=!0;
              i.src=r+(-1===r.indexOf("?")?"?":"&")+"time="+(new Date).getTime();
              n.parentNode.insertBefore(i,n)
            }(window,document,"https://pmcdn1.com/o.js");
          `,
        }}
      />

      {/* CẤU HÌNH FORM ĐỐI TÁC */}
      <Script
        id="lg-form-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _lg_form_init_ = {
              aff_id: "PARTNER_ID",
              offer_id: "OFFER_ID",
              fb_pixel: "FB_PIXEL_ID",
              tt_pixel: "TIKTOK_PIXEL_ID"
            };
          `,
        }}
      />

      {/* SCRIPT LOAD WIDGET FORM */}
      <Script
        id="lg-form-widget"
        src="https://form.zenfincal.com/loan-widget.iife.js"
        strategy="afterInteractive"
        async
      />

      {/* VỊ TRÍ FORM HIỂN THỊ */}
      <div className="apply-container">
        <div id="_lg_form_" />
      </div>
    </main>
  );
}
