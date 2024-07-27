import "./styles.css";

function Component() {
  return (
    <form
      method="POST"
      action="https://www.greatfrontend.com/api/questions/contact-form"
      // Ignore the onSubmit prop, it's used by GFE to intercept the form submit event to check your solution.
      // onSubmit={submitForm}>
    >
      <div>
        <label>
          Name
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

export default Component;
