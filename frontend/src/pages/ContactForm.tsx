import { useState } from "react"
import Error from "../components/Error";

type FormErrors = Record<string, string>; // [key: string]: string
const ContactForm = () => {   
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); 
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    console.log("Form Errors:", formErrors);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus("");
    // API CALL HERE 
    try {
      const response = await fetch("https://personalwebsite-a8vi.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        console.log("Form submitted successfully:", data);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-12 max-w-2xl w-full bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border rounded w-full py-2 px-3
              ${errors.name ? "border-red-500" : "border-gray-300"}
            `}
          />
          <Error message={errors.name} />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          className={`border rounded w-full py-2 px-3
            ${errors.email ? "border-red-500" : "border-gray-300"}
          `}
          />
          <Error message={errors.email} />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`border rounded w-full py-2 px-3
              ${errors.message ? "border-red-500" : "border-gray-300"}
            `}
          ></textarea>
          <Error message={errors.message} />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-2 px-4 rounded text-white
            ${isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      {submitStatus && (
        <p className={`mt-4 text-sm
          ${submitStatus.includes("success")
            ? "text-green-600"
            : "text-red-600"
          }`}
        >
          {submitStatus}
        </p>
      )}
    </div>
  )
}
export default ContactForm