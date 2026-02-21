import { HomePage } from "./HomePage";
import { ProductPage } from "./ProductPage";
import { CheckoutPage } from "./CheckoutPage";

export class PageFactory {

  static homePage(): HomePage {
    return new HomePage();
  }

  static productPage(): ProductPage {
    return new ProductPage();
  }

  static checkoutPage(): CheckoutPage {
    return new CheckoutPage();
  }

}