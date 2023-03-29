import SharedButton from "../shared/button-form";
import "./styles.scss";

export default function CardForm() {
  function teste() {
    console.log("teste!");
  }
  return (
    <div className="form-card">
      <form>
        <div className="row-form">
          <label>cardholder name</label>
          <input type="text" />
        </div>
        <div className="row-form">
          <label>card number</label>
          <input type="number" />
        </div>
        <div className="row-form">
          <div className="row-form-sm">
            <label>exp. date (mm/yy)</label>
            <input type="number" />
            <input type="number" />
          </div>
          <div className="row-form-sm">
            <label>cvc</label>
            <input type="number" />
          </div>
        </div>
        <div className="row-form">
          <SharedButton btn_title={"Confirm"} btn_func={teste} />
        </div>
      </form>
    </div>
  );
}
