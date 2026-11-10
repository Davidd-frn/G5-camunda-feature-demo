/**
 * Customer Dashboard
 * Feature: US1
 * Camunda Software Development Project
 */

class CustomerDashboard {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    if (!customer.name || !customer.email) {
      throw new Error("Customer name and email are required");
    }

    this.customers.push(customer);
  }

  getCustomers() {
    return this.customers;
  }

  getCustomerCount() {
    return this.customers.length;
  }
}

export default CustomerDashboard;
