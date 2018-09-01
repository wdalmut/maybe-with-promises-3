
module.exports = {
  get_order: (id) => Promise.resolve({id: id, confirmed: Boolean(parseInt(id)), price: 89.90}),
  send_invoice_ticket: (order) => {
    console.log("Invoice sent!", order);
    return Promise.resolve(order);
  },
  create_guests_for_event: (order) => {
    console.log("Guests created!", order);
    return Promise.resolve(order);
  },
};
