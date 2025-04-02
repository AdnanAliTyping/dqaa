
const ContactMap = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.161894484152!2d76.3629884!3d10.798583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c5cd427e5007%3A0x228950174feaa3e0!2sDarul%20Quran%20Abdulla%20Academy!5e0!3m2!1sen!2sin!4v1694956525950!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "inherit" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
