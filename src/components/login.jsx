import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Setting up usestates for all inputs needed
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // This functions validates the inputs of the form
  const validateForm = () => {
    const newErrors = {};

    // Check if enrollment number is provided or not
    if (!enrollmentNumber.trim()) {
      newErrors.enrollmentNumber = "Enrollment number is required";
    } else if (!/^\d{12}$/.test(enrollmentNumber)) {
      newErrors.enrollmentNumber = "Invalid enrollment number";
    }

    if (!phoneNumber.trim()) {
      // Validate phone number
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // This function will get called when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully");
      navigate("/departments");
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Enrollment Number:</label>
          <input
            type="text"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
          />
          {errors.enrollmentNumber && <p>{errors.enrollmentNumber}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
