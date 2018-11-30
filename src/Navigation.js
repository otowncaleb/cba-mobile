import { createDrawerNavigator } from "react-navigation";
import {
  AccountList,
  ContactUs,
  AccountDetails,
  BranchLocator,
  TransferMoney,
  ConfirmTransfer,
  PayBill,
  ConfirmBillPayment,
  Login
} from "./screens";

export default createDrawerNavigator({
  Logout: Login,
  Accounts: AccountList,
  AccountDetails,
  "Contact Us": ContactUs,
  "Find a Location": BranchLocator,
  "Pay Bill": PayBill,
  ConfirmBillPayment,
  "Transfer Money": TransferMoney,
  ConfirmTransfer
});
