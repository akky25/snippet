import styles from "./index.module.css";

export const ContactForm = () => {
  return (
    <form
      className={styles.form}
      onSubmit={submitForm}
      method="POST"
      action={SUBMIT_URL}
    >
      <label>
        name
        <input type="text" />
      </label>
      <label>
        email
        <input type="email" />
      </label>
      <label>
        message
        <textarea />
      </label>
      <button>送信</button>
    </form>
  );
};

const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

async function submitForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  try {
    if (form.action !== SUBMIT_URL) {
      alert("フォームのaction値が正しくありません");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("フォームのmethod値が正しくありません");
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (_) {
    alert("フォームの送信中にエラーが発生しました！");
  }
}
