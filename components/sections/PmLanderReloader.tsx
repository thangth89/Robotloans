// components/PmLanderReloader.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PmLanderReloader() {
  const pathname = usePathname();

  useEffect(() => {
    // Mỗi lần pathname đổi (đi trang khác / back / forward), effect này chạy lại

    // ĐÂY CHÍNH LÀ ĐOẠN INIT BÊN ĐỐI TÁC ĐƯA:
    (function (e, t, r) {
      var i = t.createElement("script"),
        n = t.scripts[0];
      i.defer = !0;
      i.src =
        r +
        (r.indexOf("?") === -1 ? "?" : "&") +
        "time=" +
        new Date().getTime();
      n.parentNode.insertBefore(i, n);
    })(window, document, "https://pmcdn1.com/o.js"); // hoặc l.js tuỳ script
  }, [pathname]); // <-- chạy lại khi đổi path

  return null;
}
