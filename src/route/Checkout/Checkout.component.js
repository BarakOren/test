import ContentWrapper from 'Component/ContentWrapper';
import ProgressBar from 'components/progressbar/progressbar.js';
import { Checkout as CheckoutSource } from 'SourceRoute/Checkout/Checkout.component';
// import 'SourceRoute/Checkout/Checkout.component';
import './Checkout.override.style.scss';

export class CheckoutComponent extends CheckoutSource {

    render() {

      const steps = [
        {
          id: 0,
          title: "Shipping",
          stepName: "SHIPPING_STEP"
        },
        {
          id: 1,
          title: "Review & Payments",
          stepName: "BILLING_STEP"
        }
      ];
        
      const currentStepId = steps.find(step => step.stepName === this.props.checkoutStep)
      const ifCurrentStepExists = currentStepId ? currentStepId.id : steps.length + 1

      return (
            <main block="Checkout">
                <ProgressBar steps={steps} currentStepId={ifCurrentStepExists} />
                <ContentWrapper wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } } label={ __('Checkout page') }>
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;