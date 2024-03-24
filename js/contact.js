window.formbutton = window.formbutton || function () {
  (formbutton.q = formbutton.q || []).push(arguments)
};

formbutton("create", {
  action: "https://formspree.io/f/xgegljyb",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    {type: "submit"}
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('#formbutton-button').click()
    });
  });
});
