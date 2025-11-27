"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PmLanderReloader() {
  const pathname = usePathname();

  useEffect(() => {
    // ⬇⬇⬇ CHÍNH LÀ SCRIPT GỐC, VIẾT LẠI SẠCH HƠN CHO TS ⬇⬇⬇
    (function (e: Window, t: Document, r: string) {
      const i = t.createElement("script"); // var i = t.createElement("script")
      const n = t.scripts[0];             // var n = t.scripts[0];

      i.defer = true;                     // i.defer = !0;
      i.src =
        r +
        (r.indexOf("?") === -1 ? "?" : "&") + // r+(-1===r.indexOf("?")?"?":"&")
        "time=" +
        new Date().getTime();                 // +"time="+(new Date).getTime()

      // n.parentNode.insertBefore(i,n) nhưng có check cho đỡ lỗi TS:
      if (n && n.parentNode) {
        n.parentNode.insertBefore(i, n);
      } else if (t.head) {
        t.head.appendChild(i);
      } else {
        t.body.appendChild(i);
      }
    })(window, document, "https://pmcdn1.com/l.js"); // đúng URL gốc
    // ⬆⬆⬆ CHỖ NÀY LÀ GỌI HÀM !function(...)(window,document,"https://pmcdn1.com/o.js")
  }, [pathname]); // đổi route/back là chạy lại

  return null;
}

