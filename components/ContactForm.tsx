"use client";

import { useState } from "react";
import TelegramButton from "./TelegramButton";

const FIELDS = [
  { id: "company", label: "업체명", type: "text", required: true },
  { id: "contactName", label: "담당자명", type: "text", required: true },
  { id: "contactInfo", label: "연락처 / Telegram ID", type: "text", required: true },
  { id: "serviceType", label: "필요 서비스 (예: 광고 운영, 리드 제너레이션)", type: "text", required: false },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 백엔드 연동이 아직 준비되지 않았습니다.
    // 실제 접수 처리(이메일 전송, DB 저장 등)를 연결한 뒤
    // 이 부분을 실제 제출 로직으로 교체하세요.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-surface p-8">
        <p className="text-base font-semibold text-ink">
          문의 폼 접수 기능은 현재 준비 중입니다.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          입력하신 내용은 아직 전송되지 않았습니다. 빠른 상담을 원하시면
          아래 Telegram 버튼으로 문의해 주세요.
        </p>
        <div className="mt-5">
          <TelegramButton />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label htmlFor={field.id} className="text-sm font-medium text-ink">
              {field.label}
              {field.required && <span className="text-accent"> *</span>}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              className="border border-line bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-navy"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="border border-line bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-navy"
          placeholder="필요하신 서비스 범위나 예산, 일정 등을 자유롭게 남겨주세요."
        />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        실제 개인정보 처리 방식은 서비스 운영 방식에 따라 별도로
        안내됩니다. 문의 기능 및 개인정보 처리 방식은 실제 서비스
        운영 방식에 맞춰 설정되며, 관련 고지사항은 기능 도입 시
        함께 안내합니다.
      </p>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
      >
        문의 보내기 <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
