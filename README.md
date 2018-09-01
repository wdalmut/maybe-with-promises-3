# Use maybes with promises

In order to improve readability an example of data maybe with promises

```
const is_confirmed = compose(equals(true), prop('confirmed'));
get_order(id)
  .then(ifElse(is_confirmed, Just, always(Nothing)))
  .then(map(create_guests_for_event))
  .then(map(send_invoice_ticket))
  .then(prop('value'))
  .then(console.log)
;
```

If the order from `get_order` is not confirmed `confirmed = false` nothing is
executed.

## Usage

### Install dependencies

```sh
npm install
```

### Run it

Execute the data pipeline

```sh
$ node index.js 1
Guests created! { id: '1', confirmed: true, price: 89.9 }
Invoice sent! Promise { { id: '1', confirmed: true, price: 89.9 } }
{ id: '1', confirmed: true, price: 89.9 }
```

_nothing to do (confirmed = false)_

```sh
node index.js 0
undefined
```

