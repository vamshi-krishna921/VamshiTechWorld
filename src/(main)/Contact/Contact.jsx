import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as MailIcon } from "../../assets/mail.svg"; // Import as ReactComponent
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg"; // Import as ReactComponent
import { ReactComponent as LocationIcon } from "../../assets/location.svg"; // Import as ReactComponent
import "./Contact.css";
// import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setResult("Please fill in all required fields.");
      return;
    }

    const data = new FormData(e.target);
    // IMPORTANT: Replace with your actual access key from Web3Forms
    data.append("access_key", "YOUR_ACTUAL_WEB3FORMS_ACCESS_KEY"); // <<< REPLACE THIS WITH YOUR KEY
    data.append("subject", "New Contact Form Submission from Vamshi Courses");
    data.append("from_name", formData.name);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await response.json();

      if (json.success) {
        setResult("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        setResult(json.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };
  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="container">
          {/* header */}
          <div className="header">
            <h1>Get In Touch</h1>
            <p>
              {" "}
              Have questions about our courses? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* grid for contact info */}
          <div className="grid">
            <div className="left-grid">
              <div className="mail">
                {/* contact info */}
                <MailIcon alt="Email Icon" /> {/* Use as a React component */}
                <div>
                  <h3>Email</h3>
                  <p>vamshitechworld@gmail.com</p>
                </div>
              </div>
              {/* phone */}
              <div className="phone">
                <PhoneIcon alt="Phone Icon" /> {/* Use as a React component */}
                <div>
                  <h3>Phone</h3>
                  <p>91820 53783</p>
                </div>
              </div>
              {/* location */}
              <div className="location">
                <LocationIcon alt="Location Icon" />{" "}
                {/* Use as a React component */}
                <div>
                  <h3>Location</h3>
                  <p>Lmd colony,thimmpur,karimnagar</p>
                </div>
              </div>
            </div>
            <div className="right-grid">
              {/* form for enquiry */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-contact">
                  {result && (
                    <p
                      className={
                        result.includes("successfully")
                          ? "form-success"
                          : "form-error"
                      }
                    >
                      {result}
                    </p>
                  )}
                  <div>
                    <label htmlFor="name" className="name">
                      name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="email">
                      email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="phone">
                      phone*
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="message">
                      message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your interests and questions..."
                      rows={6}
                      required
                    />
                  </div>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
