import { errorMessage } from "@/styles/styles.css";

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => {
  return <div className={errorMessage}>{error}</div>;
};

export default ErrorMessage;
