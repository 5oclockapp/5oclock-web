import React, { useState, useCallback, useMemo } from "react";

// --- 1. MOCK TYPES & SERVICES ---

const FormStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sendContactMessage = async (data: any) => {
  console.log("Mock API call received data:", data);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (Math.random() < 0.8) {
    return "Thank you for reaching out! Your message has been successfully sent and we'll be in touch shortly.";
  } else {
    return "We're sorry, an unexpected server error occurred. Please try submitting again.";
  }
};

// --- 2. ICONS ---

const Icon = ({
  children,
  className = "w-5 h-5",
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={`text-gray-400 ${className}`}>{children}</span>;

const UserIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </Icon>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
    </svg>
  </Icon>
);

const MessageIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  </Icon>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.65-5.65A19.79 19.79 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 17.61 17.61 0 0 0 .8 3.97 2 2 0 0 1-.41 2.12l-1.35 1.35a1 1 0 0 0 0 1.41 15.73 15.73 0 0 0 8.07 8.07 1 1 0 0 0 1.41 0l1.35-1.35a2 2 0 0 1 2.12-.41 17.61 17.61 0 0 0 3.97.8A2 2 0 0 1 22 16.92z" />
    </svg>
  </Icon>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  </Icon>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  </Icon>
);

// --- 3. FIELD COMPONENTS ---

const InputField = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  icon,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  error?: string;
}) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <div className="relative flex items-center">
      <div className="absolute left-3">{icon}</div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full py-2.5 pl-10 pr-4 text-white bg-black/30 border rounded-lg backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-[#B175FF] placeholder-gray-500 transition-all
          ${
            error
              ? "border-red-500"
              : "border-gray-700 hover:border-[#4AAFFF]/40"
          }`}
      />
    </div>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const TextAreaField = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  icon,
  error,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  error?: string;
}) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <div className="relative">
      <div className="absolute top-3 left-3">{icon}</div>
      <textarea
        id={id}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full py-2.5 pl-10 pr-4 text-white bg-black/30 border rounded-lg backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-[#B175FF] placeholder-gray-500 transition-all resize-y
          ${
            error
              ? "border-red-500"
              : "border-gray-700 hover:border-[#4AAFFF]/40"
          }`}
      />
    </div>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

// --- 4. CONTACT INFO CARD ---

const InfoItem = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start p-4 rounded-xl bg-black/40 backdrop-blur-md border border-gray-700 hover:border-[#B175FF]/30 transition">
    <div className="p-2 rounded-full bg-gray-800/60 text-[#B175FF]">{icon}</div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm whitespace-pre-wrap">{content}</p>
    </div>
  </div>
);

const ContactInfoCard = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-extrabold text-white">Contact Information</h2>
    <p className="text-gray-400">
      Whether you&apos;re looking to partner with us or just have a general
      inquiry, we&apos;d love to hear from you.
    </p>
    <div className="space-y-4 pt-4">
      <InfoItem
        icon={<EmailIcon />}
        title="Email Us"
        content="hello@yourcompany.app"
      />
      <InfoItem
        icon={<PhoneIcon />}
        title="Call Us"
        content="+1 (647) 555-FIRST"
      />
      <InfoItem
        icon={<LocationIcon />}
        title="Visit Us"
        content="Toronto, ON\nCanada"
      />
      <InfoItem
        icon={<ClockIcon />}
        title="Business Hours"
        content="Mon-Fri: 9 AM - 6 PM\n24/7 Support"
      />
    </div>
  </div>
);

// --- 5. MAIN CONTACT FORM ---

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(FormStatus.Idle);
  const [responseMessage, setResponseMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});

  const validate = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus(FormStatus.Loading);
    try {
      const result = await sendContactMessage(formData);
      setStatus(
        result.startsWith("We're sorry") ? FormStatus.Error : FormStatus.Success
      );
      if (status === FormStatus.Success)
        setFormData({ name: "", email: "", message: "" });
      setResponseMessage(result);
    } catch {
      setStatus(FormStatus.Error);
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  const isSubmitting = status === FormStatus.Loading;

  const messageStyles = useMemo(() => {
    const base = "mt-6 p-4 rounded-lg text-center text-sm sm:text-base";
    if (status === FormStatus.Success)
      return `${base} bg-green-900/40 text-green-300 border border-green-700`;
    if (status === FormStatus.Error)
      return `${base} bg-red-900/40 text-red-300 border border-red-700`;
    return base;
  }, [status]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 font-[Inter] relative bg-gradient-to-br from-black via-[#0a0014] to-[#040018] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,117,255,0.12),_transparent_60%),_radial-gradient(circle_at_bottom_left,_rgba(74,175,255,0.12),_transparent_60%)]"></div>

      <div className="relative z-10 w-full max-w-6xl p-6 sm:p-10 rounded-2xl border border-[#B175FF]/20 bg-black/30 backdrop-blur-md shadow-[0_0_40px_rgba(177,117,255,0.1)]">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* LEFT FORM */}
          <div>
            <div className="rounded-2xl p-6 sm:p-8 border border-[#B175FF]/20 bg-transparent backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(177,117,255,0.2)] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <InputField
                  id="name"
                  name="name"
                  label="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  icon={<UserIcon />}
                  error={errors?.name ?? ""}
                />
                <InputField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  icon={<EmailIcon />}
                  error={errors?.email ?? ""}
                />
                <TextAreaField
                  id="message"
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  icon={<MessageIcon />}
                  error={errors?.message ?? ""}
                />
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 font-semibold rounded-lg text-white
                    bg-gradient-to-r from-[#B175FF] to-[#4AAFFF]
                    hover:from-white hover:to-white hover:text-black transition-all duration-300
                    shadow-lg hover:shadow-[0_0_25px_rgba(177,117,255,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
            {responseMessage && (
              <div className={messageStyles}>
                <p>{responseMessage}</p>
              </div>
            )}
          </div>

          {/* RIGHT INFO CARD */}
          <ContactInfoCard />
        </div>
      </div>
    </div>
  );
};

// --- EXPORT ---
export default function App() {
  return <ContactForm />;
}
