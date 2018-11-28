import { createDrawerNavigator } from "react-navigation";
import {
  AccountList,
  ContactUs,
  AccountDetails,
  BranchLocator,
  TransferMoney,
  ConfirmTransfer,
  PayBill,
  ConfirmBillPayment
} from "./screens";

export default createDrawerNavigator({
  Accounts: AccountList,
  AccountDetails,
  "Contact Us": ContactUs,
  "Find a Branch": BranchLocator,
  "Pay Bill": PayBill,
  ConfirmBillPayment,
  "Transfer Money": TransferMoney,
  ConfirmTransfer
});
