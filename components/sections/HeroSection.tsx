"use client";

import { useEffect, useRef, useState } from "react";
import { heroConfig } from "../../lib/loanSiteConfig";

const REQUEST_URL = "https://example.com"; // nếu muốn nút Start My Request mở link ngoài

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState<number>(500);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // click ra ngoài để đóng dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="page-container hero__inner">
        {/* LEFT */}
        <div className="hero__left">

          <h1 className="hero__title">
            A <span className="hero__title-accent">smarter</span> way to borrow
          </h1>

          <p className="hero__subtitle">{heroConfig.subHeadline}</p>

          <div className="hero__amount">
            <p className="hero__amount-label">
              How much would you like to borrow? ($200 – $5,000)
            </p>

            {/* Dropdown custom */}
            <div className="hero-amount-card" ref={dropdownRef}>
              <button
                type="button"
                className="hero-amount-card__select hero-amount-card__select--button"
                onClick={() => setIsOpen((v) => !v)}
              >
                <span>${amount.toLocaleString()}</span>
                <span className="hero-amount-card__arrow" aria-hidden="true">
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className="hero-amount-card__menu">
                  {heroConfig.amountOptions.map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={
                        "hero-amount-card__option" +
                        (value === amount ? " is-active" : "")
                      }
                      onClick={() => {
                        setAmount(value);
                        setIsOpen(false);
                      }}
                    >
                      ${value.toLocaleString()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nút mở link */}
            <a
              href={REQUEST_URL}
              rel="noopener noreferrer"
              className="button button--primary hero__primary-button"
            >
              Start My Request
            </a>

            {/* 3 badge bảo mật */}
            <div className="hero__security">
              <div className="hero__security-badge">SECURED BY SECTIGO</div>
              <div className="hero__security-badge">SSL SECURED</div>
              <div className="hero__security-badge">OLA MEMBER</div>
            </div>
          </div>

          <p className="hero__legal">{heroConfig.aprNote}</p>
        </div>

        {/* RIGHT */}
        <div className="hero__right">
          <div className="hero-graphic">
            <div className="hero-graphic__bg" />
            <img
              src="/hero-family.webp"
              alt="Happy family"
              className="hero-graphic__image"
            />
          </div>
        </div>
      </div>

      <div className="hero__divider" />
    </section>
  );
}
