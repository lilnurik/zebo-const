import "./Form.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const telegramBotKey = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chat_id = process.env.REACT_APP_TELEGRAM_USER_ID;

const Form = () => {
  const { t, i18n } = useTranslation("translation");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  let handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let text = Имя: ${firstName}, Номер телефона: ${phoneNumber};
      let query = chat_id=${chat_id}&text=${text};
      let result = await fetch(
        https://api.telegram.org/bot${telegramBotKey}/sendMessage?${query},
        {
          method: "POST",
        }
      );
      await result.json();
      setFirstName("");
      setPhoneNumber("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-form">
      <h4>{t("form.1")}</h4>
      <p>{t("form.2")}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <i className="fa-solid fa-user" />
          <input
            type="text"
            placeholder={t("form.3")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <i className="fa-sharp fa-solid fa-phone" />
          <input
            type="text"
            placeholder="+99801234567"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">{t("form.4")}</button>
      </form>
    </div>
  );
};

export default Form;    