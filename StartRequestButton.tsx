// components/StartRequestButton.tsx
const START_REQUEST_URL = "https://pmcloud1.com/c/l"; // URL tracking ngoài

type Props = {
  className?: string;
};

export default function StartRequestButton({ className = "" }: Props) {
  return (
    <a
      href={START_REQUEST_URL}
      className={`button button--primary hero__primary-button ${className}`}
      rel="noopener noreferrer"
    >
      Start My Request
    </a>
  );
}
