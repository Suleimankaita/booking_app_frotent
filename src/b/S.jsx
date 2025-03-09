import { useState, useRef } from "react";

const S = ({ onSubmit }) => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus(); // Move to next input
    }

    if (newOtp.every((digit) => digit !== "")) {
      onSubmit(newOtp.join("")); // Submit OTP when filled
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
};

export default S;
