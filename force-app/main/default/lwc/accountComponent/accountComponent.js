import { LightningElement, track } from "lwc";
import { searchAccount, getAccounts } from "c/accountService";

export default class AccountComponent extends LightningElement {
   @track searchKey = "";
   data;

   handleKeyChange(event) {
      this.searchKey = event.target.value;
   }

   handleClick() {
      getAccounts()
         .then(data => {
            console.log(data);
         })
         .catch(error => {
            console.log(error.message);
         });
   }

   handleSearch() {
      this.fetchAccount(this.searchKey);
   }

   async fetchAccount(accountName) {
      try {
         let accounts = await searchAccount(accountName);
         this.data = accounts;
      } catch (err) {
         console.log(err);
      }
   }
}
