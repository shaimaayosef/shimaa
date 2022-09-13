import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ContentWrapper } from "node_modules/@scandipwa/scandipwa/src/component/ContentWrapper/ContentWrapper.component";
import ProgressBar from "../../component/ProgressBar";
export class Checkout extends SourceCheckout {
  // TODO implement logic
  render() {
    return (
      <main block="Checkout">
        <ProgressBar />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
