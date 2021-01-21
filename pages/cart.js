import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CartItemsList from "../components/Cart";
import { loadCartItems, resetCartItem } from "../actions/cartItems";
import { createOrder } from "../actions/orders";
import { createPayment } from "../actions/payments";
import LoginCard from "../components/Login";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function Cart() {
  const classes = useStyles();
  const cartDiv = React.useRef(null);

  const dispatch = useDispatch();

  const { ids, loading, user } = useSelector(({ cartItems, user }) => ({
    ids: cartItems.ids,
    loading: cartItems.loading,
    user,
  }));

  const options = {
    key: "rzp_test_sL90Ct6IqbXpSh", // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
    handler: function (response) {
      console.log(response);
    },
  };

  React.useEffect(() => {
    dispatch(loadCartItems());
  }, []);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    cartDiv?.current?.appendChild(script);
  }, [cartDiv]);

  const onCheckout = async () => {
    if (ids?.length > 0) {
      const order = await dispatch(createOrder());
      dispatch(resetCartItem());
      dispatch(loadCartItems());

      options.order_id = order.razorpay_order_id;
      options.handler = ({
        razorpay_payment_id,
        razorpay_signature,
        ...response
      }) => {
        dispatch(
          createPayment({
            for: "order",
            entity_id: order.id,
            razorpay_payment_id,
            razorpay_signature,
            gateway: "razorpay",
            status: "success",
            currency_id: 1,
          })
        );
      };
      const rz = new Razorpay(options);
      rz.on("payment.failed", function (response) {
        console.log(response.error);
      });
      rz.open();
    }
  };

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Cart
      </Typography>
      {!user.id ? (
        <LoginCard />
      ) : (
        <div ref={cartDiv}>
          <CartItemsList
            loading={loading}
            ids={loading ? [null, null, null] : ids}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onCheckout}
            disabled={ids?.length === 0}
          >
            Checkout
          </Button>
        </div>
      )}
    </>
  );
}
