import React from 'react';

export default function Contact() {
  const contacts = [
    ['https://mail.google.com/mail/?view=cm&fs=1&to=parthamchawla1@gmail.com', '/Logos/gmail.png', 'Gmail', 'parthamchawla1@gmail.com'],
    ['https://www.linkedin.com/in/partham-kumar-a8494021a/', '/Logos/linkedin.png', 'LinkedIn', 'partham-kumar-a8494021a'],
    ['https://github.com/ParthamKumar', '/Logos/github.png', 'GitHub', 'github.com/ParthamKumar'],
    ['https://wa.me/923363428830', '/Logos/whatsapp.png', 'WhatsApp', '+92 336 3428830'],
  ];
  return <section className="contact" id="contact"><div className="container"><div className="section-header"><h2 className="section-title">Let's Connect</h2><p className="section-subtitle">Ready to bring your ideas to life</p></div><div className="contact-links"><div className="contact-cards">{contacts.map(([href, icon, label, value]) => <a href={href} target="_blank" rel="noreferrer" className="contact-card" key={label}><span className="contact-logo"><img src={icon} alt={label} /></span><span className="contact-label">{label}</span><span className="contact-value">{value}</span></a>)}<a href="https://www.instagram.com/parthamchawla1/?hl=en" target="_blank" rel="noreferrer" className="contact-card"><span className="contact-logo"><img src="/Logos/icons8-instagram-48.png" alt="Instagram" /></span><span className="contact-label">Instagram</span><span className="contact-value">@parthamchawla1</span></a></div></div></div></section>;
}
